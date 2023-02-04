let colorStorage = localStorage.getItem("pageColor");

if (colorStorage !== null) {

  document.documentElement.style.setProperty("--main-color", colorStorage);


  document.querySelectorAll(".option-color li").forEach(li => {
    if (li.dataset.color === colorStorage) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  })
}

let myHeadArea = document.querySelector(".header-area");

window.addEventListener("scroll", (e) => {

  if (window.scrollY >= 150) {
    myHeadArea.classList.add("show-back")
  } else {
    myHeadArea.classList.remove("show-back")
}

})

// toggle

let toggle = document.getElementById("toggle");
let myLinks = document.querySelector(".myLinks");

toggle.onclick = function () {
  myLinks.classList.toggle("show");

  if (toggle.classList.contains("fa-bars")) {
    toggle.classList.replace("fa-bars", "fa-xmark");
  } else {
    toggle.classList.replace("fa-xmark", "fa-bars");
  }


}

document.addEventListener("click", (e) => {

  if (e.target !== toggle && e.target !== myLinks) {
    myLinks.classList.remove("show");
    if (toggle.classList.contains("fa-xmark")) {
      toggle.classList.replace("fa-xmark", "fa-bars");
    }
  }
})

myLinks.addEventListener("click", (e) => {
  e.stopPropagation();
})

let linksA = document.querySelectorAll(".myLinks li a");

linksA.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    })
    linksA.forEach(a => {
      a.classList.remove("active");
    })
    e.target.classList.add("active");
    })
  })


// randomBackgroundImage

let backgroundOption = true;

let backgroundInterval;

let backgroundStorage = localStorage.getItem("pageBackground");

if (backgroundStorage !== null) {

  if (backgroundStorage === 'true') {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  document.querySelectorAll(".random-background span").forEach(spn => {
    spn.classList.remove("active");
  })


  if (backgroundStorage === 'true') {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }


}


// start setting-box

document.querySelector(".setting-box .myicon i").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".setting-box").classList.toggle("show");
}

let settingBox = document.querySelector(".setting-box");

window.addEventListener("scroll", function () {

  if (this.window.scrollY !== settingBox) {

    settingBox.classList.remove("show");

  }


})

let myLis = document.querySelectorAll(".option-box .option-color li");

myLis.forEach(li => {
  li.addEventListener('click', (e) => {
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    remAddActive(e)
    localStorage.setItem("pageColor", e.target.dataset.color);
  })
})

//random backgroundImage

let spnBackground = document.querySelectorAll(".random-background span");

spnBackground.forEach(spn => {
  spn.addEventListener("click", (e) => {
    remAddActive(e)

    if (e.target.dataset.background == "yes") {
      backgroundOption = true;
      changeBackground();
      localStorage.setItem("pageBackground", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("pageBackground", false);
    }
  })
})


// Change backgroundImage

let app = document.querySelector(".app");

let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];


function changeBackground() {

  if (backgroundOption == true) {


    backgroundInterval = setInterval(() => {

      // get randomNumber

      const randomNumber = Math.floor(Math.random() * imgArray.length);

      // change background

      app.style.backgroundImage = "url('image/" + imgArray[randomNumber] + "')"


    }, 4000)



  }

}
changeBackground()


function remAddActive(ev) {


  ev.target.parentElement.querySelectorAll(".active").forEach(el => {
    el.classList.remove("active");
  })
  ev.target.classList.add("active");
}


// skills

let mySkills = document.querySelector(".skills");
let mySpans = document.querySelectorAll(".progressbar span");

window.addEventListener("scroll", () => {


  if (window.scrollY >= mySkills.offsetTop - 300) {
    mySpans.forEach(span => {
      span.style.width = span.dataset.progress;
    })
  }
});




// gallery

let ourGallery = document.querySelectorAll(".box-gallery img");


ourGallery.forEach(img => {
  img.addEventListener("click", (e) => {

    // create Overlay

    let overly = document.createElement("div");
    overly.className = "overly";

    document.body.append(overly)


    // create modelbox

    let modelBox = document.createElement("div");
    modelBox.className = "modelbox";

    document.body.append(modelBox);

    // create Text

    if (img.alt !== "") {
      let heading = document.createElement("h3");
      let headText = document.createTextNode(img.alt);
      heading.appendChild(headText);
      modelBox.appendChild(heading);
    }


    // creat img

    let myImage = document.createElement("img");
    myImage.src = img.src;

    modelBox.appendChild(myImage);


    // create span close

    let closeSpan = document.createElement("span");
    closeSpan.className = "close-button"
    let closeText = document.createTextNode("X");

    closeSpan.appendChild(closeText);

    modelBox.appendChild(closeSpan);

  })
})

document.addEventListener("click", (e) => {


  if (e.target.classList.contains("close-button")) {
    e.target.parentNode.remove();
    document.querySelector(".overly").remove();
  }

})


let myBulltes = document.querySelectorAll(".nav-bulltes .bulltes");
myBulltes.forEach(bullte => {
  bullte.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    })
    });
})
  


// bulltes

let containerBulltes = document.querySelectorAll(".bulltes-option span");
let navBulltes = document.querySelector(".nav-bulltes");

let bullteStorage = localStorage.getItem("pageDisplay");

if (bullteStorage !== null) {

  containerBulltes.forEach(span => {
    span.classList.remove("active");
  })

  if (bullteStorage === 'block') {
    document.querySelector(".bulltes-option .yes").classList.add("active");
    navBulltes.style.display = 'block';
  } else {
    document.querySelector(".bulltes-option .no").classList.add("active");
    navBulltes.style.display = 'none';
  }


}

containerBulltes.forEach(span => {
  span.addEventListener("click", (e) => {
    remAddActive(e);

    if (e.target.dataset.display == "show") {

      navBulltes.style.display = "block"

      localStorage.setItem("pageDisplay", "block")


    } else {
      navBulltes.style.display = 'none';
      localStorage.setItem("pageDisplay", "none");
    }

  })
})


// clearLocalStorage

let clearLocal = document.querySelector(".clearstorage");

clearLocal.addEventListener("click", (e) => {


  localStorage.clear();

  window.location.reload();

})