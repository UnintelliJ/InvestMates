window.onload = function(){
    var wrapper = document.querySelector(".wrapper");
    var text = document.querySelector(".text");
    
    var textCont = text.textContent;
    text.style.display = "none";
    
    for (var i = 0; i < textCont.length; i++) {
      (function(i) {
        setTimeout(function() {
          // Created textNode to append
          var texts = document.createTextNode(textCont[i])
          var span = document.createElement('span');
          span.appendChild(texts);
    
          span.classList.add("wave");
          wrapper.appendChild(span);
    
        }, 75 * i);
      }(i));
    }    
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

    // Or with jQuery
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
  