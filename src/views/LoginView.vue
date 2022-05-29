<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import { useAuthStore } from "../stores/auth";

const state = reactive({
  login: {
    userName: "",
    password: "",
  },
});

const rules = computed(() => {
  return {
    login: {
      userName: {
        required,
      },
      password: {
        required,
      },
    },
  };
});
const v$ = useVuelidate(rules, state);

const authStore = useAuthStore();
const router = useRouter();

const signIn = async () => {
  v$.value.$validate();
  if (v$.value.$invalid) {
    return;
  }
  const res = await authStore.setLogin({ ...state.login });
  if (res.success) {
    router.push("/");
  }
};
</script>

<template>
  <div class="w-50 m-auto mt-4 border rounded p-4">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          id="inputEmail3"
          v-model="state.login.userName"
        />
        <small v-if="!v$.login.userName.$error" class="form-text text-danger"
          >*Bu alan zorunludur</small
        >
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input
          type="password"
          class="form-control"
          id="inputPassword3"
          v-model="state.login.password"
        />
        <small v-if="!v$.login.userName.$error" class="form-text text-danger"
          >*Bu alan zorunludur</small
        >
      </div>
    </div>
    <div class="w-100 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary text-center" @click="signIn">
        Sign in
      </button>
    </div>
  </div>
</template>
