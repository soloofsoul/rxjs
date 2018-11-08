import mouseObserable from './mouseObservable';

export const checkMouseObservable = (addItem: any) => {
    setTimeout(() => {
        const subscription = mouseObserable.subscribe(
            (event: any) => addItem(`x: ${event.x}, y: ${event.y}`)
        );
    }, 2000);
};