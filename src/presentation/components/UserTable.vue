<script setup lang="ts">
import type { User } from '@/core/domain/models/User';

interface Props {
  error: string | null;
  users: User[]
}

const props = withDefaults(defineProps<Props>(),{
    error:'Some thing error'
});

</script>
<template>
  <div v-if="error" class="text-red-500 text-2xl font-medium">{{ error }}</div>
  <div class="wrapper bg-white shadow-md rounded-md overflow-hidden" v-else>
    <!-- Table Header -->
    <div
      class="wrapper-label bg-gray-300 p-3 text-gray-700 font-semibold uppercase tracking-wide"
    >
      <div class="grid grid-cols-[80px_120px_240px] text-center">
        <span>ID</span>
        <span>Name</span>
        <span>Email</span>
      </div>
    </div>

    <!-- Table Body -->
    <div class="bg-white">
      <template v-if="users.length > 0">
        <ul>
          <li
            v-for="(user, index) in users"
            :key="user.id"
            class="grid grid-cols-[80px_120px_240px] p-3 text-gray-700 text-center border-b even:bg-gray-100"
          >
            <span>{{ user.id }}</span>
            <span>{{ user.name }}</span>
            <span class="truncate">{{ user.email }}</span>
          </li>
        </ul>
      </template>

      <!-- No Data Message -->
      <template v-else>
        <div class="text-center p-6 text-gray-500 font-medium">NO DATA</div>
      </template>
    </div>
  </div>
</template>
<style scoped></style>
