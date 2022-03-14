<template>
    <q-item clickable class="text-center q-mb-sm bg-white" style="border-radius: 4px">
      <q-checkbox v-model="val" color="negative" />
      <q-item-section  >Request From DDA</q-item-section>
      <q-item-section>Network is not working and the windows </q-item-section>
      <q-item-section>Oct /13/2021 : 10:30am.</q-item-section>
      <q-item-section >
        <div class="row justify-evenly text-subtitle2">
          <q-btn label="Completed" no-caps class="bg-negative text-white text-subtitle2" style="width: 31%;"/>
            <div style="width: 39%">Oct /13/2021 <br> 10:30am.</div>
          <q-btn label="Comments" no-caps class="bg-negative text-white text-subtitle2" style="width: 30%;"/>
        </div>
      </q-item-section>
    </q-item>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Log',
  setup () {
    return {
      val: ref(false)
    }
  }
}
</script>

<style scoped>

</style>
