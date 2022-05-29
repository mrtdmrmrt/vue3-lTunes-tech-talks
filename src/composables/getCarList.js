import { ref } from "vue";
import { $axios } from "../plugins/axios";
const getCarList = () => {
  const carListData = ref([]);

  const fetchCarList = async () => {
    let res = await $axios("/cars");
    carListData.value = res.data;
  };
  return { carListData, fetchCarList };
};
export default getCarList;
