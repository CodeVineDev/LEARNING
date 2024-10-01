<script setup>
import { ref } from 'vue';

    const name = ref ('Chukwudolue Divine');
    const status =ref('pending');
    const tasks = ref(['Football', 'Basketball', 'Golf']);

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'active'
      }
    };

  // IN VUE THERE IS OPTIONS API AND COMPOSITIONS API
  // COMPOSITIONS API
</script>
<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else> User is Inactive</p>


  <div>
    <h3>Games:</h3>
    <ul>
      <li v-for="games in tasks" :key="games"> {{ games }}</li>
    </ul>
  </div>

  <br>

  <button @click="toggleStatus">Change status</button>
</template>

<style scoped>
h1 {
  color: blue;
}

p {
  color: green;
}
</style>