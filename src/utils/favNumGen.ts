export const favNumGen: (seed?: number) => number = (seed) => {
  let favNum;
  if (seed) {
    favNum = Math.floor(Math.random() * seed);
  } else {
    favNum = Math.floor(Math.random() * 420);
  }
  // console.log(favNum);

  return favNum;
};
