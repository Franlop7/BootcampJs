import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => {
    return response.data;
  });

const saleTypeListUrl = `${process.env.BASE_API_URL}/saletypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((res) => {
    return res.data;
  });

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
  Axios.get(provinceListUrl).then((res) => {
    return res.data;
  });
