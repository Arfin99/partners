var modalrewards = document.getElementById("rewardsModal");

// Get the button that opens the modal
var btnrewards = document.getElementById("rewardsBtn");


/* back -forward*/
var rewardsBack = document.getElementById("rewardsBack");
var conciergeBack = document.getElementById("conciergeBack");
var appBack = document.getElementById("appBack");
var kycBack = document.getElementById("kycBack");
var cardsBack = document.getElementById("cardsBack");
var accBack = document.getElementById("accBack");
var cryptoBack = document.getElementById("cryptoBack");
var payBack = document.getElementById("payBack");



var rewardsForward = document.getElementById("rewardsForward");
var conciergeForward = document.getElementById("conciergeForward");
var appForward = document.getElementById("appForward");
var kycForward = document.getElementById("kycForward");
var cardsForward = document.getElementById("cardsForward");
var accForward = document.getElementById("accForward");
var cryptoForward = document.getElementById("cryptoForward");
var payForward = document.getElementById("payForward");


/* back - forward function --*/

rewardsBack.onclick=function(){
    modalpay.style.display= "block";
    modalrewards.style.display = "none";
}

conciergeBack.onclick=function(){
    modalrewards.style.display= "block";
    modalconcierge.style.display = "none";
}

appBack.onclick=function(){
    modalconcierge.style.display= "block";
    modalapp.style.display = "none";
}

kycBack.onclick=function(){
    modalapp.style.display= "block";
    modalkyc.style.display = "none";
}

cardsBack.onclick=function(){
    modalkyc.style.display= "block";
    modalcards.style.display = "none";
}

accBack.onclick=function(){
    modalcards.style.display= "block";
    modalacc.style.display = "none";
}

cryptoBack.onclick=function(){
    modalacc.style.display= "block";
    modalcrypto.style.display = "none";
}

payBack.onclick=function(){
    modalcrypto.style.display= "block";
    modalpay.style.display = "none";
}






rewardsForward.onclick=function(){
    modalconcierge.style.display= "block";
    modalrewards.style.display = "none";
}

conciergeForward.onclick=function(){
    modalapp.style.display= "block";
    modalconcierge.style.display = "none";
}

appForward.onclick=function(){
    modalkyc.style.display= "block";
    modalapp.style.display = "none";
}

kycForward.onclick=function(){
    modalcards.style.display= "block";
    modalkyc.style.display = "none";
}

cardsForward.onclick=function(){
    modalacc.style.display= "block";
    modalcards.style.display = "none";
}

accForward.onclick=function(){
    modalcrypto.style.display= "block";
    modalacc.style.display = "none";
}

cryptoForward.onclick=function(){
    modalpay.style.display= "block";
    modalcrypto.style.display = "none";
}

payForward.onclick=function(){
    modalrewards.style.display= "block";
    modalpay.style.display = "none";
}






// Get the <span> element that closes the modal
var spanrewards = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnrewards.onclick = function() {
  modalrewards.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanrewards.onclick = function() {
  modalrewards.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalrewards) {
    modalrewards.style.display = "none";
  }
}



   // Get the modal
   var modalconcierge = document.getElementById("conciergeModal");

   // Get the button that opens the modal
   var btnconcierge = document.getElementById("conciergeBtn");
   
   // Get the <span> element that closes the modal
   var spanconcierge = document.getElementsByClassName("close")[1];
   
   // When the user clicks the button, open the modal 
   btnconcierge.onclick = function() {
     modalconcierge.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the modal
   spanconcierge.onclick = function() {
     modalconcierge.style.display = "none";
   }
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modalconcierge) {
       modalconcierge.style.display = "none";
     }
   }
   


   var modalapp = document.getElementById("appModal");

// Get the button that opens the modal
var btnapp = document.getElementById("appBtn");

// Get the <span> element that closes the modal
var spanapp = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btnapp.onclick = function() {
  modalapp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanapp.onclick = function() {
  modalapp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalapp) {
    modalapp.style.display = "none";
  }
}


    // Get the modal
    var modalkyc = document.getElementById("kycModal");

    // Get the button that opens the modal
    var btnkyc = document.getElementById("kycBtn");
    
    // Get the <span> element that closes the modal
    var spankyc = document.getElementsByClassName("close")[3];
    
    // When the user clicks the button, open the modal 
    btnkyc.onclick = function() {
      modalkyc.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    spankyc.onclick = function() {
      modalkyc.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalkyc) {
        modalkyc.style.display = "none";
      }
    }


        // Get the modal
var modalcards = document.getElementById("cardsModal");

// Get the button that opens the modal
var btncards = document.getElementById("cardsBtn");

// Get the <span> element that closes the modal
var spancards = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal 
btncards.onclick = function() {
  modalcards.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spancards.onclick = function() {
  modalcards.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalcards) {
    modalcards.style.display = "none";
  }
}


    // Get the modal
    var modalacc = document.getElementById("accModal");

    // Get the button that opens the modal
    var btnacc = document.getElementById("accBtn");
    
    // Get the <span> element that closes the modal
    var spanacc = document.getElementsByClassName("close")[5];
    
    // When the user clicks the button, open the modal 
    btnacc.onclick = function() {
      modalacc.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    spanacc.onclick = function() {
      modalacc.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalacc) {
        modalacc.style.display = "none";
      }
    }
    
    
        // Get the modal
    var modalcrypto = document.getElementById("cryptoModal");
    
    // Get the button that opens the modal
    var btncrypto= document.getElementById("cryptoBtn");
    
    // Get the <span> element that closes the modal
    var spancrypto = document.getElementsByClassName("close")[6];
    
    // When the user clicks the button, open the modal 
    btncrypto.onclick = function() {
      modalcrypto.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    spancrypto.onclick = function() {
      modalcrypto.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalcrypto) {
        modalcrypto.style.display = "none";
      }
    }
    
        // Get the modal
    var modalpay = document.getElementById("payModal");
    
    // Get the button that opens the modal
    var btnpay = document.getElementById("payBtn");
    
    // Get the <span> element that closes the modal
    var spanpay = document.getElementsByClassName("close")[7];
    
    // When the user clicks the button, open the modal 
    btnpay.onclick = function() {
      modalpay.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    spanpay.onclick = function() {
      modalpay.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalpay) {
        modalpay.style.display = "none";
      }
    }
    
