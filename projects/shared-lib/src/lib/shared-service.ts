import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedDataSubject = new BehaviorSubject<string>('');

  public readonly sharedData$ = this.sharedDataSubject.asObservable();

  sendSharedDate(data: string) {
    console.log('Sending shared data:', data);
    this.sharedDataSubject.next(data);
  }
}
