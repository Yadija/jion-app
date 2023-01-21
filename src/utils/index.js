function trimTitle(title, limit = 20) {
  if (title.length > limit) return `${title.substring(0, limit)} ...`;

  return title;
}

export { trimTitle };
