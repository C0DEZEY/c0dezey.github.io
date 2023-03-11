window.addEventListener("load", function () {
    setTimeout(function() {
    const loader = document.querySelector(".loader");
    const mainContent = document.querySelector(".main-content");

    loader.style.display = "none";

    mainContent.classList.add("fade-in");

},100)
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
console.log(hiddenElements);

hiddenElements.forEach((el)=>observer.observe(el));
console.log("Loaded Animation")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

let interval = null;
let main = document.querySelector("h1")
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    main.innerText = main.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return main.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= main.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);


  // Scroll function 

  window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 750) {
       document.getElementById("arrow").style.visibility = "hidden";
  } else {
    document.getElementById("arrow").style.display = "visable";
  }
}
var delay = 1000;
const themebtn = document.getElementById("1")
const thememenu = document.getElementById("2")
themebtn.addEventListener("click", () => {
  if (thememenu.classList.contains("visually-hidden")) {
    thememenu.classList.remove("visually-hidden")
  } else {
    thememenu.classList.add("visually-hidden")
  }
})
