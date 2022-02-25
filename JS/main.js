
//preloader


setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1500);




//preloader


//button for go to top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//end for button




  var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        alert("You successfully submitted the form. Our team will contact you soon !!");
        form.reset()
      }).catch(error => {
      alert("Oopss!, there was a problem submittein the form, try later...($error name: Server refused to connect) ");
      });
    }
    form.addEventListener("submit", handleSubmit)













var counter = 1;
        setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if (counter > 5){
            counter = 1;
          }
        }, 5000);





    var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;

// popup menu
   
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000); //Popup the screen in 02 seconds after the page is loaded.
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
  //Create a cookie for a day (to expire within a day) on click the close button.
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
});

//Use the created cookie to hide or show the popup screen.
const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if(WebsiteCookie != -1){
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
}
else{
  popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
}

//  popup menu closed 