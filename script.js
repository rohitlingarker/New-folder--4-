// function onVisible(element, callback) {
//     new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//           console.log(entry.intersectionRatio);
//         if(entry.intersectionRatio > 0) {
//           callback(element);
//           observer.disconnect();
//         }
//       });
//     }).observe(element);
//   }

// sec2= document.querySelector("#sec2");

// onVisible(sec2,()=>{
//     console.log("sec2 visible");
//     sec2.classList.add("active")
// })

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));