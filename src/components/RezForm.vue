<script setup>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  numeric,
  email,
} from "@vuelidate/validators";

const state = reactive({
  formData: {
    tc: "",
    name: "",
    surName: "",
    email: "",
  },
});
const rules = computed(() => {
  return {
    formData: {
      tc: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      name: { required, minLength: minLength(3), maxLength: maxLength(7) },
      surName: { required, minLength: minLength(3), maxLength: maxLength(7) },
      email: { email, required },
    },
  };
});
const v$ = useVuelidate(rules, state);
const props = defineProps(["userInfo"]);

const emit = defineEmits(["onFormSubmit"]);
const onFormSubmit = () => {
  v$.value.$validate();
  if (v$.value.$invalid) {
    return;
  } else {
    emit("on-form-submit", state.formData);
  }
};
</script>

<template>
  <div>
    <div class="mb-3">
      <label for="Username" class="form-label">Username</label>
      <input
        :value="props.userInfo.userName"
        disabled
        class="form-control"
        id="Username"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">TC</label>
      <input
        class="form-control"
        id="exampleInputPassword1"
        v-model="state.formData.tc"
      />
      <small
        class="form-text text-danger"
        v-if="v$.formData.tc.required.$invalid"
        >Bu alan zorunludur!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.tc.numeric.$invalid"
        >TC numerik olmalidir!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.tc.minLength.$invalid"
        >TC minimum 11 karakter olmalidir!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.tc.maxLength.$invalid"
        >TC maximum 11 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="name1" class="form-label">Name</label>
      <input class="form-control" id="name1" v-model="state.formData.name" />
      <small
        class="form-text text-danger"
        v-if="v$.formData.name.required.$invalid"
        >Bu alan zorunludur!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.name.minLength.$invalid"
        >Isim minimum 3 karakter olmalidir!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.name.maxLength.$invalid"
        >Isim maximum 7 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="surName1" class="form-label">Surname</label>
      <input
        class="form-control"
        id="surName1"
        v-model="state.formData.surName"
      />
      <small
        class="form-text text-danger"
        v-if="v$.formData.surName.required.$invalid"
        >Bu alan zorunludur!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.surName.minLength.$invalid"
        >Isim minimum 3 karakter olmalidir!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.surName.maxLength.$invalid"
        >Isim maximum 7 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        v-model="state.formData.email"
      />
      <small
        class="form-text text-danger"
        v-if="v$.formData.email.required.$invalid"
        >Bu alan zorunludur!</small
      >
      <small
        class="form-text text-danger"
        v-if="v$.formData.email.email.$invalid"
        >Bu alan email formatinda olmalidir!</small
      >
    </div>
    <button class="btn btn-primary" @click="onFormSubmit">Gonder</button>
  </div>
</template>
<style></style>
