import { ref } from "vue";
import { $axios } from "../plugins/axios";
const getCarDetail = () => {
  const carDetailData = ref([]);

  const fetchCarDetail = async (id) => {
    let res = await $axios(`/cars/${id}`);
    carDetailData.value = res.data;
  };
  return { carDetailData, fetchCarDetail };
};
export default getCarDetail;
