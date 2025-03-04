<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

import { useUser } from "../composable/useUser";
import UserTable from "../components/UserTable.vue";

const { users, fetchUsers, error } = useUser();

onMounted(async () => {
  await fetchUsers();
});
</script>

<template>
  <div>
    <UserTable :error="error" :users="users" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
