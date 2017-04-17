<template>
  <div id="test">
    <div>
      test {{message}}
      <list1></list1>
      <list10></list10>
      <list2></list2>
      <list3></list3>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import list3 from "./listComponent.vue";


  Vue.component("list1", {   //全局组件注册
    functional: true,
    render(h) {
      return (
        <div>全局组件-render</div>
      )
    },
  });

  Vue.component("list10", {   //全局组件注册
    template: `
    <div>
      <span>全局组件-模版字符串</span>
    </div>
    `
  });

  const list2d = {
    render(h) {
      return (
        <div>局部组件</div>
      )
    }
  };

  const list22 = {
    template: `
    <div>
      <span>局部组件-模版字符串</span>
    </div>
    `
  }

  var te = {
    name: "te",
    components: {
      "list2": list22,  //局部组件注册
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
