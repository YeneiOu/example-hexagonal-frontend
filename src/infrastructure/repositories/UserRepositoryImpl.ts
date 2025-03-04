// scr/infrastructure/repositories/UserRepositoryImpl.ts
import axios, { AxiosError } from "axios";
import apiClient from "../http/apiClient";
import type { UserRepository } from "../../core/ports/UserRepository";
import type { User } from "../../core/domain/models/User";


export class UserRepositoryImpl implements UserRepository {


  async getUsers(): Promise<API.IResponse<User[]>> {
    try {
      const response = await apiClient.get<API.IResponse<User[]>>('/users');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        // จัดการข้อผิดพลาดจาก Axios
        console.error('API Error:', error.response?.data);
        throw new Error('Failed to fetch users');
      }
      throw error; // Re-throw error ถ้าไม่ใช่ Axios error
    }
  }

  async getUserById(id: string):  Promise<API.IResponse<User>> {
    try {
      const response = await apiClient.get<API.IResponse<User>>(`/users/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('API Error:', error.response?.data);
        throw new Error(`Failed to fetch user with ID ${id}`);
      }
      throw error;
    }
  }
}