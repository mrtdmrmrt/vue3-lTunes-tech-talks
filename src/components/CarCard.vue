<script setup>
import { computed } from "vue";
const props = defineProps([
  "car",
  "isSetCart",
  "isCarDetail",
  "isDeleteCart",
  "isBtnCenter",
]);

const emit = defineEmits(["setCart", "carDetail", "deleteCart"]);
const setCart = (item) => {
  emit("on-set-cart", item);
};
const carDetail = (item) => {
  emit("on-car-detail", item);
};
const deleteCart = (item) => {
  emit("on-delete-cart", item);
};

const btnCenter = computed(() => {
  return props.isBtnCenter
    ? "justify-content-center"
    : "justify-content-between";
});
</script>

<template>
  <div class="card" style="width: 16rem">
    <img :src="props.car.photo" class="card-img-top" alt="car" />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ props.car.brand }}</strong>
        <span>{{ props.car.model }}</span>
      </h5>
      <p class="card-text">{{ props.car.year }}, {{ props.car.km }} km</p>
      <p class="card-text">{{ props.car.price }} TL</p>
      <div class="d-flex align-items-center" :class="btnCenter">
        <a v-if="isSetCart" @click="setCart(car)" class="btn btn-primary"
          >Sepete Ekle</a
        >
        <a v-if="isCarDetail" @click="carDetail(car)" class="btn btn-primary"
          >Detay</a
        >
        <a v-if="isDeleteCart" @click="deleteCart(car)" class="btn btn-primary"
          >Rezervasyondan Çıkar</a
        >
      </div>
    </div>
  </div>
</template>

<style></style>
