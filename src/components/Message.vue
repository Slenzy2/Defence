<template>

  <div class="start" style="height:78vh">

  <!-- Water Marked Image  -->
    <div class="watermark">
      <img src="../assets/defense.png" alt="">
    </div>

<!-- Message Content -->
    <div class="q-mx-lg q-mt-md">

    <!-- Mail Title  -->
    <div class="row items-align justify-between ">
      <div class="text-h5 text-bold text-capitalize">Lorem title</div>
      <div class="row justify-evenly col-3">
        <span class="q-my-auto">Date 2022</span>
        <span class="q-my-auto">Time Stamp</span>
      </div>

    </div>

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
