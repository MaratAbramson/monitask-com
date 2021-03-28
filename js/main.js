//swiper properties
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


//tabs control
function openTab(event, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).style.display = "flex";
  event.currentTarget.className += " active";
};

function openTab2() {
  openTab(event, 'tab2');
  let element = document.getElementById("tabControl2");
  let deactive = document.getElementById("tabControl1");
  element.classList.add("active");
  deactive.classList.remove("active");
};

function openTab3() {
  openTab(event, 'tab3');
  let element = document.getElementById("tabControl3");
  let deactive = document.getElementById("tabControl2");
  element.classList.add("active");
  deactive.classList.remove("active");
};

function openTab4() {
  openTab(event, 'tab4');
  let element = document.getElementById("tabControl4");
  let deactive = document.getElementById("tabControl3");
  element.classList.add("active");
  deactive.classList.remove("active");
};