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

  observableExample.subscribe({
    next: nextHandler,
    error: errorHandler,
    complete: completeHandler
  });
};