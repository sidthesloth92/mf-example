import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedService } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('shell');

  sharedService = inject(SharedService);

  ngOnInit() {
    this.sharedService.sharedData$.subscribe((data) => {
      console.log('Received shared data in shell:', data);
    });
  }
}
