<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCarsStore } from "../stores/cars";
import { useAuthStore } from "../stores/auth";
import { createToaster } from "@meforma/vue-toaster";

import CarCard from "@/components/CarCard.vue";
import RezForm from "@/components/RezForm.vue";

const router = useRouter();
const carsStore = useCarsStore();
const authStore = useAuthStore();
const toaster = createToaster();

const gettersCarCart = computed(() => {
  return carsStore.gettersCarCart;
});
const getUserLogin = computed(() => {
  return authStore.getUserLogin;
});

const onDeleteCarCart = (item) => {
  carsStore.setCarCartDelete(item);
};
const onFormSubmit = async (item) => {
  const res = await carsStore.setCarRez({
    rezCars: [...gettersCarCart.value],
    ...item,
  });
  if (res.status == 201) {
    toaster.success("Araç rezervasyon islemi alinmistir!", {
      position: "top-right",
      duration: 2000,
    });
    router.push("/");
  } else {
    toaster.error("Beklenmeyen hata olustu!", {
      position: "top-right",
      duration: 2000,
    });
  }
};
</script>

<template>
  <div class="container mt-4">
    <div>
      <button class="btn" @click="$router.push('/')" style="cursor: pointer">
        Ana Sayfa
      </button>
    </div>
    <div class="row">
      <div class="col-md-3">
        <CarCard
          v-for="car in gettersCarCart"
          :key="car.id"
          :car="car"
          class="mb-2"
          :isSetCart="false"
          :isCarDetail="false"
          :isDeleteCart="true"
          :isBtnCenter="true"
          @on-delete-cart="onDeleteCarCart($event)"
        />
      </div>
      <div class="col-md-9">
        <RezForm
          :userInfo="getUserLogin"
          @on-form-submit="onFormSubmit($event)"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
