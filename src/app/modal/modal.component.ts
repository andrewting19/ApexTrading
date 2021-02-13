import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() id: string;
  @Input() className: string | string[];
  @Input() removeCloseLogic = false;
  @Input() disableBgClose = false;
  @Input() customMode = false;
  focusTrap: any;
  private readonly element: any;

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.close();

    if (typeof this.className === 'string') {
      this.renderer.addClass(this.el.nativeElement, this.className);
    }
    if (typeof this.className === 'object') {
      this.className.forEach((cls: string) => {
        this.renderer.addClass(this.el.nativeElement, cls);
      });
    }
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'modal-inner' && !this.removeCloseLogic && !this.disableBgClose) {
        modal.close();
      }
    });
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    if (this.element.style.display !== 'none') {
      document.body.classList.remove('modal-open');
    }
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(options?: any): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
    this.renderer.addClass(this.element, 'is-opened');
    setTimeout(() => this.onOpen.emit(options), 0);
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.renderer.removeClass(this.element, 'is-opened');
    setTimeout(() => this.closeModal.emit(), 0);
  }

  onClick(event: any) {
    if (event.path[0].classList.contains('modal-inner') && !this.removeCloseLogic) {
      this.close();
    }
  }

}
