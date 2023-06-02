function onClickMenu(){
    document.getElementById("ham-icon").classList.toggle("icon");
    document.getElementById("ham-menu").classList.toggle("change");

    
}

$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let min = 0;
  let max = 360;
  let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  $(document).mouseover(function(e) {
    //   console.log($(e.target).attr('class')); // retrieves the id of the element being hovered over
      
      let hoverId = $(e.target).attr('id'); // retrieves the id of the element being hovered over
      
      let hoverClass = $(e.target).attr('class'); // retrieves the id of the element being hovered over
      console.log(hoverId)
      if(hoverId && typeof hoverId!=='undefined' && hoverId.length && hoverId!=='nochan')
        {
        console.log("asdfasdf");
        if(hoverId=='ham-menu' || hoverClass=='top-half')
        document.getElementById(hoverId).style.background = `linear-gradient(${Math.floor(Math.random() * (max + 1 - min)) + min}deg, ${getRandomColor()}, ${getRandomColor()})`;
        // document.getElementsByClassName(hoverClass).style.background = `linear-gradient(${Math.floor(Math.random() * (max + 1 - min)) + min}deg, ${getRandomColor()}, ${getRandomColor()})`;
        // document.getElementById(hoverId).style.innerHTML =`
        // //   a {
        // //       background: linear-gradient(to right, red, blue);
        // //       -webkit-background-clip: text;
        // //       -webkit-text-fill-color: transparent;
        // //   }
        // //   `;
        //   let style = document.createElement('style');
        //   style.innerHTML = `
        //   ``#ham:hover`` {
        //       background: linear-gradient(to right, red, blue);
        //       -webkit-background-clip: text;
        //       -webkit-text-fill-color: transparent;
        //       display: none;
        //   }
        //   `;
        //   document.style.appendChild(style);
        // document.getElementById(hoverId).style.background = `linear-gradient(${Math.floor(Math.random() * (max + 1 - min)) + min}deg, black,white)`;
        console.log(document.getElementById(hoverId).style);
      }
    
  });

//   let style = document.createElement('style');
//   style.innerHTML = `
//   a {
//       background: linear-gradient(to right, red, blue);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//   }
//   `;
//   document.head.appendChild(style);
//   background: linear-gradient(to right, red, blue);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

// var currentURL = window.location.href;
// console.log(currentURL);
// var button = document.getElementById('e31');
// console.log(button);

// if (currentURL === "http://127.0.0.1:5500/home.html"){
//     document.getElementById("e31").style.color = "blue";
// }

//console.log("document.getElementById.style.color = ");
// console.log(button);
// console.log(button.style.color + '000');
// function toggleColor() {
//     if (currentURL === "http://127.0.0.1:5500/home.html"){
//         button.style.color = 'black';
//         console.log(button);
//     } else {
//         button.style.color = 'red';
//         console.log(button);    
//     }
// }
// console.log(button.style.color + '000');

//add attribute to style of a class in js
// document.getElementById("e31").style.color = "red";

// Path: js\script.js

