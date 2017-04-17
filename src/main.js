/**
 * Created on 17/4/12.
 */

import Vue from "vue";
// import todo from "./components/todo.vue"
import todo from "./components/todo2.vue"
import test from "./components/test.vue"

new Vue({
  el: "#app",
  // template: "<todo></todo>",
  template: "<todo></todo>",
  // template: "<test></test>",
  components: {
    todo, test
  }
});
