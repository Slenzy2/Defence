<template>

  <div class="start" style="height:78vh">

  <!-- Water Marked Image  -->
    <div class="watermark">
      <img src="../assets/defense.png" alt="">
    </div>

<!-- Message Content -->
    <div class="q-mx-lg">
      <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h6>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


  .watermark {
   position:absolute;
   top:50%;
   left:50%;
   transform: translate(-25%, -25%);
   opacity:0.1;
   z-index:-99;
   color:white;
   user-select: none;
}
</style>
