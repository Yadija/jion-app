function trimTitle(title, limit = 20) {
  if (title.length > limit) return `${title.substring(0, limit)} ...`;

  return title;
}

function mappingData(data) {
  return data.map((item) => ({
    mal_id: item.mal_id || '',
    image: item.images?.jpg?.image_url || '',
    title: item.title || '',
    type: item.type || '',
    rating: item.rating || '',
  }));
}

function getTitleFromUrl(url) {
  return url.split('/')[url.split('/').indexOf('producer') + 2].replaceAll(/_/g, ' ');
}

function mappingDataProducer(data) {
  return data.map((item) => ({
    mal_id: item.mal_id || '',
    image: item.images?.jpg?.image_url || '',
    title: getTitleFromUrl(item.url) || '',
    type: 'producer',
  }));
}

export { getTitleFromUrl, mappingData, mappingDataProducer, trimTitle };
