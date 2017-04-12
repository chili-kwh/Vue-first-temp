<template>
  <div>
    <div>todo</div>
    <input type="text" placeholder="type your todo" v-model="inputs"
           @keyup.enter="addTodo"

    >
    <ul>
      <li v-for="(elem, idx) in todos">
          <input type="checkbox" v-model="elem.isFinished">
          <label @click="toggleTodo(elem)" :class="{disable: elem.isFinished}">{{elem.name}}</label>
          <span @click="deleteTodo(elem, idx)" class="delete">delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
  const LSkey = "todo";
  export default {
    name: "todo",
    data() {
      return {
        todos: [],
        inputs: ""
      }
    },
    mounted(){
      this.fetch();
    },
    watch: {
      todos: {
        handler(){
          this.save();
        },
        deep: true
      }
    },
    methods: {
      save(){
        localStorage.setItem(LSkey, JSON.stringify(this.todos));
      },
      fetch(){
        this.todos = JSON.parse(localStorage.getItem(LSkey));
      },
      toggleTodo(elem) {
        elem.isFinished = !elem.isFinished;
      },
      deleteTodo(elem, idx){
        this.todos.splice(idx, 1);
      },
      addTodo(e) {
        //箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。???
        console.log(this);
        console.log(this.inputs);
        this.todos.push({name: this.inputs, isFinished: false});
        this.inputs = "";
      },
    }
  }
</script>

<style>
  li{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    flex: 1;
    margin: 0 20px;
  }
  .disable {
    text-decoration: line-through;
  }
  .delete{
    text-align: right;
    color: red;
    font-size: 11px;
    cursor: pointer;
  }
</style>
