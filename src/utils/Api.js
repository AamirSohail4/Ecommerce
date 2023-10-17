import axios from 'axios';
const params = {
  headers: {
    Authorization: 'bearer ' + import.meta.env.VITE_STRAP_API_KEY,
  },
};
const base_url = import.meta.env.VITE_APP_API_URL;
// console.log(base_url);
export const fetchDataFromApi = async (url) => {
  try {
    const res = await axios.get(base_url + url, params);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// export const fetchCategoryApi = async (url, id) => {
//   const fetchCategory = id - 1;
//   try {
//     const res = await axios.get(base_url + url, params);
//     return res.data.data[fetchCategory];
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
