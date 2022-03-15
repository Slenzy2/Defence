<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  // mounted(){
  //   let $store = useStore();
  //   console.log($store.getters.getNames());
  // }
})
</script>
