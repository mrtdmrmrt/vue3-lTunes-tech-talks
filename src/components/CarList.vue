<script setup>
import CarCard from "./CarCard.vue";

const props = defineProps(["gettersCarList"]);

const emit = defineEmits(["onSetCart", "onCarDetail"]);
const onSetCart = (item) => {
  emit("on-set-cart", item);
};
const onCarDetail = (item) => {
  emit("on-car-detail", item);
};
</script>

<template>
  <div class="container mt-4 d-flex flex-wrap">
    <CarCard
      class="m-2"
      v-for="car in props.gettersCarList"
      :key="car.id"
      :car="car"
      :isSetCart="true"
      :isCarDetail="true"
      :isDeleteCart="false"
      :isBtnCenter="false"
      @on-set-cart="onSetCart($event)"
      @on-car-detail="onCarDetail($event)"
    />
  </div>
</template>

<style></style>
