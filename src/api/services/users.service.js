import api from '../index';

export class UsersService {
  static getCurrentUser() {
    return api.get('auth/status');
  }
}
