<template>
    <div class="q-pa-md bg-primary" style="height:80vh">
      <div class="q-gutter-y-md" style="width: 100%">
        <q-card flat class="" >
          <q-tabs
            v-model="label"
            class=" text-secondary bg-primary q-pa-none text-white "
            align="justify"
            indicator-color="positive"
            v-ripple="false"
            style=""
          >
            <div class="col-6">
              <q-tab name="mails"  @click="selected = 1"  :ripple="false"  class="q-mx-auto q-px-none q-py-md" style="width:100%; " > <p  :class="{highlight:selected == 1}" style="border-radius: 15px" class="hello q-px-xl q-py-sm q-my-auto " >Incomings</p> </q-tab>
            </div>

            <div class="col-6">
              <q-tab name="alarms" @click="selected = 2"  :ripple="false" class="q-mx-auto q-px-none q-py-md " style="width:100%; " > <p  :class="{highlight:selected == 2}" style="border-radius: 15px" class="  q-px-xl q-py-sm q-my-auto " >Outgoings</p> </q-tab>
            </div>
          </q-tabs>

          <q-tab-panels v-model="label" animated class="bg-primary text-white q-pt-lg">
            <q-tab-panel name="mails">
               <q-scroll-area style="height: 59vh;">
                 <div class="text-subtitle2 text-secondary">
                <!-- Incomings -->
                 <q-list separator v-for="n in 2" :key="n" >
                  <q-item clickable class="row text-center q-mb-sm bg-white" style="border-radius: 4px">
                    <div class="row col-9">
                      <q-item-section  >Request From DDA</q-item-section>
                      <q-item-section>Network is not working and the windows </q-item-section>
                      <q-item-section>Oct /13/2021 : 10:30am.</q-item-section>
                    </div>
                    <q-item-section>
                      <div class="row justify-evenly">
                        <q-btn label="Forward" class="bg-negative text-white text-subtitle2" style="width: 40%;"/>
                        <q-btn label="Comments" class="bg-negative text-white text-subtitle2" style="width: 40%;"/>
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              </q-scroll-area>
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <q-scroll-area style="height: 59vh;">
                <div class="text-subtitle2 text-secondary">
                  <!-- Outgoings -->
                  <q-list separator v-for="n in 3" :key="n" >
                    <q-item clickable class="row text-center q-mb-sm bg-white" style="border-radius: 4px">
                      <div class="row col-9">
                        <q-item-section  >Request to DDA</q-item-section>
                        <q-item-section>Network is not working and the windows </q-item-section>
                        <q-item-section>Oct /13/2021 : 10:30am.</q-item-section>
                      </div>

                      <q-item-section>
                        <div class="row justify-evenly" style="width">
                          <span class=" text-negative q-my-auto text-subtitle2" style="width: 40%;"> Pending</span>
                          <q-btn label="Comments" class="bg-negative text-white text-subtitle2" style="width: 40%;"/>
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-scroll-area>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>

<!-- Add Mail Button  -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
        round
        size="1.3rem"
        class="q-mr-md q-mb-lg"
          icon="add"
          color="positive"
          @click="bar = true"
        />

      </q-page-sticky>

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
                    <q-input v-model="text" type="textarea" placeholder="Message" />
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
                      </div>
                    </div>
                  </div>
                </div>

            </q-card-section>
          </q-card>
        </q-dialog>


  </div>
</template>

<script>
import { ref } from 'vue'

const stringOptions = [
  'Department A', 'Department B', 'Department C', 'Department D', 'Department E', 'Department F'
]


export default {
  setup () {
    const options = ref(stringOptions)
    return {
      options,
      label: ref('mails'),
      bar: ref(false),
      model1: ref(null),
      selectedFile: ref(null),
      selected: 1,
      onClick () {
        console.log('Clicked on a fab action')
      },

      // Filter Function
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

p{
  background: #1C2E3D;
}
.highlight{

  background-color: white !important;
  color: #FE0D0D;


}
</style>
