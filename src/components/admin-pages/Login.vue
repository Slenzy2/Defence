<template>
<q-page class="row main">

<!-- Defense Logo and App Name  -->
   <div class="logo col-5 column flex-center" style="border-radius: 0 25px 25px 0; box-shadow: -5px 0px 10px 6px">
     <p class="text-white text-h3 text-bold" >TASK SHARE</p>
    <div>
       <q-avatar size="200px" style="background:#D4E1E8">
        <img src="../../assets/defense.png">
      </q-avatar>
    </div>
  </div>

<!-- Authentication Form  -->
  <div class="col-7 column q-my-auto q-px-xl login">
   <p class="text-center text-h4 text-bold text-secondary">Admin Login</p>

   <div class="q-px-xl">
     <q-input rounded outlined elevated v-model="text" placeholder="Username" class="q-mb-xl q-mt-md q-mx-auto" standout="bg-white" color="white" style="width:60%">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="person" size="1.8rem"/>
          </q-avatar>
        </template>
      </q-input>
      <q-input rounded outlined v-model="text" placeholder="Password" class="q-mb-xl q-mx-auto" standout="bg-white" color="white" style="width:60%;">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="lock" size="1.8rem"/>
          </q-avatar>
        </template>
      </q-input>
   </div>

<!-- Sign in Button  -->
   <q-btn @click="this.$router.push('/admin/users')" unelevated rounded color="secondary" label="Login"  class="q-mx-auto q-mb-md"  style="width: 30%;"/>

<!-- Forgotten Password link  -->
   <a href="" class="text-center text-italic text-subtitle1 text-secondary" style="text-decoration: none">Having a problem login in?</a>

  </div>

</q-page>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
  .logo{
    background: #1C2E3D;
  }

  .main{
    background: #DDE7ED;
  }
</style>
