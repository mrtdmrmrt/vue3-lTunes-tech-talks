<script setup>
const props = defineProps(["car"]);
console.log("props", props.car);

const emit = defineEmits(["setCart", "carDetail"]);
const setCart = (item) => {
  emit("on-set-cart", item);
};
const carDetail = (item) => {
  emit("on-car-detail", item);
};
</script>

<template>
  <div class="card m-2" style="width: 18rem">
    <img :src="props.car.photo" class="card-img-top" alt="car" />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ props.car.brand }}</strong>
        <span>{{ props.car.model }}</span>
      </h5>
      <p class="card-text">{{ props.car.year }}, {{ props.car.km }} km</p>
      <p class="card-text">{{ props.car.price }} TL</p>
      <div class="d-flex align-items-center justify-content-between">
        <a @click="setCart(props.car)" class="btn btn-primary">Sepete Ekle</a>
        <a @click="carDetail(props.car)" class="btn btn-primary">Detay</a>
      </div>
    </div>
  </div>
</template>

<style></style>
