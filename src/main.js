import Vue from 'vue';
import App from './App.vue';
import { Server } from "@miragejs/server";

const server = new Server();

server.db.loadData({
  todos: [
    { id: 1, text: "Learn Mirage JS"},
    { id: 2, text: "Do laundry"},
    { id: 3, text: "Relax and watch Netflix"}
  ]
})

server.get('/api/todos', schema => {
  return schema.db.todos;
});

server.post('/api/todos', (schema, request) => {
  let newToDo = JSON.parse(request.requestBody).data;
  return schema.db.todos.insert(newToDo);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
