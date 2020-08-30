let carList = [
  {
    id: 1,
    modelName: "R8",
    year: 2018,
    manufacturer: "Audi",
    vin: "1111",
  },
  {
    id: 2,
    modelName: "CLS",
    year: 2006,
    manufacturer: "Bentz",
    vin: "2222",
  },
  {
    id: 3,
    modelName: "Mustang",
    year: 2014,
    manufacturer: "Ford",
    vin: "3333",
  },
];

function fetchCarList(start = 0, size = 10) {
  return carList.slice(start, start + size);
}

function fetchCarDetail(carId) {
  const car = carList.filter((car) => {
    return car.id === carId;
  });
  if (car) {
    return car[0];
  } else {
    return null;
  }
}
export { fetchCarList, fetchCarDetail };
