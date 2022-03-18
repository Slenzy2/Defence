<template>
<div class="bg-primary q-px-xl" style="height:80vh">

      <!-- <Watermark /> -->


  <div class="row justify-between q-py-md" style="width:100%">
    <p class="text-bold text-h5 text-secondary q-my-auto">HISTORY</p>
    <!-- <q-btn color="positive" style="width:100px" label="Delete" no-caps /> -->
  </div>
  <q-scroll-area style="height: 70vh;">
    <div class="text-subtitle2 text-secondary" >
        <q-list separator v-for="n in 10" :key="n" >
          <Log />
      </q-list>
    </div>
  </q-scroll-area>
</div>

</template>

<script>
import Log from 'components/Log.vue'
import Watermark from 'components/Watermark.vue'

export default {
  name: 'Logs',
  components:{
    Log,
    Watermark
  }

}
</script>

<style scoped>

</style>
