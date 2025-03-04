// src/core/application/UserService.ts
import type { UserRepository } from '../ports/UserRepository';
import type { User } from '../domain/models/User';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers():Promise<API.IResponse<User[]>> {
    try {
      const response = await this.userRepository.getUsers();
      return response
    } catch (error) {
      console.error('Service Error:', error);
      throw new Error('Unable to load users. Please try again later.');
    }
  }

  async getUserById(id: string): Promise<API.IResponse<User>> {
    try {
      const response = await this.userRepository.getUserById(id);
      return response
    } catch (error) {
      console.error('Service Error:', error);
      throw new Error(`Unable to load user with ID ${id}. Please try again later.`);
    }
  }
}