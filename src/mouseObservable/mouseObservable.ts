import { fromEvent } from 'rxjs';

const mouseObserable = fromEvent(document, 'mousemove');

export default mouseObserable;