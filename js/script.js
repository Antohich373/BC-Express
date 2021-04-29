const btn = document.querySelector('.header__toggle');
const nav = document.querySelector('.navigation-main');

btn.addEventListener('click', function() {
  this.classList.toggle('header__toggle--opened');
  nav.classList.toggle('navigation-main-open');
});

//кнопка открытия модельного окна
let applicationHeader = document.querySelector('.button-leave-request') 
let applicationFooter = document.querySelector('.footer-button')
let applicationHeaderTwo = document.querySelector('.order-call')
let callHeader = document.querySelector('.button-order-call')
let callFooter = document.querySelector('.location-call--button')

//Кнопки закрытия модельного окна
let closeModalApplication = document.querySelector('.close-request') 
let closeModalCall = document.querySelector('.close-call')
let cloceModalSuccessful = document.querySelector('.close-successful')
let buttonCloseModalSuccessful = document.querySelector('.successful-button')
let cloceModalSending = document.querySelector('.close-sending')
let buttonCloseModalSending = document.querySelector('.sending-button')

//Заблюреый фон
let darkenedBackground = document.querySelector('.darkened-background')

//Окно заявки
let applicationModal = document.querySelector('.leave-request')
let callModal = document.querySelector('.order-callModal')

//Окна успешной отправки формы
let successfulModal = document.querySelector('.successful')
let sendingModal = document.querySelector('.sending')

let darkenedCloseModal = document.querySelector('.darkened-background')

darkenedCloseModal.addEventListener('click', function() {
    applicationModal.classList.remove('leave-request-open')
    callModal.classList.remove('order-callModal-open')
    darkenedBackground.classList.remove('darkened-background-open')
})

//Обрабочик на модельное окно 'доставка биологического материала'
applicationHeader.addEventListener('click', function() {
    applicationModal.classList.add('leave-request-open')
    darkenedBackground.classList.add('darkened-background-open')
})

applicationFooter.addEventListener('click', function() {
    applicationModal.classList.add('leave-request-open')
    darkenedBackground.classList.add('darkened-background-open')
})

closeModalApplication.addEventListener('click', function() {
    applicationModal.classList.remove('leave-request-open')
    darkenedBackground.classList.remove('darkened-background-open')
})

//Обрабочик на модельное окно 'перезвонить'
callHeader.addEventListener('click', function() {
    callModal.classList.add('order-callModal-open')
    darkenedBackground.classList.add('darkened-background-open')
})

applicationHeaderTwo.addEventListener('click', function() {
    callModal.classList.add('order-callModal-open')
    darkenedBackground.classList.add('darkened-background-open')
})

callFooter.addEventListener('click', function() {
    callModal.classList.add('order-callModal-open')
    darkenedBackground.classList.add('darkened-background-open')
})

closeModalCall.addEventListener('click', function() {
    callModal.classList.remove('order-callModal-open')
    darkenedBackground.classList.remove('darkened-background-open')
})

//Обрабочик на успешную отправку
cloceModalSuccessful.addEventListener('click', function() {
    successfulModal.classList.remove('successful-application-open')
})

buttonCloseModalSuccessful.addEventListener('click', function() {
    successfulModal.classList.remove('successful-application-open')
})

cloceModalSending.addEventListener('click', function() {
    sendingModal.classList.remove('sending-completed-open')
})

buttonCloseModalSending.addEventListener('click', function() {
    sendingModal.classList.remove('sending-completed-open')
})

let successfulCloseModal = document.querySelector('.successful-application--dark')
let sendingCloseModal = document.querySelector('.sending-completed--dark')

successfulCloseModal.addEventListener('click', function() {
    successfulModal.classList.remove('successful-application-open')
})

sendingCloseModal.addEventListener('click', function() {
    sendingModal.classList.remove('sending-completed-open')
})


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.application-input--tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

  });
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.call-input--tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
    });
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.request-input--tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
    });
});

let formCall = document.querySelector('.call-form')
let formRequest = document.querySelector('.request-form')
let formApplication = document.querySelector('.application-form')

let inputCall = document.querySelector('.call-input--tel')

let inputCallRequest = document.querySelector('.request-input--tel')
let inputNameRequest = document.querySelector('.request-input--name')

let inputApplicationTel = document.querySelector('.application-input--tel')
let inputApplicationName = document.querySelector('.application-input--name')

formCall.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = new FormData(this) // Сборка формы 
  var url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url, {
      method: 'get',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
      if (json.id === 101) { // Для примера проверка пройдена если id === 101
        // Добавление поля
        callModal.classList.remove('order-callModal-open')
        darkenedBackground.classList.remove('darkened-background-open')
        successfulModal.classList.add('successful-application-open')
        inputCall.value = ''
      }else {
        console.log(json)
      }

    })
    .catch(err => console.log(err));
})

formRequest.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
    method: 'get',
    headers: {
         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
    if (json.id === 101) { // Для примера проверка пройдена если id === 101
        // Добавление поля
        applicationModal.classList.remove('leave-request-open')
        darkenedBackground.classList.remove('darkened-background-open')
        sendingCloseModal.classList.add('sending-completed-open')
        inputCallRequest.value = ''
        inputNameRequest.value = ''
    }else {
        console.log(json)
    }
  
    })
    .catch(err => console.log(err));
})

formApplication.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
    method: 'get',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
    if (json.id === 101) { // Для примера проверка пройдена если id === 101
        // Добавление поля
        sendingCloseModal.classList.add('sending-completed-open')
        inputApplicationTel.value = ''
        inputApplicationName.value = ''
    }else {
          console.log(json)
    }
  
    })
    .catch(err => console.log(err));
})

new Swiper('.features-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        375: {
            centeredSledes: true,
            spaceBetween: -90,
            slidesPerView: 1,
        },
        850: {
            loop: false,
            centeredSledes: false,
            spaceBetween: 70,
            slidesPerView: 3,
        },
        1250: {
            watchOverflow: true,
            loop: false,
            centeredSledes: false,
            spaceBetween: 10,
            slidesPerView: 4,
        }
    },
});