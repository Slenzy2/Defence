<template>
  <q-page class="bg-secondary text-white q-pt-md" style="height:100vh">

<!-- Profile part  -->
    <div class=" column items-center">

      <!-- <q-avatar class="bg-primary q-mx-auto" size="5rem">
        <q-icon name="person" size="3.5rem" color="secondary"/>
      </q-avatar> -->
       <!-- Profile Image  -->
      <div class=" row">
        <q-space/>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          spinner-color="white"
          style="height: 110px; width: 110px; border-radius:100%;"
          img-class="my-custom-image"
          class="rounded-borders "
          @mouseenter="edit = true"
          @mouseleave="edit =false"

        >
          <div class="absolute-bottom" v-show="edit" style="padding: 0; height: 30px" >
            <q-btn no-caps icon="add"  unelevated label="Edit" style="width:100%;" size="0.7rem"/>
          </div>
        </q-img>
        <q-space/>
      </div>

      <div class="flex  items-center q-mx-auto q-my-md">
        <p class="q-my-auto q-mr-md text-weight-medium">User Name</p>
        <q-icon name="notifications" size="1.3rem"/>
      </div>

    </div>

<!-- Dashboard Text  -->
    <div class="flex items-center q-mt-md q-mx-auto flex flex-center">
        <q-icon name="dashboard" size="1.5rem" class="q-mr-md"/>
        <p class="q-my-auto text-h6">DASHBOARD</p>
    </div>

<!-- Navigation Buttons/Links  -->
    <div class="flex flex-center q-my-xl">
       <q-list class="q-mb-lg">
                <q-item clickable class="q-mb-md q-px-xl" active-class="bg-primary text-secondary" to="/request" style="border-radius: 25px" v-ripple >
                    <q-item-section avatar>
                        <q-icon name="home" size="1.5rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-left text-subtitle1">Request</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-md q-px-xl"
                active-class="bg-primary text-secondary"
                v-ripple
                :active="link === 'Products'"
                @click="link = 'Products'"
                style="border-radius: 25px"
                to="/mail"
                >

                    <q-item-section avatar>
                        <q-icon name="storefront" size="1.5rem"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-left text-subtitle1">Mail</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-md q-px-xl"
                active-class="bg-primary text-secondary"
                v-ripple
                :active="link === 'Settings'"
                @click="link = 'Settings'"
                style="border-radius: 25px"
                to="/logs"
                >

                    <q-item-section avatar>
                        <q-icon name="view_list" size="1.5rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-left text-subtitle1">Logs</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-md q-px-xl"
                active-class="bg-primary text-secondary"
                v-ripple
                :active="link === 'Support'"
                @click="link = 'Support'"
                style="border-radius: 25px"
                to="/support"
                >

                    <q-item-section avatar>
                        <q-icon name="support_agent" size="1.5rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-left text-subtitle1">Support</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-md q-px-xl"
                active-class="bg-primary text-secondary"
                v-ripple
                :active="link === 'Admin'"
                @click="link = 'Admin'"
                style="border-radius: 25px"
                to="/admin"
                >

                    <q-item-section avatar>
                        <q-icon name="lock" size="1.5rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-left text-subtitle1">Admin Login</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>

    </div>


     <div class="q-py-none row  q-mt-xl" >
              <q-space/>
              <q-item clickable class=""
                active-class="my-menu-link"
                v-ripple
                :active="link === 'Logout'"
                @click="link = 'Logout'" style="width:70%" >

                <q-item-section avatar>
                    <q-icon name="logout" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="text-h6 text-center">Logout</q-item-label>
                </q-item-section>
                </q-item>
                <q-space/>
            </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  data(){
    return{
      edit: false
    }
  }

})
</script>

<style scoped>

</style>
