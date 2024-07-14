<script setup>
import { ref } from 'vue';

const tasks = ref([]);
const newTask = ref('');
const showSuccess = ref(false);
const editingTaskId = ref(null);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ id: Date.now(), text: newTask.value, completed: false });
    newTask.value = '';
    showSuccess.value = true;
    setTimeout(() => showSuccess.value = false, 3000);
  }
};

const toggleTask = (id) => {
  const task = tasks.value.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};

const toggleEdit = (taskId) => {
  editingTaskId.value = editingTaskId.value === taskId ? null : taskId;
};

const updateTask = (task, event) => {
  const updatedText = event.target.textContent.trim();
  if (updatedText !== task.text) {
    task.text = updatedText;
  }
  editingTaskId.value = null;
};

</script>

<template>
  <div class="container mx-auto p-6 max-w-xs bg-white rounded-xl shadow-lg">
    <h1 class="text-stone-950 text-center font-bold text-lg mb-5">ToDo List📝✎</h1>
    <div class="add-task">
      <input class="text-stone-950" v-model="newTask" placeholder="Add your task" @click="addTask" />
      <button @click="addTask" class="add-button font-black text-3xl">+</button>
    </div>
    <p v-if="showSuccess" class="success-message text-center text-green-800 mb-5">Todo item Created Successfully.</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span class="text-stone-950"
          :class="{ 'completed': task.completed }"
          :contenteditable="editingTaskId === task.id"
          @blur="updateTask(task, $event)"
          @keydown.enter.prevent="updateTask(task, $event)"
        >{{ task.text }}</span>
        <div>
          <button @click="toggleEdit(task.id)" class="edit-button mr-2">✎</button>
          <button @click="toggleTask(task.id)" class="delete-button">🗑</button>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<style scoped>

.add-task {
  display: flex;
  align-items: center; 
  justify-content: center; 
  margin-bottom: 20px;
}

.input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.add-button {
  background-color: #4CAF50;
  color: rgb(14, 13, 13);
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  margin: auto; 
  padding: 1px 9px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
.delete-button,.edit-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: black;
}
</style>