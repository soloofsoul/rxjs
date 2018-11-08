import { Observable } from 'rxjs';

const observerFn = observer => {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  } catch (err) {
    observer.error(err);
  }
};

const observableExample = Observable.create(observerFn);

export default observableExample;