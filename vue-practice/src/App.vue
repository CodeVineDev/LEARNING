<script>
export default {
  setup() {
    const name = 'Chukwudolue Divine';
    const status = 'active';
    const tasks = ['Football', 'Basketball', 'Golf'];

  }
  // IN VUE THERE IS OPTIONS API AND COMPOSITIONS API
  // COMPOSITIONS API
};

</script>
<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else> User is Inactive</p>


  <div>
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