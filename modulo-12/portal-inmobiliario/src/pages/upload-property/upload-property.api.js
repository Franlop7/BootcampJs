import Axios from 'axios';

const propertiesUrl = `${process.env.BASE_API_URL}/properties`;

export const postPropertyList = (newProperty) =>
  Axios.post(propertiesUrl, newProperty).then((res) => {
    return res.data;
  });

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsUrl).then((res) => {
    return res.data;
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
