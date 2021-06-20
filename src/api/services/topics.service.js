import api from '../index';

export class TopicsService {
  static getMyTopics() {
    return api.get('topics/my');
  }

  static getOtherTopics({ page, take }) {
    return api.get(`topics/other?page=${page}&take=${take}`);
  }

  static getTopicById(id) {
    return api.get(`topics/${id}`);
  }

  static createTopic(data) {
    return api.post('topics', data);
  }
}
