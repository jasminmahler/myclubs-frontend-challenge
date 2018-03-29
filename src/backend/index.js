import 'isomorphic-fetch';

export function fetchJson(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((ex) => {
      console.error('parsing failed', ex);
    });
}

export function convertActivity(activity){
  return {
    city: activity.city, 
    description: activity.description,
    imageFile: activity.imageFile.url,
    infoBox: activity.infoBox,
    location: activity.location,
    name: activity.name,
    partner: activity.partner.name,
    street: activity.street,
    zipCode: activity.zipCode
  };
}