import { setDarkMode } from '../slices/settingsSlice';

export const toggleDarkMode = () => (dispatch, getState) => {
  const darkMode = getState().settings.darkMode;

  dispatch(setDarkMode(!darkMode));
};
