
import { testObservable } from './Observable/observableConsumer';

// ------- Observable -----------------
testObservable();

if (module.hot) {
  module.hot.accept();
}