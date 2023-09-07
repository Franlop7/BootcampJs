import { getEquipmentsList } from './property-detail.api';

let equipments = [];

getEquipmentsList().then((data) => {
  equipments = data.map((item) => item.name);
});

export const mapPropertyDetailFromApiToVM = (property, equipmentsList) => {
  return {
    id: property.id,
    title: property.title,
    notes: property.notes,
    price: `${property.price.toLocaleString()} €`,
    city: property.city,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: mapEquipmentsList(equipmentsList, property.equipmentIds),
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    images: Array.isArray(property.images) ? property.images : [],
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};

const mapEquipmentsList = (equipmentsApi, propertyEquipments) => {
  let equipments = propertyEquipments.map(
    (equipment) => equipmentsApi.find((item) => item.id === equipment).name
  );
  return equipments;
};
