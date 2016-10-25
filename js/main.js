console.log("hello");
$('#project0link0').click(function() {
window.open('https://priyankakumbha.github.io/Project-0/', '_blank');
});
$('#project0code0').click(function() {
window.open('https://github.com/priyankakumbha/Project-0', '_blank');
});
$('#project1link1').click(function() {
window.open('https://priyankause.herokuapp.com/', '_blank');
});
$('#project1code1').click(function() {
window.open('https://github.com/priyankakumbha/recipebook', '_blank');
});
$('#project2link2').click(function() {
window.open('https://nescafold.herokuapp.com/', '_blank');
});
$('#project2code2').click(function() {
window.open('https://github.com/priyankakumbha/nescafold', '_blank');
});
$('#project3link3').click(function() {
window.open('https://myshowandmytime.herokuapp.com/', '_blank');
});
$('#project3code3').click(function() {
window.open('https://github.com/priyankakumbha/movie_booking_system', '_blank');
});

// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateX(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  }
});
