// Your code goes here

// 1 - mouseenter
const busImage = document.querySelector(".intro")
busImage.addEventListener("mouseenter", () => {
  busImage.style.transform ="scale(1.2)";
  busImage.style.transition = "all 0.3s"
})

// 2 - mouseleave
busImage.addEventListener("mouseleave", () => {
    busImage.style.transform ="scale(1)";
  })

  // 3 - dblclick
  const logo = document.querySelector('.img-content img')
logo.addEventListener('dblclick', () => {
  logo.src = "https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg";
})

// 4 - click
const footer = document.querySelectorAll('.footer')
footer.forEach(title => {
   title.addEventListener('click', (event) => {
    event.target.style.color = 'purple'
  })
})

// 5 - mouseover
let fun = document.getElementById("fun");

fun.addEventListener("mouseover", event => {
    event.target.style.visibility="hidden";
    setTimeout(function () {
        event.target.style.visibility = "visible";
    }, 500);
}, {once:false}
);

// 6 - keydown
document.addEventListener("keydown",() => {
    alert("Why are you typing?");
    },
    {once:true}
);

// 7 - wheel
let wheelitem = document.getElementById("footertext");
wheelitem.addEventListener("wheel" , () => {
    wheelitem.style.fontSize = "3.6rem";
});

// 8 - load
window.addEventListener("load", () => {
    alert("This Document Is Now Loaded");
},
    { once: true }
);

// 9 - resize
window.addEventListener("resize", () => {
    alert("Resize Me To Any Size You Like");
},
    { once: true }
);

// 10 - scroll
document.addEventListener("scroll", () => {
    alert("Scrolling Scrolling Scrolling");
},
   { once: true }
);

const stopLink = document.querySelector(".nav-link")
stopLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  event.stopPropagation() 
})