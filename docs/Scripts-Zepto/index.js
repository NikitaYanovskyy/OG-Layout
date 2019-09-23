$(document).ready(function(){
/////////////////////////////////////Up Button
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('.up-button').css({
            marginRight: 0,
            opacity: 1
        })
    }else{
        $('.up-button').css({
            marginRight: -80,
            opacity: 0
        })
    }
    
   
})
$('.team').attr('style', 'margin-top: 150px !important; opacity: 0 !important');
$(window).scroll(function(){
    if($(this).scrollTop() > $('.team').offset().top/2){
        $('.team').attr('style', 'margin-top: 50px !important; opacity: 1 !important');
    }
})
$('.dota-achievments').attr('style', 'margin-top: 150px !important; opacity: 0 !important');
$(window).scroll(function(){
    if($(this).scrollTop() > ($('.dota-achievments').offset().top -300)){
        $('.dota-achievments').attr('style', 'margin-top: 50px !important; opacity: 1 !important');

    }
})
$(window).scroll(function(){
    if($(this).scrollTop() > ($('.news').offset().top - 300)){
        $('.news-grid').css('margin-top','0');
        $('.news-grid').css('opacity','1');
    }
})
$('.videos').attr('style', 'margin-top: 150px !important; opacity: 0 !important');
$(window).scroll(function(){
    if($(this).scrollTop() > ($('.videos').offset().top - 300)){
        $('.videos').attr('style', 'margin-top: 50px !important; opacity: 1 !important');

    }
})
$('.merchandise').attr('style', 'margin-top: 150px !important; opacity: 0 !important');
$(window).scroll(function(){
    if($(this).scrollTop() > ($('.merchandise').offset().top - 300)){
        $('.merchandise').attr('style', 'margin-top: 50px !important; opacity: 1 !important');

    }
})
$('.up-button').click(()=>{
    $('body , html').animate({
        scrollTop: 0
    }, 'slow')
})
$('.section-margin:nth-child(1)').css('display' , 'none');

/////////////////////////////////////Menu Button
var menuButton = $('.burger-menu-wrapper');
var menu = $('.menu');
menuButton.click(()=>{
    menuButton.toggleClass('green');
    menu.toggleClass('block');
})
////////////////////////////////////Landing Carousel
var landing = $(`#landing-carousel`);
landing.owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
});
$('.landing-next').click(()=>{
    landing.trigger('next.owl.carousel');
})
$('.landing-prev').click(()=>{
    landing.trigger('prev.owl.carousel');
})
/////////////////////////////////////Games Carousel
var games = $('#game-carousel');
games.owlCarousel({
    dots: false,
    loop: true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
$('.game-btn-prev').click(()=>{
    games.trigger('prev.owl.carousel');
})
$('.game-btn-next').click(()=>{
    games.trigger('next.owl.carousel');
})

/////////////////////////////////////////Players Icon Animation
var player = $('.player');
player.eq(0).mouseover(()=>{
    $('*[data-num="1"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
})
player.eq(0).mouseout(()=>{
    $('*[data-num="1"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
})
player.eq(1).mouseover(()=>{
    $('*[data-num="2"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
})
player.eq(1).mouseout(()=>{
    $('*[data-num="2"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
})
player.eq(2).mouseover(()=>{
    $('*[data-num="3"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
    $('*[data-num="4"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
    $('*[data-num="5"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
})
player.eq(2).mouseout(()=>{
    $('*[data-num="3"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
    $('*[data-num="4"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
    $('*[data-num="5"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
})

player.eq(3).mouseover(()=>{
    $('*[data-num="6"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
    $('*[data-num="7"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
    $('*[data-num="8"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
})
player.eq(3).mouseout(()=>{
    $('*[data-num="6"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
    $('*[data-num="7"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
    $('*[data-num="8"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
})


player.eq(4).mouseover(()=>{
    $('*[data-num="9"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
    $('*[data-num="10"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 0`,
            opacity: 1
        })
        next()
    });
})
player.eq(4).mouseout(()=>{
    $('*[data-num="9"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
    $('*[data-num="10"]').queue(function(next){
        $(this).css({
            margin: ` 5px 0 0 -80px`,
            opacity: 0
        })
        next()
    });
})

/////////////////////////////////////Achievements Carousel
    var achievements = $('#achievements-carousel');
    achievements.owlCarousel({
        dots:false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

$('.next-btn').click(function() {
    achievements.trigger('next.owl.carousel');
})
$('.prev-btn').click(function() {
    achievements.trigger('prev.owl.carousel');
})
///////////////////////////////////////Videos Carousel
var videos = $('#videos-carousel');
videos.owlCarousel({
    dots: false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});

///////////////////////////////////////Merchandise Carousel
var merchandise = $('#merchandise-carousel');
merchandise.owlCarousel({
    dots: false,
    loop: true,
    margin: 10,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.merch-btn-next').click(function() {
    merchandise.trigger('next.owl.carousel');
})
$('.merch-btn-prev').click(function() {
    merchandise.trigger('prev.owl.carousel');
})
});