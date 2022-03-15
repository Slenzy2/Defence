<template>
    <div class="q-pa-md bg-primary" style="height:80vh">
      <div class="q-gutter-y-md" style="width: 100%">
        <q-card>
          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            icon="add"
            label="Add User"
            class = "accordion-label"
          >
            <q-card>
              <q-card-section>
                <div class="column">
                  <div class="bg-white col q-px-md column justify-between q-pb-md" style="height:300px;border-radius:0 0 4px 4px">
                    <div class = "q-mx-xl">
                      <q-input label="Username:" />
                      <q-input label="Password:" />
                      <q-input label="Role:" />
                      <q-input label="Department:" />
                    </div>

                    <div class="row justify-center q-mt-xl " style="height:40px">
                      <div style="width:20%" class="row">
                        <q-btn label="Create User" style="width: 50%;" color="negative"/>
                      </div>
                    </div>
                  </div>
                </div>

              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-card>
        <q-card flat class="" >
          <q-scroll-area style="height: 59vh;">
            <div class="text-subtitle2 text-secondary">
              <!-- Incomings -->
                <q-list separator v-for="n in 15" :key="n" >
                <q-item clickable class="row text-center q-mb-sm bg-white" style="border-radius: 4px">
                  <div class="row col-9">
                    <q-item-section  >Username </q-item-section>
                    <q-item-section>ROLE </q-item-section>
                    <q-item-section>Department</q-item-section>
                  </div>
                  <q-item-section>
                    <div class="row justify-evenly">
                      <q-btn label="Edit user" class="bg-negative text-white text-subtitle2" style="width: 40%;"/>
                      <q-btn label="Delete" class="bg-red text-white text-subtitle2" style="width: 40%;"/>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-scroll-area>
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

    <!-- Dialog for Request  -->
     <q-dialog v-model="bar" persistent>
          <q-card style="width: 1200px; max-width: 90vw;margin-left: 20%">
            <q-bar class="bg-secondary text-white" style="height:60px">
              <p class="text-h6 q-my-auto">New Request</p>

              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
                <div class="column">
                  <div class="bg-white col q-px-md column justify-between q-pb-md" style="height:300px;border-radius:0 0 4px 4px">
                    <!-- <div class="row q-mx-auto" style="width:100%" > -->
                      <!-- <div class="bg-white " style="width: 260px;border-radius:10px"> -->
                          <q-select  v-model="model1" :options="options" use-input input-debounce="0" @filter="filterFn" label="Select Department To"  >
                            <template v-slot:no-option>
                                <q-item>
                                  <q-item-section class="text-grey">
                                    No results
                                  </q-item-section>
                                </q-item>
                              </template>
                          </q-select>
                        <!-- </div> -->
                      <!-- </div> -->
                    <q-input v-model="text" label="Title:" />
                    <q-input v-model="text" type="textarea" placeholder="Add Comments" />
                    <q-input  @change="fileSelected" ref="selectImageFile" type = "file" v-show="false" />
                    <div class="row">
                      <q-banner v-show="selectedFile" dense class="bg-blue-3 rounded-borders q-mt-md">
                        <template v-slot:avatar>
                          <q-icon name="attach_file" color="black" />
                        </template>
                        {{selectedFile}}
                        <!-- <q-space /> -->
                        <span>
                          <q-btn round color="red" icon="close" size="0.5rem" class = "q-ml-lg" @click="unSelectFile" />
                        </span>
                      </q-banner>


                    </div>


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
  .clear{
  clear: both;
}


.slide-toggle{
  display: none;
}

/* .slidemenu{
  font-family: arial, sans-serif;
  max-width: 600px;
  margin: 50px auto;
  overflow: hidden;
} */

.slidemenu label{
  width: 25%;
  text-align: center;
  display: block;
  float: left;
  color: #333;
  opacity: 0.2;

}

.slidemenu label:hover{
  cursor: pointer;
  color: #666;
}

/* .slidemenu label span{
  display: block;
  padding: 10px;
} */
/*
.slidemenu label .icon{
  font-size: 20px;
  border: solid 2px #333;
  text-align: center;
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
  line-height: 50px;
  border-radius: 50%;
} */

/*Bar Style*/

.slider{
  width: 100%;
  height: 5px;
  display: block;
  background: #ccc;
  margin-top: 10px;
  border-radius: 5px;
}

.slider .bar{
  width: 50%;
  height: 5px;
  background: #333;
  border-radius: 5px;
}

/*Animations*/
.slidemenu label, .slider .bar {
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
}

/*Toggle*/

.slidemenu .slide-toggle:checked + label{
  opacity: 1;
}



.slidemenu #slide-item-1:checked ~ .slider .bar{ margin-left: 0; }
.slidemenu #slide-item-2:checked ~ .slider .bar{ margin-left: 50%; }
/* .slidemenu #slide-item-3:checked ~ .slider .bar{ margin-left: 50%; }
.slidemenu #slide-item-4:checked ~ .slider .bar{ margin-left: 75%; } */

.accordion-label{
  padding: 12px
}

</style>
