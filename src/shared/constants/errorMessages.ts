// src/shared/constants/errorMessages.ts
export const ERROR_MESSAGES = {
  FETCH_USERS_FAILED: "Failed to fetch users. Please try again later.",
  FETCH_USER_BY_ID_FAILED: (id: string) =>
    `Failed to fetch user with ID ${id}. Please try again later.`,
};
