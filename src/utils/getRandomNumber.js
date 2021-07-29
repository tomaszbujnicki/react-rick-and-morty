const getRandomNumbers = (max, count) => {
  if (count > 0 && max >= count) {
    const arr = [];
    while (arr.length < count) {
      const random = Math.floor(Math.random() * max + 1);
      if (arr.includes(random)) continue;
      arr.push(random);
    }
    return arr;
  }
};

export default getRandomNumbers;
