import api from '../index';

export class TopicsService {
  static getMyTopics() {
    return api.get('topics/my');
  }

  static getOtherTopics() {
    return api.get('topics/other');
  }

  static getTopicById(id) {
    return api.get(`topics/${id}`);
  }
}
