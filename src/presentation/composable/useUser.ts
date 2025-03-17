// src/presentation/composables/useUser.ts
import { ref } from "vue";
import type { User } from "../../core/domain/models/User";
import { UserService } from "../../core/application/UserService";
import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { ERROR_MESSAGES } from "../../shared/constants/errorMessages";

// Initialize dependencies
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);

// State
const users = ref<User[]>([]);
const currentUser = ref<User | null>(null);
const error = ref<string | null>(null);

// Actions
async function fetchUsers() {
	try {
		error.value = null;
		const response = await userService.getUsers();
		if (response.code === 200) {
			users.value = response.data;
		} else {
			users.value = [];
			error.value = response.message;
		}
	} catch (err) {
		error.value = ERROR_MESSAGES.FETCH_USERS_FAILED;
		console.error("Error fetching users:", err);
	}
}

async function fetchUserById(id: string) {
	try {
		error.value = null;
		const response = await userService.getUserById(id);
		if (response.code === 200) {
			currentUser.value = response.data;
		} else {
			currentUser.value = null;
			error.value = response.message;
		}
	} catch (err) {
		error.value = ERROR_MESSAGES.FETCH_USER_BY_ID_FAILED(id);
		console.error("Error fetching user by ID:", err);
	}
}

// Expose state and actions
export function useUser() {
	return {
		users,
		currentUser,
		error,
		fetchUsers,
		fetchUserById,
	};
}
