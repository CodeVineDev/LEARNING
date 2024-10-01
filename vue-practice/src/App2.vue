<script>
export default {
  data() {
    return {
      name: 'Chukwudolue Divine',
      status: 'pending',
      tasks: ['Football', 'Basketball', 'Golf'],
      link: 'https://codevine.vercel.app/',
      golink: 'https://google.com'
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending'){
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
  // IN VUE THERE IS OPTIONS API AND COMPOSITIONS API
  //  OPTIONS API
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

  <a v-bind:href="link">Go to my website</a>
  <a :href="golink">Google</a>

  <br>

  <button @click="toggleStatus">Change status</button>
</template>

<style scoped>
h1{
  color: blue;
}
p{
  color: green;
}
</style>