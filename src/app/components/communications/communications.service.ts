import { BehaviorSubject, Observable } from 'rxjs';

export class CommunicationsService {
  private message = 'default';
  private subject = new BehaviorSubject<string>('default value');

  getMessage() {
    return this.message;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
    this.subject.next(newMessage);
  }

  getSubscription(): Observable<string> {
    return this.subject.asObservable();
  }
}
