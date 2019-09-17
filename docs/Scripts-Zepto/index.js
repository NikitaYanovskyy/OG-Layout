$(document).ready(function(){
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
            items:3
        }
    }
});
$('.game-btn-prev').click(()=>{
    games.trigger('prev.owl.carousel')
})
$('.game-btn-next').click(()=>{
    games.trigger('next.owl.carousel')
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