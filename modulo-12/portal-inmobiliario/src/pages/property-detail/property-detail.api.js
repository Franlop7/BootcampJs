import Axios from 'axios';

const propertiesUrl = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (id) =>
  Axios.get(`${propertiesUrl}/${id}`).then((res) => {
    return res.data;
  });

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsUrl).then((res) => {
    return res.data;
  });

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const postContact = (contact) =>
  Axios.post(contactUrl, contact).then((res) => {
    return res.data;
  });
