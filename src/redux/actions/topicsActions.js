import { TOPICS_PER_PAGE } from '../../utils/constants';
import { TopicsService } from '../../api/services/topics.service';
import { setTopics, setTopicsIsLoading, setTotalTopics } from '../slices/topicsSlice';

export const fetchOtherTopics = () => async (dispatch, getState) => {
  dispatch(setTopicsIsLoading(true));

  try {
    const { topics, total } = await TopicsService.getOtherTopics({
      page: getState().topics.currentPage,
      take: TOPICS_PER_PAGE,
    });

    dispatch(setTotalTopics(total));
    dispatch(setTopics(topics));
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch(setTopicsIsLoading(false));
  }
};
