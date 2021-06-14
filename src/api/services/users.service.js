import api from '../index';

export class UsersService {
  static getCurrentUser() {
    return api.get('auth/status');
  }

  static logout() {
    return api.post('auth/logout');
  }
}
