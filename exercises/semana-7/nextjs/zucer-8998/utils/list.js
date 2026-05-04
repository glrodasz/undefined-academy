export const randomizeList = (list) => {
  return [...list].sort(() => 0.5 - Math.random());
};
