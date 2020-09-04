import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(contactForm) {
    console.log("Submitted Contact Us form")
    const contents = Object.entries(contactForm)
    for (const content of contents) {
      console.log(content[0] + ": " + content[1]);
    }
    const link = `https://api.diem.life/contact?name=${contactForm.name}&email=${contactForm.email}&desc=${contactForm.message}`;
    console.log(link);
    return this.http.post(`https://api.diem.life/contact?name=${contactForm.name}&email=${contactForm.email}&desc=${contactForm.message}`, null)
      .subscribe((result) => {
        console.log("Subscribed to observable");
        console.log(result);
      });
  }

  checkBlankFields() {
    return this.form.get('name').hasError('required') ||
      this.form.get('email').hasError('required') ||
      this.form.get('message').hasError('required');
  }

}
