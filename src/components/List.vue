<template>
  <main>
    <div class="is-size-2 has-text-primary-dark">
        To-Do-List
    </div>
    <div v-if="isLoading"> Loading...</div>
    <div v-else class="box box-custom">
        <div class="has-text-weight-semibold date-wrap-custom"> {{currentDate}} </div>
        <div class="info-wrap">
            <div class="task-wrap" 
                v-for="todo in todos" 
                :key="todo.id"
            >
                <input type="checkbox" class="checkbox">
                <p> {{todo.text}} </p>
                <button class="button is-small"> x </button>
            </div>
            <form @submit.prevent="createToDo">
                <input 
                    type="text" 
                    placeholder="New task"
                    v-model="newToDo.text"
                    class="input"
                >
                <button
                    type="submit"
                    class="button is-small" 
                > +
                </button>
            </form>
        </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import moment from 'moment';

export default {
    name: "List",
    data() {
        return {
            isLoading: true,
            newToDo: {},
            todos: []
        }
    },
    computed: {
        currentDate() {
            let today = new Date();
            return moment(today).format('dddd , MMMM Do');   
        }
    },
    created() {
        axios.get('/api/todos').then(res => {
           this.todos = res.data;
           this.isLoading = false;
        })
    },
    methods: {
        createToDo() {
            let newToDo = { ...this.newToDo };
            this.todos.push(newToDo);
            this.newToDo = {};

            axios.post('/api/todos', { data: newToDo }).then(res => {
                console.log(res.data);
            })
        }
    }
}
</script>

<style>
.box-custom {
    width: 40%;
    margin: 2rem auto 0;

}
.date-wrap-custom {
    padding-bottom: 2rem;
}
.info-wrap {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
    margin: 0 auto;
}
.task-wrap {
    display: flex;
    justify-content: center;
}
</style>