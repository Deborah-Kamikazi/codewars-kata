  
  
  
  
  
  
  function takeUmbrella(weather, chance) {
let compare = weather === 'rainy'||weather === 'cloudy'&& chance> 0.20 ? true :weather === "sunny" && chance > 0.5 ? true: false
return compare;
   
  }
  console.log(takeUmbrella('sunny', 0.9))

//   weather === "sunny" ||weather === 'rainy'&& chance <0.20 ? "true":"false"