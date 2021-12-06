const capitalize = (string) => {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const restWords = string.slice(1);
  return `${firstLetter}${restWords}`;
};

export default capitalize;
