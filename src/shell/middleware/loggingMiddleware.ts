import { AppMiddleware, isAppAction } from '@/shell/store';

export const loggerMiddleware: AppMiddleware = () => (next) => (action) => {
  if (!isAppAction(action) || action.type.startsWith('_')) {
    return next(action);
  }

  const result = next(action);
  console.log('dispatching', action);
  return result;
};
