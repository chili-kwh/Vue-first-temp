/**
 * Created on 17/4/12.
 */

import Vue from "vue";
import todo from "./components/todo.vue"

new Vue({
  el: "#app",
  template: "<todo></todo>",
  components: {
    todo
  }
});
