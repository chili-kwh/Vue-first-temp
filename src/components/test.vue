<template>
  <div id="test">
    <div>
      test {{message}}
      <list1></list1>
      <list2></list2>
      <list3></list3>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import list3 from "./listComponent.vue";


  Vue.component("list1", {   //全局组件注册
//    functional: true,
    render(h) {
      return (
        <div>全局组件</div>
      )
    }
  });


  const list2d = {
    render(h) {
      return (
        <div>局部组件</div>
      )
    }
  };

  var te = {
    name: "te",
    components: {
      "list2": list2d,  //局部组件注册
      list3
    },
    data: ()=> {
      return {
        message: "qu"
      }
    }
  };


  export default te;

</script>
