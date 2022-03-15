<template>
  <div class="bg-primary q-pt-xl" style="height:80vh">
    <div>

    <!-- Department Selectors -->
       <div class="row q-mx-auto justify-evenly" style="width:90%" >
        <div class="bg-white " style="width: 260px;border-radius:10px">
            <q-select  v-model="model1" :options="options" use-input input-debounce="0" @filter="filterFn" label="Select Department To" class="q-px-md q-mx-auto" style="width: 250px" >
              <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
            </q-select>
          </div>

          <div class="bg-white " style="width: 260px;border-radius:10px">
            <q-select  v-model="model2" :options="options" use-input input-debounce="0" @filter="filterFn" label="Select Department From" class="q-px-md q-mx-auto" style="width: 250px" >
              <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
            </q-select>
          </div>
        </div>

      <!-- Open Dialog Button -->
      <div class="row q-mt-xl">
        <q-space/>

        <q-btn label="Request" style="width:15%; height:50px"  color="secondary" @click="bar = true" class="q-mx-auto" />
        <!-- <q-btn label="Request" style="width:15%; height:50px" v-show="model1 !== null && model2 !== null "  color="secondary" @click="bar = true" class="q-mx-auto" /> -->

        <q-space/>
      </div>

    </div>

    <!-- Draft Dialog -->
       <q-dialog v-model="bar" persistent>
          <q-card style="width: 1200px; max-width: 90vw;margin-left: 20%">
            <q-bar class="bg-secondary text-white" style="height:60px">
              <p class="text-h6 q-my-auto">New Draft</p>

              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
                <div class="column">
                  <div class="bg-white col q-px-md column justify-between q-pb-md" style="height:300px;border-radius:0 0 4px 4px">
                    <q-input v-model="text" label="To:" />
                    <q-input v-model="text" label="Title:" />
                    <q-input v-model="text" type="textarea" placeholder="Add Comments" />
                    <q-input  @change="fileSelected" ref="selectImageFile" type = "file" v-show="false" />

                    <q-banner v-show="selectedFile" dense class="row flex justify-between bg-blue-3 rounded-borders q-mt-md">
                      <template v-slot:avatar>
                        <q-icon name="attach_file" color="black" />
                      </template>
                      {{selectedFile}}
                      <!-- <q-space /> -->
                      <span>
                        <q-btn round color="red" icon="close" size="0.5rem" class = "q-ml-lg" @click="unSelectFile" />
                      </span>
                    </q-banner>

                    <div class="row justify-between q-mt-xl " style="height:40px">
                      <div style="width:20%" class="row">
                        <q-btn label="send" style="width: 50%;" color="negative"/>
                      </div>

                      <div style="width:13%" class="row justify-evenly">
                        <q-btn round color="secondary" icon="attach_file" @click="selectFile" />
                        <!-- <q-icon name="attach_file" class="cursor-pointer" size="2rem" v-ripple/> -->
                        <!-- <q-icon name="image" class="cursor-pointer" size="2rem" v-ripple/> -->
                        <!-- <q-icon name="delete" class="cursor-pointer" size="2rem" v-ripple/> -->
                      </div>
                    </div>
                  </div>
                </div>

            </q-card-section>
          </q-card>
        </q-dialog>

  </div>



  <!-- </div> -->
</template>

<script>
import { ref } from 'vue'

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  name: 'Mail',
  setup () {
    const options = ref(stringOptions)
    return {
      normal: false,
      text: ref(''),
      model1: ref(null),
      model2: ref(null),
      dialog: ref(false),
      bar: ref(false),
      maximizedToggle: ref(true),
      selectedFile: ref(null),
      options,
       filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }

    }
  },
  methods: {
    selectFile(){
      this.$refs.selectImageFile.$el.click();
    },
    fileSelected(el){
      el=el.split('\\');
      el=el[el.length-1];
      this.selectedFile = el;
    },
    unSelectFile(){
      this.selectedFile = null;
    }
  }
}
</script>

<style scoped>

</style>
