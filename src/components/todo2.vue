<template>
  <div class="container">
    <div>todo</div>
    <input type="text" placeholder="type your todos" v-model="input"
           @keyup.enter="addTodo"
    >
    <ul>
      <li v-for="(todo, index) in todos">
        <todoItem :todo="todo"></todoItem>
        <!--<input type="checkbox" v-model="todo.isDone">-->
        <!--<label :class="{disable: todo.isDone}"-->
               <!--@click="toggleTodo(todo, index)"-->
        <!--&gt;{{todo.name}}</label>-->
        <!--<span @click="deleteTodo(index)">delete</span>-->
      </li>
    </ul>
  </div>
</template>

<script>

  const todoItem = {
    props: ['todo'],
    template: `
        <div>
            <input type="checkbox" v-model="todo.isDone">
            <label :class="{disable: todo.isDone}"
                   @click="toggleTodo(todo, index)"
            >{{todo.name}}</label>
            <span @click="deleteTodo(index)">delete</span>
        </div>
    `
  }

  export default {
    name: "todo2",
    components: {
      todoItem
    },
    data() {
      return {
        todos: [],
        input: ""
      }
    },
    watch: {
      todos: {
        handler(){
          this.update();
        },
        deep: true
      }
    },
    mounted() {
      this.todos = this.fetch() || this.todos;
    },
    methods: {
      update(){
        localStorage.setItem("todo-vue", JSON.stringify(this.todos))
      },
      fetch(){
        return JSON.parse(localStorage.getItem("todo-vue"));
      },
      addTodo(){
        this.todos.push({name: this.input, isDone: false});
        this.input = "";
      },
      deleteTodo(index){
        this.todos.splice(index, 1)
      },
      toggleTodo(elem){
        elem.isDone = !elem.isDone
      }
    }
  }
</script>

<style>
  .container {
    margin: 30px;
  }

  .disable {
    text-decoration: line-through;
  }

  li {
    width: 200px;
    display: flex;
    align-items: center;
  }

  label {
    flex: 1;
    margin: 0 20px;
  }

  span {
    font-size: 11px;
    color: #f00;
    cursor: pointer;
  }
</style>
