import { TopicsService } from '../../api/services/topics.service';
import { setTopics, setTopicsIsLoading, setTotalTopics } from '../slices/topicsSlice';

export const fetchOtherTopics = () => async (dispatch, getState) => {
  dispatch(setTopicsIsLoading(true));
  try {
    const { topics, total } = await TopicsService.getOtherTopics({ page: getState().topics.currentPage, take: 12 });

    dispatch(setTotalTopics(total));
    dispatch(setTopics(topics));
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch(setTopicsIsLoading(false));
  }
};
