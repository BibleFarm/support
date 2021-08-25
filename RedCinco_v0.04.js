// Red Cinco v0.04 //

$(document).ready(function() {

setTimeout(function() {
$(".bf_lock_n_load_wrap, .bf_lock_n_load, .bf_intro_splash_bg").hide();
}, 2000);


//////////////////////////////////
///// BEGIN if mobile or desktop /
//////////////////////////////////
// upon arrival
if ($(window).width() < 769) {
  $('.bf_wrap_top_mobile').css('display', 'flex');
  $('.bf_wrap_top_desktop').css('display', 'none');
  $('.bf_wrap_top_menu').hide();
}
else {
  $('.bf_wrap_top_mobile').css('display', 'none');
  $('.bf_wrap_top_desktop').css('display', 'flex');
  $('.bf_wrap_top_menu').show();
}
// upon resize
$(window).on('resize', function () {
  if ($(window).width() < 769) {
    $('.bf_wrap_top_mobile').css('display', 'flex');
    $('.bf_wrap_top_desktop').css('display', 'none');
    $('.bf_wrap_top_menu').hide();
  }
  else {
    $('.bf_wrap_top_mobile').css('display', 'none');
    $('.bf_wrap_top_desktop').css('display', 'flex');
    $('.bf_wrap_top_menu').show();
  }
});
//////////////////////////////////
///// END if mobile or desktop /
//////////////////////////////////



//////////////////////////////////
///// BEGIN flexbox top menu /
//////////////////////////////////
var neededWidth = $(".flex-parent").outerWidth(); //you can also use static value
var totalChildWidth = 0;

$(".flex-parent").children(".flex-child").each(function() {
    totalChildWidth+= $(this).outerWidth(); //add up to the total height
    if(totalChildWidth> neededWidth) {  //compare if the height limit was exceeded
       $(this).hide(); // if it did, hide the current element
       $(this).nextAll().hide(); //hide all other list also
       return false; // break the loop to stop the further iteration
    }
});

$(window).on('resize', function () {

  var neededWidth = $(".flex-parent").outerWidth(); //you can also use static value
  var totalChildWidth = 0;

  $(".flex-child").show();


$(".flex-parent").children(".flex-child").each(function() {
    totalChildWidth+= $(this).outerWidth(); //add up to the total height
    if(totalChildWidth> neededWidth) {  //compare if the height limit was exceeded
       $(this).hide(); // if it did, hide the current element
       $(this).nextAll().hide(); //hide all other list also
       return false; // break the loop to stop the further iteration
    }
});

});

//////////////////////////////////
///// END flexbox top menu /
//////////////////////////////////


//////////////////////////////////
///// BEGIN swiper bf navigation /
//////////////////////////////////
  var swiper_jovi = new Swiper(".swiper-container-main", {
          slidesPerView: 1,
        centeredSlides: true,

        breakpoints: {
          960: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          2240: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
          2880: {
            slidesPerView: 9,
            spaceBetween: 0,
          },
          3520: {
            slidesPerView: 11,
            spaceBetween: 0,
          },
          4160: {
            slidesPerView: 13,
            spaceBetween: 0,
          },
          4800: {
            slidesPerView: 15,
            spaceBetween: 0,
          },
        },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    initialSlide: 10,
      spaceBetween: 0,
    preventClicks: true,
    keyboardControl: true,
    mousewheelControl: false,
    shortSwipes: false,
    hashnav: true,
        keyboard: {
          enabled: true,
        },
    hashNavigation: {
      watchState: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  // navigation menu clicks
  $(".move_to_bf-menu").click(swiper_jovi, function() {
    swiper_jovi.slideTo(0);
  });
  $(".move_to_bf-general").click(swiper_jovi, function() {
    swiper_jovi.slideTo(1);
  });
  $(".move_to_bf-nacionales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(2);
  });
  $(".move_to_bf-mundo").click(swiper_jovi, function() {
    swiper_jovi.slideTo(3);
  });
  $(".move_to_bf-politica").click(swiper_jovi, function() {
    swiper_jovi.slideTo(4);
  });
  $(".move_to_bf-misiones").click(swiper_jovi, function() {
    swiper_jovi.slideTo(5);
  });
  $(".move_to_bf-policiales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(6);
  });
  $(".move_to_bf-deportes").click(swiper_jovi, function() {
    swiper_jovi.slideTo(7);
  });
  $(".move_to_bf-cultura").click(swiper_jovi, function() {
    swiper_jovi.slideTo(8);
  });
  $(".move_to_bf-espectaculos").click(swiper_jovi, function() {
    swiper_jovi.slideTo(9);
  });
  $(".move_to_bf-educacion").click(swiper_jovi, function() {
    swiper_jovi.slideTo(10);
  });
  $(".move_to_bf-salud").click(swiper_jovi, function() {
    swiper_jovi.slideTo(11);
  });
  $(".move_to_bf-tecnologia").click(swiper_jovi, function() {
    swiper_jovi.slideTo(12);
  });
  $(".move_to_bf-mascotas").click(swiper_jovi, function() {
    swiper_jovi.slideTo(13);
  });
  $(".move_to_bf-clasificados").click(swiper_jovi, function() {
    swiper_jovi.slideTo(14);
  });
  $(".move_to_bf-profesionales").click(swiper_jovi, function() {
    swiper_jovi.slideTo(15);
  });
  $(".move_to_bf-mediakit").click(swiper_jovi, function() {
    swiper_jovi.slideTo(16);
  });
  $(".move_to_bf-info").click(swiper_jovi, function() {
    swiper_jovi.slideTo(17);
  });
///////////////////////////////////
// BEGIN load iframes as needed
///////////////////////////////////

///////////////////////////////////
////// general
///////////////////////////////////
var loadgeneral = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#general').hasClass("swiper-slide-visible") ) && ( isEmpty($('.general')) ) ) {
		console.log('general is empty && is visible');
$(".general").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadgeneral);
	}
}, 1000);
///////////////////////////////////
////// nacionales
///////////////////////////////////
var loadnacionales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#nacionales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.nacionales')) ) ) {
		console.log('nacionales is empty && is visible');
