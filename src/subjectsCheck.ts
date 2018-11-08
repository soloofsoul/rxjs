import { subject, behaviorSubject, replaySubject } from './subjects';

export const checkSubject = (addItem: any) => {
    subject.subscribe(
        data => addItem('Observer 1: ' + data),
        err => addItem(err),
        () => addItem('Observer 1 Completed')
    );

    subject.next('The 1st thing has been set');

    const observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    );

    subject.next('The 2nd thing has been sent');
    subject.next('The 3rd thing has been sent');

    observer2.unsubscribe();

    subject.next('The final thing has been sent');
};

export const checkBehaviorSubject = (addItem: any) => {
    behaviorSubject.subscribe(
        data => addItem('Observer 1: ' + data),
        err => addItem(err),
        () => addItem('Observer 1 Completed')
    );

    behaviorSubject.next('The 1st thing has been set');

    // the main difference between usual Subject that in this case this next value will be accessible for observer 2
    // also behavioral subject has initial value
    behaviorSubject.next('... Observer 2 is about to subscribe ...');

    const observer2 = behaviorSubject.subscribe(
        data => addItem('Observer 2: ' + data)
    );

    behaviorSubject.next('The 2nd thing has been sent');
    behaviorSubject.next('The 3rd thing has been sent');

    observer2.unsubscribe();

    behaviorSubject.next('The final thing has been sent');
};

export const checkReplaySubject = (addItem: any) => {
    replaySubject.subscribe(
        data => addItem('Observer 1: ' + data),
        err => addItem(err),
        () => addItem('Observer 1 Completed')
    );

    replaySubject.next('The 1st thing has been set');
    replaySubject.next('Another thing has been set');
    replaySubject.next('... Observer 2 is about to subscribe ...');

    const observer2 = replaySubject.subscribe(
        data => addItem('Observer 2: ' + data)
    );

    replaySubject.next('The 2nd thing has been sent');
    replaySubject.next('The 3rd thing has been sent');

    observer2.unsubscribe();

    replaySubject.next('The final thing has been sent');
};