export async function fetchCars(make, year, fuel, cylinder, selectedTransmission, selectedDriveType,){
    const headers = {
      'X-RapidAPI-Key': '49cd3912b1mshd2c562d48432008p1c5378jsn31d145313a94',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${make}&transmission=${selectedTransmission}&year=${year}&cylinders=${cylinder}&drive=${selectedDriveType}&fuel_type=${fuel}&limit=15`

    const response = await fetch(url, {
    headers: headers,
  }); 
  
  const result = await response.json();
  
  return result
  }
  
  export const calculateCarRent = ( city_mpg, year ) => {
    const basePricePerday = 60;
    const mileageFactor = 0.2;
    const ageFactor = 0.8;
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerday + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
    
  }

  export const generateCarUrl = (car) => {
    const url = new URL("https://cdn.imagin.studio/getimage")

    const { make, year, model} = car;

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen")
    url.searchParams.append("modelYear", `${year}`);

    return `${url}`
  }
  
  