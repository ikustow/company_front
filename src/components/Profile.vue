<template>
  <div class="profile">
    <UserBoard/>
    <BarChart/>
  </div>
</template>

<script>
import UserBoard from "@/components/UserBoard.vue";
import BarChart from '@/components/BarChart.vue'

export default {
  name: "Profile",
  components:{
    UserBoard,
    BarChart
  },
};
</script>

<style>

</style>