import { checkObservable } from './observable/observableCheck';
import { checkMouseObservable } from './mouseObservable/mouseObservableChecks';
import { checkSubject, checkBehaviorSubject, checkReplaySubject } from './subjectsCheck';


const addItem = (value: any) => {
    const node = document.createElement('li');
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
};

// checkObservable(addItem);
// checkMouseObservable(addItem);
// checkSubject(addItem);
// checkBehaviorSubject(addItem);
checkReplaySubject(addItem);