$(".nacionales").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadnacionales);
	}
}, 1000);
///////////////////////////////////
////// mundo
///////////////////////////////////
var loadmundo = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#mundo').hasClass("swiper-slide-visible") ) && ( isEmpty($('.mundo')) ) ) {
		console.log('mundo is empty && is visible');
$(".mundo").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadmundo);
	}
}, 1000);
///////////////////////////////////
////// politica
///////////////////////////////////
var loadpolitica = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#politica').hasClass("swiper-slide-visible") ) && ( isEmpty($('.politica')) ) ) {
		console.log('politica is empty && is visible');
$(".politica").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadpolitica);
	}
}, 1000);
///////////////////////////////////
////// misiones
///////////////////////////////////
var loadmisiones = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#misiones').hasClass("swiper-slide-visible") ) && ( isEmpty($('.misiones')) ) ) {
		console.log('misiones is empty && is visible');
$(".misiones").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadmisiones);
	}
}, 1000);
///////////////////////////////////
////// policiales
///////////////////////////////////
var loadpoliciales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#policiales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.policiales')) ) ) {
		console.log('policiales is empty && is visible');
$(".policiales").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadpoliciales);
	}
}, 1000);
///////////////////////////////////
////// deportes
///////////////////////////////////
var loaddeportes = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#deportes').hasClass("swiper-slide-visible") ) && ( isEmpty($('.deportes')) ) ) {
		console.log('deportes is empty && is visible');
$(".deportes").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loaddeportes);
	}
}, 1000);
///////////////////////////////////
////// cultura
///////////////////////////////////
var loadcultura = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#cultura').hasClass("swiper-slide-visible") ) && ( isEmpty($('.cultura')) ) ) {
		console.log('cultura is empty && is visible');
$(".cultura").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadcultura);
	}
}, 1000);
///////////////////////////////////
////// espectaculos
///////////////////////////////////
var loadespectaculos = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#espectaculos').hasClass("swiper-slide-visible") ) && ( isEmpty($('.espectaculos')) ) ) {
		console.log('espectaculos is empty && is visible');
$(".espectaculos").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadespectaculos);
	}
}, 1000);
///////////////////////////////////
////// educacion
///////////////////////////////////
var loadeducacion = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#educacion').hasClass("swiper-slide-visible") ) && ( isEmpty($('.educacion')) ) ) {
		console.log('educacion is empty && is visible');
$(".educacion").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadeducacion);
	}
}, 1000);
///////////////////////////////////
////// salud
///////////////////////////////////
var loadsalud = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#salud').hasClass("swiper-slide-visible") ) && ( isEmpty($('.salud')) ) ) {
		console.log('salud is empty && is visible');
$(".salud").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadsalud);
	}
}, 1000);
///////////////////////////////////
////// tecnologia
///////////////////////////////////
var loadtecnologia = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#tecnologia').hasClass("swiper-slide-visible") ) && ( isEmpty($('.tecnologia')) ) ) {
		console.log('tecnologia is empty && is visible');
