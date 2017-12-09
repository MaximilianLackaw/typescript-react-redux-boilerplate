export default function loggerMiddleware(store) {
  return next => action => {
    console.log(action);  // tslint:disable-line no-console
    return next(action);
  };
}
