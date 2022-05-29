<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import CarDetail from "@/components/CarDetail.vue";
import { useCarsStore } from "../stores/cars";

const route = useRoute();
const carsStore = useCarsStore();
const gettersCarDetail = computed(() => {
  return carsStore.gettersCarDetail;
});
onMounted(async () => {
  const id = route.params.id;
  await carsStore.setCarDetail(id);
});
</script>

<template>
  <div class="container mt-4">
    <CarDetail :carDetail="gettersCarDetail" />
  </div>
</template>
