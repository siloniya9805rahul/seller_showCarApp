import carData from "../cardsData.json";

const handleSearchCar = (carname) => {
  let data;
  const carName = carname;
  for (let index = 0; index < carData.length; index++) {
    for (let j = 0; j < carData[index].length; j++) {
      if (carData[index][j].carName === carName) {
        data = carData[index][j];
        break;
      }
    }
  }
  return data;
};

export default handleSearchCar;
