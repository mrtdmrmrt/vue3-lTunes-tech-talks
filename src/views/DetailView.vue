<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import CarDetail from "@/components/CarDetail.vue";
//import { useCarsStore } from "../stores/cars";
import getCarDetail from "../composables/getCarDetail";

const { carDetailData, fetchCarDetail } = getCarDetail();
const route = useRoute();
//const carsStore = useCarsStore();

const gettersCarDetail = computed(() => {
  return carDetailData.value;
  //return carsStore.gettersCarDetail;
});

onMounted(async () => {
  const id = route.params.id;
  // await carsStore.setCarDetail(id);
  await fetchCarDetail(id);
});
</script>

<template>
  <div class="container mt-4">
    <CarDetail :carDetail="gettersCarDetail" />
  </div>
</template>