$(".tecnologia").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadtecnologia);
	}
}, 1000);
///////////////////////////////////
////// mascotas
///////////////////////////////////
var loadmascotas = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#mascotas').hasClass("swiper-slide-visible") ) && ( isEmpty($('.mascotas')) ) ) {
		console.log('mascotas is empty && is visible');
$(".mascotas").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadmascotas);
	}
}, 1000);
///////////////////////////////////
////// clasificados
///////////////////////////////////
var loadclasificados = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#clasificados').hasClass("swiper-slide-visible") ) && ( isEmpty($('.clasificados')) ) ) {
		console.log('clasificados is empty && is visible');
$(".clasificados").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadclasificados);
	}
}, 1000);
///////////////////////////////////
////// profesionales
///////////////////////////////////
var loadprofesionales = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#profesionales').hasClass("swiper-slide-visible") ) && ( isEmpty($('.profesionales')) ) ) {
		console.log('profesionales is empty && is visible');
$(".profesionales").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadprofesionales);
	}
}, 1000);
///////////////////////////////////
////// mediakit
///////////////////////////////////
var loadmediakit = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#mediakit').hasClass("swiper-slide-visible") ) && ( isEmpty($('.mediakit')) ) ) {
		console.log('mediakit is empty && is visible');
$(".mediakit").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadmediakit);
	}
}, 1000);
///////////////////////////////////
////// info
///////////////////////////////////
/*
var loadinfo = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#info').hasClass("swiper-slide-visible") ) && ( isEmpty($('.info')) ) ) {
		console.log('info is empty && is visible');
$(".info").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadinfo);
	}
}, 1000);
*/
///////////////////////////////////
////// radio
///////////////////////////////////
/*
var loadradio = setInterval(function() {
  function isEmpty( el ){
      return !$.trim(el.html())
  }
// check if it's empty && visible
if ( ( $('#radio').hasClass("swiper-slide-visible") ) && ( isEmpty($('.radio')) ) ) {
		console.log('radio is empty && is visible');
$(".radio").append('<div class="temp">hola</div>');
// clear the setInterval
clearInterval(loadradio);
	}
}, 1000);
*/


///////////////////////////////////
// END load iframes as needed
///////////////////////////////////







///////////////////
/*
if ($(window).width() > 769) {
$('.bf_farm_container').css("overflow", "hidden");
$('.bf_farm_container').perfectScrollbar({
  wheelPropagation: true,
  scrollXMarginOffset: 2
});
}
*/
///////////////////
$('.swiper-slide:has(.bf_intro_container)').css('height', '100%');


