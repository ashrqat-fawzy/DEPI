onload = function() {
  var num1 = document.getElementById("n1");
  var num2 = document.getElementById("n2");
  var num3 = document.getElementById("n3");
  var num4 = document.getElementById("n4");
  let backTopButton = document.getElementById("to-back")

  var forNum1= setInterval(function() {
    num1.textContent = parseInt(num1.textContent) + 1 + "+" ;
  }, 200);


  setTimeout(function() {
    clearInterval(forNum1);
  }, 2000);


  var forNum2=setInterval(function() {
    num2.textContent = parseInt(num2.textContent) + 1 + "K" ;
  }, 1000);

  setTimeout(function() {
    clearInterval(forNum2);
  }, 2000);


  var forNum3= setInterval(function() {
    num3.textContent = parseInt(num3.textContent) + 1 + "+" ;
  }, 200);

  setTimeout(function() {
    clearInterval(forNum3);
  }, 2000);

  var forNum4=setInterval(function() {
    num4.textContent = parseInt(num4.textContent) + 1 + "+" ;
  }, 1000);


  setTimeout(function() {
    clearInterval(forNum4);
  }, 2000);





    backTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });


   
      var toggleIcon = document.querySelector(".top-bar .fa-angles-down");
      var topLinks = document.querySelector(".top-bar .top-links");
      var rightLinks = document.querySelector(".top-bar .right-links");
      var navLinks = document.querySelector(".nav-links")
  
      toggleIcon.addEventListener("click", function() {
          
          if (topLinks.style.display === "none" && rightLinks.style.display === "none" &&  navLinks.style.display==="none") {
              topLinks.style.display = "block";
              rightLinks.style.display = "block";
              navLinks.style.display="block";
          } else {
              topLinks.style.display = "none";
              rightLinks.style.display = "none";
              navLinks.style.display="none";
          }
      });
  
  


}
