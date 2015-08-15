import moment from 'moment';

export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);

    const REQUEST = type + '_REQUEST';
    const SUCCESS = type + '_SUCCESS';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST, receivedAt: moment() });

    return promise
      .then(res => {
        next({ ...rest, res, type: SUCCESS, receivedAt: moment() });
        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE, receivedAt: moment() });
        console.log(error);

        return false;
      });
  };
}
