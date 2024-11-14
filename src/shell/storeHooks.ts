import { selectCount } from '@/core/selectors';
import { shallowEqual, useSelector } from 'react-redux';

export const useCount = () => useSelector(selectCount, shallowEqual);
