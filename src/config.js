import built from './build-config.js';
// Публичные настройки концепта. Никогда не размещайте здесь секреты.
export const config = {
  name:'ВашеНазвание', phone:'', address:'Адрес уточняется', hours:'Время работы уточняется',
  telegram:'', instagram:'', apiUrl:built.apiUrl || '', mapKey:built.mapKey || '',
  coordinates:null, // [долгота, широта], например [37.6156, 55.7522]
  mapStyleId:'', // необязательный ID стиля из редактора 2GIS
};
