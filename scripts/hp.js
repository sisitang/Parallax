/* Global variables */
var slice_left_margin = 25;
var column;
var navLinks = $('.side-nav');
var $body = $('body');
var $mobileMenu = $('.mobile-menu');
var $side_nav_button = $('.side-nav ul a');
var $home = $('.icon-home');
var $homepage = $('#homepage');

/* Calculate positions */
var $mainHeader = $('.theme');
var $mainH1 = $('.theme h1');
var mainHeaderHeight = $mainHeader.height()-1;
var fg_top = $('#fg').position().top;
var bg_top = $('#bg').position().top;
var mg_top = $('#mg').position().top;

/* Set logo animation */
setTimeout(function(){
	$('.a-logo').css('background-position','0 -125px');
},1500);

setTimeout(function(){
	$('.a-logo').css('background-position','0 -250px');
},2000);

setTimeout(function(){
	$('.a-logo').css('background-position','0 -375px');
},2500);

setSizeofSlices($(window).width());

/* >400px call localscroll */
if ($(window).width()>400){
	$(navLinks).localScroll({duration:1000, offsetTop : '50'});
	$('.nav').localScroll({duration:1000, offsetTop : '50'});
}

/* Menu for mobile */
$body.removeClass('show-menu');
$mobileMenu.click(function(){
	$body.toggleClass('show-menu');	
});

/* Show the label */
$side_nav_button.hover(function(){
            var $this = $(this);
            $this.siblings().stop(true, true).fadeIn('fast');	
        },function(){
            var $this = $(this);
            $this.siblings().stop(true, true).fadeOut('fast');	
});

/* Navigation initialization */
$('.side-nav a').first().css('background','#ffd500');
$('.nav a').eq(0).css('color','#36CAED');

/* Back to HOME */
$home.click(function(){
	location.href = './';
});

/* Window scroll */
$(window).scroll(function(){
	/* Set the right style of nav and side-nav when scroll */
	var wc_top = $(document).scrollTop();
	var html_top = $('#html5').offset().top;
	var jq_top = $('#jquery').offset().top;
	var php_top = $('#php').offset().top;
	var wp_top = $('#wordpress').offset().top;	
	var wc_top = $(window).scrollTop();
	var offset = 100;

	$('.side-nav a').css('background','#36CAED');
	$('.nav a').css('color','#535354');

	if( wc_top < (html_top - offset ) ){
		$('#nav-home').css('background','#ffd500');
		$('.nav a').eq(0).css('color','#36CAED');
	}else if( wc_top >= html_top - offset && wc_top < jq_top - offset){
		$('#nav-html').css('background','#ffd500');
		$('.nav a').eq(1).css('color','#36CAED');
	}else if( wc_top>= jq_top - offset && wc_top < php_top - offset){
		$('#nav-jq').css('background','#ffd500');
		$('.nav a').eq(2).css('color','#36CAED');
	}else if(wc_top>= php_top - offset && wc_top < wp_top - offset ){
		$('#nav-php').css('background','#ffd500');
		$('.nav a').eq(3).css('color','#36CAED');
	}else{
		$('#nav-wp').css('background','#ffd500');
		$('.nav a').eq(4).css('color','#36CAED');
	}
        
	/* Set up sticky header when scroll down */
	if ($(window).width()>600){
		if($(window).scrollTop() > mainHeaderHeight){
			$homepage.css('margin-top',100);
			$mainHeader.addClass('sticky');
			$mainH1.addClass('sticky');
			$('.footer').addClass('sticky');
		}else{
			$homepage.css('margin-top',0);
			$mainHeader.removeClass('sticky');	
			$mainH1.removeClass('sticky');
			$('.footer').removeClass('sticky');	
		}
		parallaxScroll();
	}
});

$(document).ready(function(){
	/* This will execute whenever the window is resized */
	$(window).resize(function() {
		if ($(window).width()<=600){
			$mainHeader.removeClass('sticky');	
			$mainH1.removeClass('sticky');
			$homepage.css('margin-top',0);
		}
		setSizeofSlices($(window).width());
	});
	
	/* Set thumbnails' style */
	$('.thumbnail').hover(function(){
		$(this).offsetParent().css('box-shadow','1px 2px 2px 2px #747373');
		$(this).children('img').fadeTo(100,0.5);
		$(this).children('div').animate({
			height:'+=50'
		});
		},function(){
			$(this).offsetParent().css('box-shadow','none');
			$(this).children('img').fadeTo(100,1);
			$(this).children('div').animate({
				height:'-=50'
		});
	});
	
	/* Set avatar animation */
	$('.avatar').hover(function(){
		$(this).css('margin-left',30);
	},function(){
		$(this).css('margin-left',20);
	});
	
	$('.avatar').click(function(e){
		e.preventDefault();
		window.open('https://www.linkedin.com/pub/sisi-tang/80/666/9b1', '_blank') ;
	});
});


/* Set parallex */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	
	$('#fg').css( 'top', fg_top-(scrolled * 0.25) );
	$('#mg').css( 'top', mg_top-(scrolled * 0.15) );
	$('#bg').css( 'top', bg_top-(scrolled * 0.75) );	
};

/* Set images width */
function setSizeofSlices(window_width){
	if(window_width<=400){
		column =1 ;
        }else if (window_width>400 && window_width <= 880){
		column=2;
	}else if ( window_width>880){
		column = 3;
	}
	var size = (parseInt($('.content article').css('width'))-100)/column-(column+1)*slice_left_margin/column;
	$('.imagesWrapper >div').css('margin-left',slice_left_margin);
	$('.imagesWrapper >div').css('width',size).css('height',size);
	$('.thumbnail img').css('width',size).css('height',size); 
	$('.thumbnail div').css('width',size).css('height',size/2.5);
}

/* Mail and mobile */
$('.icon-mail').click(function(){
    window.location.href = 'mailto:sisi.tang@hotmail.com';
});

$('.icon-mobile').click(function(){
    alert('Cell: 604-353-8697');
});