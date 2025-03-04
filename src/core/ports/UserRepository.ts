// src/core/ports/UserRepository.ts
import type { User } from "../domain/models/User";

export interface UserRepository {
  getUsers():  Promise<API.IResponse<User[]>>;
  getUserById(id: string): Promise<API.IResponse<User>>;
}
