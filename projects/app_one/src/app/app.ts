import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SharedService } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app_one');
  public inputForm = new FormGroup({
    inputField: new FormControl(''),
  });
  sharedService = inject(SharedService);

  onSubmit() {
    console.log(this.inputForm.value);
    this.sharedService.sendSharedDate(this.inputForm.value.inputField || '');
  }
}
