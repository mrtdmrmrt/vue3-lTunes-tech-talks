import { defineStore } from "pinia";
import { authService } from "../services";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLogin: false,
    loginUser: {},
  }),
  getters: {
    getIsLogin: (state) => state.isLogin,
    getUserLogin: (state) => state.loginUser,
  },
  actions: {
    async setLogin(data) {
      const res = await authService.login();
      if (
        data.userName == res.data.userName &&
        data.password == res.data.password
      ) {
        this.loginUser = res;
        this.isLogin = true;
        return {
          ...res.data,
          success: true,
        };
      } else {
        this.isLogin = false;
        return { success: false };
      }
    },
  },
});
