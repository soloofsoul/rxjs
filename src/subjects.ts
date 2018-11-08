import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

export const subject = new Subject();
export const behaviorSubject = new BehaviorSubject('First');

// difference is in amount of events which new subscriber will see
export const replaySubject = new ReplaySubject(2);