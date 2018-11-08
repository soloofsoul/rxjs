import observable from './observable';

export const checkObservable = (addItem: any) => {
    const observer = observable.subscribe(
        (x: any) => addItem(x),
        (error: any) => addItem(error),
        () => addItem('Completed')
    );

    setTimeout(() => {
        const ovserver2 = observable.subscribe(
            (x:any) => addItem('Subscriber 2: ' + x)
        );

        setTimeout(() => {
            ovserver2.unsubscribe();
        }, 6000);
    }, 1000);

    setTimeout(() => {
        observer.unsubscribe();
    }, 6000);
};