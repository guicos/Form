async function dataApi(){
  try {
     const response = await fetch(" https://picsum.photos/v2/list");
     const data = await response.json()
     show(data)
      
  } catch (error) {
     console.log(error)
  }
}

function show(img){
 let output = '';

 for(let imgs of img){
   if(document.getElementById("width").offsetWidth == 280){
     
     if( imgs.id == 0 ){
      output += `<div data-js="carouserl_item" class="carousel_item carousel_item--visible"><img class="img" src=${imgs.download_url} alt="js" /></div>`
     }else{
      output += `<div data-js="carouserl_item" class="carousel_item"><img class="img" src=${imgs.download_url} alt="js" /></div>`
     }
   }else{
     if( imgs.id == 0 || imgs.id == 1 ){
      output += `<div data-js="carouserl_item" class="carousel_item carousel_item--visible"><img class="img" src=${imgs.download_url} alt="js" /></div>`
     }else{
      output += `<div data-js="carouserl_item" class="carousel_item"><img class="img" src=${imgs.download_url} alt="js" /></div>`
     }
   }
 }

 document.querySelector('.carousel').innerHTML= output
 mostrar()
}
dataApi()

