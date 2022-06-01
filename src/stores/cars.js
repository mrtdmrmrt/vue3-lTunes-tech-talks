import { defineStore } from "pinia";
import { carService } from "../services";

export const useCarsStore = defineStore({
  id: "cars",
  state: () => ({
    carList: [],
    carCart: [],
    carDetail: {},
    carRez: null,
  }),
  getters: {
    gettersCarList: (state) => state.carList,
    gettersCarCart: (state) => state.carCart,
    gettersCarDetail: (state) => state.carDetail,
    gettersCarRez: (state) => state.carRez,
  },
  actions: {
    async getCarList() {
      const res = await carService.carList();
      this.carList = res.data;
      return this.carList;
    },
    async setCarCart(data) {
      if (this.carCart.filter((car) => car.id == data.id).length == 0) {
        this.carCart.push(data);
        return {
          ...data,
          success: true,
        };
      } else {
        return {
          ...data,
          success: false,
        };
      }
    },
    async setCarDetail(data) {
      const res = await carService.carDetail(data);
      this.carDetail = res.data;
      return this.carDetail;
    },
    async setCarCartDelete(data) {
      this.carCart = this.carCart.filter((car) => car.id != data.id);
    },
    async setCarRez(data) {
      const res = await carService.carRez(data);
      this.carRez = res.data;
      return res;
    },
  },
});
