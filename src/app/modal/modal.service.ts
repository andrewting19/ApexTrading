import {ModalComponent} from './modal.component';
import * as createFocusTrap from 'focus-trap/dist/focus-trap';

declare var $: any;

export class ModalService {
  private modals: ModalsDictionary = {};
  focusTrap: any;
  focusTrapOptions = {
    escapeDeactivates: false,
    clickOutsideDeactivates: true
  };
  add(modal: ModalComponent): void {
    this.modals[modal.id] = modal;
  }

  remove(id: string) {
    delete this.modals[id];
  }
  modalIsOpened(): boolean {
    return $('body').hasClass('modal-open');
  }
  open(id: string, options?: any) {

    const modal: ModalComponent = this.modals[id];
    if (modal) {
      modal.open(options);
    }
    setTimeout(() => {
      if ($('#' + id).length > 0) {
        this.focusTrap = createFocusTrap('#' + id, this.focusTrapOptions);
        this.focusTrap.activate();
      }
    });
  }

  close(id: string) {
    const modal: ModalComponent = this.modals[id];
    if (modal && this.focusTrap) {
      this.focusTrap.deactivate(id);
      modal.close();
    }
  }
}

interface ModalsDictionary {
  [key: string]: ModalComponent;
}
