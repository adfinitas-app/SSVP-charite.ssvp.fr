$(document).foundation();

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    "https://s3.amazonaws.com/heroku-adfinitas-campaign/SSVP-questionnaire/bg-question-1.jpg",
    "https://s3.amazonaws.com/heroku-adfinitas-campaign/SSVP-questionnaire/bg-question-2.jpg",
    "https://s3.amazonaws.com/heroku-adfinitas-campaign/SSVP-questionnaire/bg-question-3.jpg",
    "https://s3.amazonaws.com/heroku-adfinitas-campaign/SSVP-questionnaire/bg-question-4.jpg",
    "https://s3.amazonaws.com/heroku-adfinitas-campaign/SSVP-questionnaire/bg-question-5.jpg"
]);

var lastQuestion = false;
var loop = false;

$(document).ready( function () {

    $("#f_phone").intlTelInput({
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.13/js/utils.js",
        initialCountry: "fr"
    });


    $('.logo img').css('visibility','visible').hide().fadeIn("slow", function () {
        $('.accroche .left .title h1').css('visibility','visible').hide().fadeIn("slow");
        $('.accroche .left .title h2').css('visibility','visible').hide().fadeIn("slow", function () {
            $('.accroche .left .text p').css('visibility','visible').hide().fadeIn("slow", function () {
                $('.next-screen').css('visibility','visible').hide().fadeIn("slow", function () {
                    if ($(window).width() < 640) {
                        var i = 0;
                        setInterval(function(){
                            if (i % 2 === 0) {
                                $("#next").css('bottom','10px');
                            }
                            else {
                                $("#next").css('bottom','20px');
                            }
                            i++;
                        },500);
                    }

                });
            });

        });

    });
    /*setTimeout(
        function()
        {
            if ($('#questionnaire').css('display') === "none") {
                $('#questionnaire').show();

                initSlider();

                $("body").css("overflow", "hidden");
                scrollToNext($('#questionnaire'), function () {
                    $("body").css("overflow", "visible");
                    $('#begin').hide();
                });
            }
        }, 10000);*/


    fillFieldsFromUrl();
});

function checkSelectAnswer(nb) {
    var check = false;
    nb++;
    var answers = $('#questionnaire .slide' + nb + ' a');

    answers.each( function () {
       if ($(this).hasClass('select')) {
           check = true;
       }
    });
    return check;
}

$('body').bind('touchmove', function(e) {
    if ($('#questionnaire').css('display') === "none" && $('#begin').css('display') === "block") {
        $('#questionnaire').show();


        initSlider();

        $("body").css("overflow", "hidden");
        scrollToNext($('#questionnaire'), function () {
            $("body").css("overflow", "visible");
            $('#begin').hide();
        });
    }
});


$('.next-screen').click( function () {
    $(this).remove();
    $('#questionnaire').show();


    initSlider();

    $("body").css("overflow", "hidden");
    scrollToNext($('#questionnaire'), function () {
        $("body").css("overflow", "visible");
        $('#begin').hide();
    });
});


var index = 0;
$('#questionnaire .container-answer a').click( function () {
    if (lastQuestion) {
        $('#section-form').show();
        scrollToNext($('#section-form'), function () {
            $('#questionnaire').hide();
        });
    }


    index++;
    $('#nb-question').fadeOut(function () {
        $('#nb-question').html(index + 1);
        $('#nb-question').fadeIn();
    });

    $('.slider-questionnaire').slick('slickGoTo',index);

    if ($('.slider-questionnaire').slick('slickCurrentSlide') === 4) {

        $('#nextQuestion').css('top','auto');
        $('#nextQuestion').css('bottom','20px');
        $('#nextQuestion').css('margin','0 auto');
        $('#nextQuestion').css('left','0');
        $('#nextQuestion').css('right','0');
        $('#nextQuestion').css('transform','rotate(0deg)');
        lastQuestion = true;
    }


});


$('form').submit( function (e) {
    e.preventDefault();
    $('.error').hide();

    if (validateForm()) {
        sendData(getAnswer());
        $('#merci').show();
        scrollToNext($('#merci'), function () {
            $('#section-form').hide();
        });

    }


});

function initSlider() {
    $('.slider-questionnaire').slick({
        arrow: false,
        infinite: false,
        accessibility: false,
        draggable: false
    });
}

function getAnswer() {
    var answer = [];
    $('.select').each( function () {
        answer.push($(this).attr('title'));
    });
    return answer;
}


function validateForm() {
    var check = true;

    $('.error').hide();

    if ($('#f_email').val() === "") {
        $('.error-mail').show();
        check = false;
    }

    if ($('#f_email').val() !== "") {
        if (!validateEmail($('#f_email').val())) {
            $('.error-mail-wrong').show();
            check = false;
        }
    }
    if ($('#f_phone').val() !== "") {
        if (!$("#f_phone").intlTelInput("isValidNumber")) {
            $('.error-phone-wrong').show();
            check = false;
        }
    }
    return check;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function fillFieldsFromUrl() {
    var p = extractUrlParams();

    if (p['email'] && p['email'] !== "undefined")
        $("#f_email").val(p['email']);
    if (p['phone'] && p['phone'] !== "undefined")
        $("#f_phone").val(p['phone']);
    if (p['wv_email'] && p['wv_email'] !== "undefined")
        $("#f_email").val(p['wv_email']);
    if (p['wv_phone'] && p['wv_phone'] !== "undefined")
        $("#f_phone").val(p['wv_phone']);
}

function extractUrlParams(){
    var t = document.location.search.substring(1).split('&'); var f = [];
    for (var i=0; i<t.length; i++){
        var x = t[ i ].split('=');
        f[x[0]]=decodeURIComponent(x[1]);
    }
    return f;
}


$('#questionnaire .container-answer a').click( function (e) {
    e.preventDefault();

    //REMOVE SELECT
    $(this).parent().find('a').each(function () {
        $(this).removeClass('select');
    });

    //ADD SELECT
    $(this).addClass('select');
}).hover(
    function() {
        $(this).css("background-color","white");
        $(this).css("color","#4b65ab");
    }, function() {
        $(this).css("background-color","rgba(154,167,203,0.8)");
        $(this).css("color","white");
    }
);


function 	scrollToNext(next, callback){
    $('html, body').stop().animate({
        scrollTop: $(next).offset().top - $('.sub.nav').height()
    }, 700, 'swing', function() {
        callback();
    });
}