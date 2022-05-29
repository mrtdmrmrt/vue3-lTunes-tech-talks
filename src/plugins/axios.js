import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVICE_BASE_URL,
});

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, "$axios", { value: instance });
  },
};

export const $axios = instance;
