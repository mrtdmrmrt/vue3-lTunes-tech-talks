<script setup>
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";

import { createToaster } from "@meforma/vue-toaster";

import MainHeader from "@/components/MainHeader.vue";
import CarList from "@/components/CarList.vue";

import { useCarsStore } from "../stores/cars";

const carsStore = useCarsStore();

const gettersCarList = computed(() => {
  return carsStore.gettersCarList;
});

console.log("gettersCarList", gettersCarList);
const carList = async () => {
  await carsStore.getCarList();
};
onMounted(() => {
  carList();
});

const toaster = createToaster();
const onSetCart = async (item) => {
  const res = await carsStore.setCarCart(item);
  if (res.success) {
    toaster.success("Araç sepete eklendi!", {
      position: "top-right",
      duration: 2000,
    });
  }
};
const router = useRouter();
const onCarDetail = (item) => {
  router.push({ name: "Detail", params: { id: item.id } });
};
const onDeleteCarCart = (item) => {
  carsStore.setCarCartDelete(item);
};
</script>

<template>
  <div class="home">
    <MainHeader @on-delete-car-cart="onDeleteCarCart($event)" />
    <CarList
      :gettersCarList="gettersCarList"
      @on-set-cart="onSetCart($event)"
      @on-car-detail="onCarDetail($event)"
    />
  </div>
</template>
