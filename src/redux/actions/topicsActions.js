import { TopicsService } from '../../api/services/topics.service';
import { setTopics, setTopicsIsLoading } from '../slices/topicsSlice';

export const fetchOtherTopics = () => async (dispatch) => {
  dispatch(setTopicsIsLoading(true));
  try {
    const topics = await TopicsService.getCurrentUser();
    console.log('Topics', topics);
    dispatch(setTopics(topics));
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch(setTopicsIsLoading(false));
  }
};
