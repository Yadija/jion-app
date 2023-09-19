function trimTitle(title, limit = 20) {
  if (title.length > limit) return `${title.substring(0, limit)} ...`;

  return title;
}

function mappingData(data) {
  const rating = (genres) => {
    return genres.some((genre) => genre.name.toLowerCase().includes(atob('aGVudGFp')))
      ? 'rx'
      : '';
  };

  return {
    mal_id: data.mal_id || '',
    image: data.images?.jpg?.image_url || '',
    title: data.title || '',
    type: data.type || '',
    rating: data.rating || rating(data.genres),
  };
}

function mappingDataInArray(data) {
  return data.map((item) => mappingData(item));
}

function getTitleFromUrl(url) {
  return url.split('/')[url.split('/').indexOf('producer') + 2].replaceAll(/_/g, ' ');
}

function mappingDataProducer(data) {
  return {
    mal_id: data.mal_id || '',
    image: data.images?.jpg?.image_url || '',
    title: getTitleFromUrl(data.url) || '',
    type: 'producer',
  };
}

function mappingDataProducerInArray(data) {
  return data.map((item) => mappingDataProducer(item));
}

export {
  getTitleFromUrl,
  mappingData,
  mappingDataInArray,
  mappingDataProducer,
  mappingDataProducerInArray,
  trimTitle,
};
