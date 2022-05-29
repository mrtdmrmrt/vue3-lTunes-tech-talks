<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps(["notificationList"]);

const emit = defineEmits(["close", "deleteCarCart"]);
const close = () => {
  emit("close", false);
};
const deleteCarCart = (item) => {
  emit("on-delete-car-cart", item);
};
const clickOutSide = (e) => {
  let el = document.getElementById("notificationContent");
  let target = e.target;
  if (
    el !== target &&
    !el.contains(target) &&
    target.id != "show-notification" &&
    target.id != "show-notification-icon"
  ) {
    close();
  }
};
onMounted(() => {
  document.addEventListener("click", clickOutSide);
});
onUnmounted(() => {
  document.removeEventListener("click", clickOutSide);
});
</script>

<template>
  <div class="custom-notification__wrapper" id="notificationContent">
    <div class="w-100 d-flex align-items-center justify-content-end p-2">
      <i class="fa-solid fa-xmark" @click="close" style="cursor: pointer"></i>
    </div>
    <div class="custom-notification__contents">
      <div
        class="custom-notification__contents--item"
        v-for="item in props.notificationList"
        :key="item.id"
      >
        <div
          class="d-flex align-items-center justify-content-between p-2 w-100"
        >
          <div class="d-flex align-items-center">
            <img
              width="50"
              height="50"
              :src="item.photo"
              alt="car"
              class="me-2"
            />
            <span>{{ item.brand }}</span>
          </div>
          <i
            class="fa-solid fa-circle-minus"
            style="cursor: pointer"
            @click.stop="deleteCarCart(item)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-notification__wrapper {
  cursor: default;
  position: absolute;
  width: 352px;
  height: 165px;
  right: 30px;
  top: 58px;

  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;

  z-index: 10;
}
.custom-notification__contents {
  height: 130px;
  overflow-y: auto;
}
</style>
