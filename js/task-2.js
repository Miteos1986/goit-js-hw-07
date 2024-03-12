const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
const divEl = document.createElement("div");
divEl.classList.add("div-img");


const galleryList = document.querySelector(".gallery");
images.forEach(element => {
    const listEl = document.createElement("li");
    listEl.classList.add("itemTask2")
    const imgEl = document.createElement("img");
    imgEl.classList.add("itemTask2-img");

    imgEl.src = element.url;
    imgEl.alt = element.alt;

    listEl.append(imgEl);
    galleryList.append(listEl);
});
console.log(galleryList);
//   const itemEl = divImg.createElement("li");
//   itemEl.classList.add("item-img");
//   document.body.append(itemEl);

//   const images = document.createElement("img") 
    
//       images.src = "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
//       images.alt = "White and Black Long Fur Cat",
    
    
//         images.src = "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
//         images.alt = "Orange and White Koi Fish Near Yellow Koi Fish",
    
//         images.src = "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
//         images.alt = "Group of Horses Running",
    
  
