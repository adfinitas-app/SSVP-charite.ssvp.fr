$(document).foundation()
$(document).ready(function() {
  var os = new OnScreen({
			tolerance: 0,
			debounce: 0,
			container: window
  });
  os.on('enter', '.onscreen', function(e) {
    $(e).addClass('animate');
    $(e).addClass($(e).data('animation'));
  });
  os.on('leave', '.onscreen', function(e) {
    $(e).removeClass('animate');
    $(e).removeClass($(e).data('animation'));
  });
  var products;
  // 0 => serviette
  // 1 => mug
  // 2 => bloc-notes
  // 3 => boite cartes
  // 4 => foulard
  function hideUnavailable(products) {
    var availableCount = 0;
    for (var i = 0; i < products.length; i++) {
      if (products[i] === false) {
	$('.quiz-5 .answers .quiz-5-' + (i + 1)).css('display', 'none');
      } else {
	availableCount++;
      }
    }
    if (availableCount <= 1) {
      $('.quiz-result-slider').hide();
      $('.sticky .state-1 .button').off('click')
    }
  }
  var stickyHeight = $('.sticky').height();
  $(window).on('resize', function() {
    stickyHeight = $('.sticky').height();
  });
  $(window).on('scroll', function() {
    var offset = $('#quiz-result-slider').get(0).getBoundingClientRect();
    if (offset.top < stickyHeight && offset.bottom > 0) {
      $('.sticky').slideUp(200);
    } else {
      $('.sticky').slideDown(200);
    }
  });

  $.ajax({
	 //url: 'http://localhost:3000',
	 url: 'https://ssvp-noel2017-api-products.herokuapp.com/',
	 dataType: 'json',
	 success: function(data) {
	   if (data.error == true) {
	     alert('API Error 2');
	   } else {
	     products = data.products;
	     hideUnavailable(products);
	   }
	 },
	 error: function() {
	   alert('API Error 1');
	 }
  });

  var answers = {};

  $(".sticky").sticky({
		      zIndex: 1
  });
  $('.sticky .state-1 .button').on('click', function(e) {
    e.preventDefault();
    $('.sticky .state-1').hide();
    $('.sticky .state-2').show();
  });

  $(".partagez-slider").slick({
			      nextArrow: $('.partagez .next-slider'),
			      prevArrow: $('.partagez .prev-slider'),
			      arrows: true
  });

  $(".quiz-result-slider").slick({
				 arrows: false,
				 draggable: false
  });

  $(".quiz-slider").slick({
			  arrows: false,
			  draggable: false
  });

  $(".quiz .prev-slider").on('click', function(e) {
    e.preventDefault();
    $('.quiz-slider').slick('slickPrev');
  });

  $('input').on('change', function(e) {
    $(this).parents('.slide').removeClass('error');
  });

  $(".quiz .next-slider").on('click', function(e) {
    e.preventDefault();
    var input_name = $(this).data('input');
    if (typeof(input_name) === 'undefined') {
      $('.quiz-slider').slick('slickNext');
    }
    var type = $('input[name="' + input_name + '"]').attr('type');

    var valid;
    var val;
    if (type == 'text') {
      var $input = $('input[name="' + input_name + '"]');
      if ($input.val().length == 0) {
	$('.' + input_name).addClass('error');
	valid = false;
      } else {
	val = $input.val();
	valid = true;
      }
    } else if (type == 'radio') {
      var $input = $('input[name="' + input_name + '"]:checked');
      if ($input.length == 0) {
	$('.' + input_name).addClass('error');
	valid = false;
      } else {
	val = $input.val();
	valid = true;
      }
    }
    if (valid) {
      answers[input_name] = val;
      $('.quiz-slider').slick('slickNext');
    }
  });

  $(".result-quiz").on('click', function(e) {
    e.preventDefault();
    var $elem = $('input[name="quiz-5"]:checked');
    if ($elem.length == 0) {
      $('.quiz-5').addClass('error');
      return;
    }
    var gift = parseInt($elem.val());
    $('.result-quiz .gifts > *:nth-child(' + gift + ')').css('display', 'flex');
    $('.quiz-result-slider').slick('slickNext');
  });
});

// Woopra
(function(){
  var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
	      domain: 'ssvp.fr'
});
woopra.track();

// Adwords
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-79260716-1');

// Smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
