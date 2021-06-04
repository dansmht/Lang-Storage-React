import { UsersService } from '../../api/services/users.service';
import { setUser, setUserIsLoading } from '../slices/userSlice';

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch(setUserIsLoading(true));
  try {
    const user = await UsersService.getCurrentUser();
    console.log('USER', user);
    dispatch(setUser(user));
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch(setUserIsLoading(false));
  }
};
