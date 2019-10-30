// Your code goes here


// TweenMax.to(".logo", 2, {left:600}); TweenMax stuff


const funNav = document.querySelector(".nav-container");

//1! mouseover enter event
funNav.addEventListener("mouseenter",
() => {
    funNav.style.transform
    ="scale(1.2)";
    funNav.style.transition ="all 0.3s"
})

//2! mouseover leave event
funNav.addEventListener("mouseleave",
 () => {
     funNav.style.transform
     ="scale(1)";
     funNav.style.transition = "all 0.3s"
 })

 
 const funHeader1 = document.querySelector(".nav-link");

// 3! click event

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color="#e62739"
    })
  })
 //4! double click
  const funBusSwap = document.querySelector(".double-bus");
console.log(funBusSwap);
    funBusSwap.addEventListener("dblclick",
   () => {
    funBusSwap.src = "/img/busswap.jpg"
  })


//5! resize event
const resizeImages = document.querySelector(".text-content");

document.querySelectorAll(".text-content");

window.addEventListener("resize", () =>{

resizeImages.style.backgroundColor = "teal";
resizeImages.style.color = "orange";
console.log(resizeImages);

})

//6! Drag event

let isDragging = false;


//7! mousedown event
document.addEventListener('mousedown', function(event) {

  let dragElement = event.target.closest('.img-content');

  if (!dragElement) return;

  event.preventDefault();

  dragElement.ondragstart = function() {
      return false;
  };

  let coords, shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }
  function startDrag(element, clientX, clientY) {
    if(isDragging) {
      return;
    }

    isDragging = true;
//8! mouse move event
    document.addEventListener('mousemove', onMouseMove);
    //9! mouse up event
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;

    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };
function finishDrag() {
  if(!isDragging) {
    return;
  }

  isDragging = false;

  dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
  dragElement.style.position = 'absolute';

  document.removeEventListener('mousemove', onMouseMove);
  dragElement.removeEventListener('mouseup', onMouseUp);
}

function moveAt(clientX, clientY) {
  // new window-relative coordinates
  let newX = clientX - shiftX;
  let newY = clientY - shiftY;

  
  let newBottom = newY + dragElement.offsetHeight; // new bottom

  // below the window? let's scroll the page
  if (newBottom > document.documentElement.clientHeight) {
    // window-relative coordinate of document end
    let docBottom = document.documentElement.getBoundingClientRect().bottom;

    let scrollY = Math.min(docBottom - newBottom, 10);

    // calculations fixes
    if (scrollY < 0) scrollY = 0;

    window.scrollBy(0, scrollY);

   
    // limit the new Y
    newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
  }

  
  if (newY < 0) {
    // scroll up
    let scrollY = Math.min(-newY, 10);
    if (scrollY < 0) scrollY = 0; // checks precision errors

    window.scrollBy(0, -scrollY);
    newY = Math.max(newY, 0); // newY may not be below 0
  }


  if (newX < 0) newX = 0;
  if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
    newX = document.documentElement.clientWidth - dragElement.offsetWidth;
  }

  dragElement.style.left = newX + 'px';
  dragElement.style.top = newY + 'px';
}

});


//10! keydown event 
const colorChange = document.querySelector(".content-destination");

document.addEventListener("keydown", event =>{
    if(event.isComposing || event.keycode === 121){
        return;
    }
    colorChange.style.background = "skyblue"
});








