import { IRootState } from '../store/store';
import { TypedUseSelectorHook, useSelector as useReduxSelector  } from 'react-redux';


export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector
