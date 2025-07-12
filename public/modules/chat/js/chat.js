window.addEventListener('DOMContentLoaded', (event) => {

let html = '<div class="bubble">\
  <div class="txt">\
    <p class="name">Benni</p>\
    <p class="message">Hey, check out this Pure CSS speech bubble...</p>\
    <span class="timestamp">10:20 pm</span>\
  </div>\
  <div class="bubble-arrow"></div>\
</div>\
<!--  Speech Bubble alternative -->\
<div class="bubble alt">\
  <div class="txt">\
    <p class="name alt">+353 87 1234 567<span> ~ John</span></p>\
    <p class="message">Nice... this will work great for my new project.</p>\
    <span class="timestamp">10:22 pm</span>\
  </div>\
  <div class="bubble-arrow alt"></div>\
</div>';


    let elem = document.createElement("div");
    elem.innerHTML = html;
   elem.classList.add("chat-tasks");
   document.body.appendChild(elem);
  });



