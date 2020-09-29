export const generateLevelsGameOne = levelsQuantity => {
  let levels = new Array();
  for (let i = 0; i < levelsQuantity; i++) {
    levels.push(getRandomNumberBetween(0, 1));
  }
  return levels;
};

export const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
