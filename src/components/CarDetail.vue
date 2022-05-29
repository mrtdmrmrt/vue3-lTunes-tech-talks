<script setup>
const props = defineProps(["carDetail"]);
</script>

<template>
  <div class="card mb-3">
    <img :src="props.carDetail.photo" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        <strong class="me-1">{{ props.carDetail.brand }}</strong>
        <span>{{ props.carDetail.model }}</span>
      </h5>
      <p class="card-text">
        {{ props.carDetail.year }}, {{ props.carDetail.km }} km
      </p>
      <p class="card-text">{{ props.carDetail.price }} TL</p>
    </div>
  </div>
</template>

<style></style>
