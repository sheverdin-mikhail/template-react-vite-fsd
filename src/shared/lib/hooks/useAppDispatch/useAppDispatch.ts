import { AppDispatch } from 'app/providers';
import { useDispatch } from 'react-redux';

// typed dispatcher
export const useAppDispatch = () => useDispatch<AppDispatch>();
