var modal = document.getElementById('modal__img');
var modalClose = document.getElementById('modal-close__img');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target__img') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content__img");
      var captionText = document.getElementById("modal-caption__img");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});