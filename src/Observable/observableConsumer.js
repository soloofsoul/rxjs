import observableExample from './observableExample';

export const testObservable = () => {
  console.group('Test Observable:');

  const nextHandler = x => {
    console.log('-- Next handler: ', x);
  };

  const errorHandler = err => {
    console.log('-- Error handler: ', err);
  };

  const completeHandler = () => {
    console.log('-- Complete handler');
    console.groupEnd();
  };

  // this subscription will log only 3 values as it was unsubscribed before last value was returned
  const subscription1 = observableExample.subscribe({
    next: nextHandler,
    error: errorHandler,
    complete: completeHandler
  });

  subscription1.unsubscribe();

  // and this subscription will log all 4 values returned by obsrver
  observableExample.subscribe({
    next: nextHandler,
    error: errorHandler,
    complete: completeHandler
  });
};