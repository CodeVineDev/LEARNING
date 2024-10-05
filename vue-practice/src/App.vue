
<script setup>
import { ref } from 'vue';

const status = ref('congratulations');
const compliment = ref(' You have gained Access')
const users = ref([]);
const link = 'https://codevine.vercel.app/';
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'congratulations') {
    status.value = 'Sorry'
  } else {
    status.value = 'congratulations'
  };


  if (compliment.value === ' You have gained Access') {
    compliment.value = 'You are not qualified'
  } else {
    compliment.value = ' You have gained Access'
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    users.value.push(newTask.value);
    newTask.value = '';
  }
}
const deleteTask = (index) => {
  users.value.splice(index, 1)
}

</script>
<template>
  <div class=" center-box">
    <h1 v-if="status === 'congratulations'">Congratulations</h1>
    <h1 v-else>Sorry</h1>
    <p v-if="compliment === ' You have gained Access'"> You have gained Access</p>
    <p v-else>You are not qualified</p>
    <button @click="toggleStatus"> Continue</button>
    <div>
      <ul>
        <li v-for="(user, index) in users" :key="user">
          <span>
            {{ user }}
          </span>
          <button @click="deleteTask(index)">x</button>
        </li>
      </ul>
      <a :href="link"><button>Go to My website</button></a>
    </div>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task </label>
      <input type="text" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">Submit</button>
    </form>
  </div>

 

</template>


<style scoped>
.new{
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1rem;
}
.todo-list {
  border: 1px solid grey;
  border-radius: 5px;
  padding: max(3vw, 1rem);

}

.center-box {
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
  width: min(60%, 500px);
  margin: auto;
  font-weight: 400;
  padding: max(3vw, 1rem);
  margin-bottom: 2rem;
}

h1 {
  font-size: clamp(3rem, 2vw, 1rem);
  color: green;
}

p {
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
}

ul {
  text-align: left;
}
</style>






























<!-- <script setup>
import { ref } from 'vue';


const todoList = ref('');
const todos = ref([]);
const addList = () => {
  if (todoList.value.trim() !== '') {
    todos.value.push(todoList.value)
    todoList.value = '';
  }
}
const deleteTodo = (todoIndex) => {
  todos.value.splice(todoIndex, 1)
}




</script>
<template>
  <div class="todo-list">
    <form @submit.prevent="addList">
      <div>
        <h1>Todo List</h1>
        <label for="todoList">New ToDos </label>
        <input type="text" name="todoList" id="todoList" v-model="todoList">
        <button class="add-task" type="submit"> Add List</button>
      </div>
      <div class="new" v-for="(todo, todoIndex) in todos" :key="todo">
        <span>
          {{ todo }}
        </span>
        <button @click="deleteTodo(todoIndex)">x</button>
      </div>
    </form>

  </div>

</template>


<style scoped>
.add-task{
  margin-left: 2px;
  background: green;
  border-radius: 2px;
  border: none;
  padding: 3px 5px;
  color: white
}
.new{
  border: 1px solid grey;
  border-radius: 5px;
  padding: .5rem;
  margin: .5rem 0;
}
.new button{
  margin-left: 1rem;
  background: rgb(255, 121, 121);
  border-radius: 2px;
  border: 1px solid rgb(255, 121, 121);
}
.todo-list {
  border: 1px solid grey;
  border-radius: 5px;
  padding: max(3vw, 1rem);


}

.center-box {
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
  width: min(60%, 500px);
  margin: auto;
  font-weight: 400;
  padding: max(3vw, 1rem);
  margin-bottom: 2rem;
}

h1 {
  font-size: clamp(3rem, 2vw, 1rem);
  color: green;
}

p {
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
}

ul {
  text-align: left;
}
</style> -->


































<!-- <script setup>
import { ref } from 'vue';

    const name = ref ('Chukwudolue Divine');
    const status =ref('active');
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
</style> -->