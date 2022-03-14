<template>
  <q-page class="bg-secondary text-white q-pt-md" style="height:100vh">

<!-- Profile part  -->
    <div class=" column itmes-center">

      <q-avatar class="bg-primary q-mx-auto" size="5rem">
        <img src="" alt="">
      </q-avatar>

      <div class="flex  items-center q-mx-auto q-my-md">
        <p class="q-my-auto q-mr-md text-weight-thin">DDC REGISTRY</p>
        <q-icon name="notifications" size="1.3rem"/>
      </div>

    </div>

<!-- Dashboard Text  -->
    <div class="flex items-center q-mt-xl q-mx-auto flex flex-center">
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
            </q-list>

    </div>


     <div class="q-py-none row  q-mt-xl" >
              <q-space/>
              <q-item clickable class=""
                active-class="my-menu-link"
                v-ripple
                :active="link === 'Logout'"
                @click="link = 'Logout'" style="width:70%" to="/sample">

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

})
</script>

<style scoped>

</style>