//////////////////////////////////
///// BEGIN swiper general /
//////////////////////////////////
  var swiper_ads_general = new Swiper(".swiper_ads-general", {
    effect: 'flip',
autoplay: 4500,
autoplayDisableOnInteraction: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    initialSlide: 8,
    spaceBetween: 0,
    preventClicks: true,
    keyboardControl: true,
    mousewheelControl: false,
    shortSwipes: false,
    centeredSlides: false,
    slidesPerView: 1,
    hashnav: false
  });
  //////////////////////////////////
  ///// END swiper general /
  //////////////////////////////////
  //////////////////////////////////
  ///// BEGIN swiper nacionales /
  //////////////////////////////////
    var swiper_ads_nacionales = new Swiper(".swiper_ads-nacionales", {
      effect: 'flip',
  autoplay: 4500,
  autoplayDisableOnInteraction: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      initialSlide: 1,
      spaceBetween: 0,
      preventClicks: true,
      keyboardControl: true,
      mousewheelControl: false,
      shortSwipes: false,
      centeredSlides: false,
      slidesPerView: 1,
      hashnav: false
    });
    //////////////////////////////////
    ///// END swiper nacionales /
    //////////////////////////////////
    //////////////////////////////////
    ///// BEGIN swiper mundo /
    //////////////////////////////////
      var swiper_ads_mundo = new Swiper(".swiper_ads-mundo", {
        effect: 'flip',
    autoplay: 4500,
    autoplayDisableOnInteraction: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        initialSlide: 2,
        spaceBetween: 0,
        preventClicks: true,
        keyboardControl: true,
        mousewheelControl: false,
        shortSwipes: false,
        centeredSlides: false,
        slidesPerView: 1,
        hashnav: false
      });
      //////////////////////////////////
      ///// END swiper mundo /
      //////////////////////////////////
      //////////////////////////////////
      ///// BEGIN swiper politica /
      //////////////////////////////////
        var swiper_ads_politica = new Swiper(".swiper_ads-politica", {
          effect: 'flip',
      autoplay: 4500,
      autoplayDisableOnInteraction: false,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          initialSlide: 3,
          spaceBetween: 0,
          preventClicks: true,
          keyboardControl: true,
          mousewheelControl: false,
          shortSwipes: false,
          centeredSlides: false,
          slidesPerView: 1,
          hashnav: false
        });
        //////////////////////////////////
        ///// END swiper politica /
        //////////////////////////////////
      //////////////////////////////////
      ///// BEGIN swiper misiones /
      //////////////////////////////////
        var swiper_ads_misiones = new Swiper(".swiper_ads-misiones", {
          effect: 'flip',
      autoplay: 4500,
      autoplayDisableOnInteraction: false,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          initialSlide: 4,
          spaceBetween: 0,
          preventClicks: true,
          keyboardControl: true,
          mousewheelControl: false,
          shortSwipes: false,
          centeredSlides: false,
          slidesPerView: 1,
          hashnav: false
        });
        //////////////////////////////////
        ///// END swiper misiones /
        //////////////////////////////////
        //////////////////////////////////
        ///// BEGIN swiper policiales /
        //////////////////////////////////
          var swiper_ads_policiales = new Swiper(".swiper_ads-policiales", {
            effect: 'flip',
        autoplay: 4500,
        autoplayDisableOnInteraction: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            initialSlide: 5,
            spaceBetween: 0,
            preventClicks: true,
            keyboardControl: true,
            mousewheelControl: false,
            shortSwipes: false,
            centeredSlides: false,
            slidesPerView: 1,
            hashnav: false
          });
          //////////////////////////////////
          ///// END swiper policiales /
          //////////////////////////////////
          //////////////////////////////////
          ///// BEGIN swiper deportes /
          //////////////////////////////////
            var swiper_ads_deportes = new Swiper(".swiper_ads-deportes", {
              effect: 'flip',
          autoplay: 4500,
          autoplayDisableOnInteraction: false,
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              initialSlide: 6,
              spaceBetween: 0,
              preventClicks: true,
              keyboardControl: true,
              mousewheelControl: false,
              shortSwipes: false,
              centeredSlides: false,
              slidesPerView: 1,
              hashnav: false
            });
            //////////////////////////////////
            ///// END swiper deportes /
            //////////////////////////////////
            //////////////////////////////////
            ///// BEGIN swiper cultura /
            //////////////////////////////////
              var swiper_ads_cultura = new Swiper(".swiper_ads-cultura", {
                effect: 'flip',
            autoplay: 4500,
            autoplayDisableOnInteraction: false,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                initialSlide: 7,
                spaceBetween: 0,
                preventClicks: true,
                keyboardControl: true,
                mousewheelControl: false,
                shortSwipes: false,
                centeredSlides: false,
                slidesPerView: 1,
                hashnav: false
              });
              //////////////////////////////////
              ///// END swiper cultura /
              //////////////////////////////////
              //////////////////////////////////
              ///// BEGIN swiper espectaculos /
              //////////////////////////////////
                var swiper_ads_espectaculos = new Swiper(".swiper_ads-espectaculos", {
                  effect: 'flip',
              autoplay: 4500,
              autoplayDisableOnInteraction: false,
                  watchSlidesVisibility: true,
                  watchSlidesProgress: true,
                  initialSlide: 8,
                  spaceBetween: 0,
                  preventClicks: true,
                  keyboardControl: true,
                  mousewheelControl: false,
                  shortSwipes: false,
                  centeredSlides: false,
                  slidesPerView: 1,
                  hashnav: false
                });
                //////////////////////////////////
                ///// END swiper espectaculos /
                //////////////////////////////////
                //////////////////////////////////
                ///// BEGIN swiper educacion /
                //////////////////////////////////
                  var swiper_ads_educacion = new Swiper(".swiper_ads-educacion", {
                    effect: 'flip',
                autoplay: 4500,
                autoplayDisableOnInteraction: false,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    initialSlide: 9,
                    spaceBetween: 0,
                    preventClicks: true,
                    keyboardControl: true,
                    mousewheelControl: false,
                    shortSwipes: false,
                    centeredSlides: false,
                    slidesPerView: 1,
                    hashnav: false
                  });
                  //////////////////////////////////
                  ///// END swiper educacion /
                  //////////////////////////////////
                  //////////////////////////////////
                  ///// BEGIN swiper salud /
                  //////////////////////////////////
                    var swiper_ads_salud = new Swiper(".swiper_ads-salud", {
                      effect: 'flip',
                  autoplay: 4500,
                  autoplayDisableOnInteraction: false,
                      watchSlidesVisibility: true,
                      watchSlidesProgress: true,
                      initialSlide: 10,
                      spaceBetween: 0,
                      preventClicks: true,
                      keyboardControl: true,
                      mousewheelControl: false,
                      shortSwipes: false,
                      centeredSlides: false,
                      slidesPerView: 1,
                      hashnav: false
                    });
                    //////////////////////////////////
                    ///// END swiper salud /
                    //////////////////////////////////
                    //////////////////////////////////
                    ///// BEGIN swiper tecnologia /
                    //////////////////////////////////
                      var swiper_ads_tecnologia = new Swiper(".swiper_ads-tecnologia", {
                        effect: 'flip',
                    autoplay: 4500,
                    autoplayDisableOnInteraction: false,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        initialSlide: 11,
                        spaceBetween: 0,
                        preventClicks: true,
                        keyboardControl: true,
                        mousewheelControl: false,
                        shortSwipes: false,
                        centeredSlides: false,
                        slidesPerView: 1,
                        hashnav: false
                      });
                      //////////////////////////////////
                      ///// END swiper tecnologia /
                      //////////////////////////////////
                      //////////////////////////////////
                      ///// BEGIN swiper mascotas /
                      //////////////////////////////////
                        var swiper_ads_mascotas = new Swiper(".swiper_ads-mascotas", {
                          effect: 'flip',
                      autoplay: 4500,
                      autoplayDisableOnInteraction: false,
                          watchSlidesVisibility: true,
                          watchSlidesProgress: true,
                          initialSlide: 12,
                          spaceBetween: 0,
                          preventClicks: true,
                          keyboardControl: true,
                          mousewheelControl: false,
                          shortSwipes: false,
                          centeredSlides: false,
                          slidesPerView: 1,
                          hashnav: false
                        });
                        //////////////////////////////////
                        ///// END swiper mascotas /
                        //////////////////////////////////
                        //////////////////////////////////
                        ///// BEGIN swiper clasificados /
                        //////////////////////////////////
                          var swiper_ads_clasificados = new Swiper(".swiper_ads-clasificados", {
                            effect: 'flip',
                        autoplay: 4500,
                        autoplayDisableOnInteraction: false,
                            watchSlidesVisibility: true,
                            watchSlidesProgress: true,
                            initialSlide: 13,
                            spaceBetween: 0,
                            preventClicks: true,
                            keyboardControl: true,
                            mousewheelControl: false,
                            shortSwipes: false,
                            centeredSlides: false,
                            slidesPerView: 1,
                            hashnav: false
                          });
                          //////////////////////////////////
                          ///// END swiper clasificados /
                          //////////////////////////////////
                          //////////////////////////////////
                          ///// BEGIN swiper profesionales /
                          //////////////////////////////////
                            var swiper_ads_profesionales = new Swiper(".swiper_ads-profesionales", {
                              effect: 'flip',
                          autoplay: 4500,
                          autoplayDisableOnInteraction: false,
                              watchSlidesVisibility: true,
                              watchSlidesProgress: true,
                              initialSlide: 14,
                              spaceBetween: 0,
                              preventClicks: true,
                              keyboardControl: true,
                              mousewheelControl: false,
                              shortSwipes: false,
                              centeredSlides: false,
                              slidesPerView: 1,
                              hashnav: false
                            });
                            //////////////////////////////////
                            ///// END swiper profesionales /
                            //////////////////////////////////
                            //////////////////////////////////
                            ///// BEGIN swiper mediakit /
                            //////////////////////////////////
                              var swiper_ads_mediakit = new Swiper(".swiper_ads-mediakit", {
                                effect: 'flip',
                            autoplay: 4500,
                            autoplayDisableOnInteraction: false,
                                watchSlidesVisibility: true,
                                watchSlidesProgress: true,
                                initialSlide: 15,
                                spaceBetween: 0,
                                preventClicks: true,
                                keyboardControl: true,
                                mousewheelControl: false,
                                shortSwipes: false,
                                centeredSlides: false,
                                slidesPerView: 1,
                                hashnav: false
                              });
                              //////////////////////////////////
                              ///// END swiper mediakit /
                              //////////////////////////////////






//////////////////////////////////
///// BEGIN shopping cart /
//////////////////////////////////
// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// *****************************************
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>"
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = "
      + "<td>" + cartArray[i].total + "</td>"
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();
//////////////////////////////////
///// END shopping cart /
//////////////////////////////////






















}); // end document ready
