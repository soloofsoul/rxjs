import { Observable } from 'rxjs';

const newObserver = (observer: any) => {
    try {
        observer.next('Lorem ipsum 1');
        observer.next('Lorem ipsum 2');
        setInterval(() => {
            observer.next('I\'m ok');
        }, 1000);
        // observer.complete();
    } catch (err) {
        observer.error(err);
    }
};

const observable = Observable.create(newObserver);

export default observable;