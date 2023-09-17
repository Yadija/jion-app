function trimTitle(title, limit = 20) {
  if (title.length > limit) return `${title.substring(0, limit)} ...`;

  return title;
}

function mappingData(data) {
  return {
    mal_id: data.mal_id || '',
    image: data.images?.jpg?.image_url || '',
    title: data.title || '',
    type: data.type || '',
    rating: data.rating || '',
  };
}

function mappingDataInArray(data) {
  return data.map((item) => mappingData(item));
}

function getTitleFromUrl(url) {
  return url.split('/')[url.split('/').indexOf('producer') + 2].replaceAll(/_/g, ' ');
}

function mappingDataProducerInArray(data) {
  return data.map((item) => ({
    mal_id: item.mal_id || '',
    image: item.images?.jpg?.image_url || '',
    title: getTitleFromUrl(item.url) || '',
    type: 'producer',
  }));
}

export {
  getTitleFromUrl,
  mappingData,
  mappingDataInArray,
  mappingDataProducerInArray,
  trimTitle,
};
