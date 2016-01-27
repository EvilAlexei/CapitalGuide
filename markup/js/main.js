$(function(){
  /* chat tooltip */
  $('.full-chat').tooltip({
    position: { my: "right top+10", at: "right bottom" }
  });

  /* nav hover effect */
  setTimeout(function(){  // setTimeout because of not safe webfonts
    navHover({
      holder: '#nav',
      marker: '#marker',
      current: '.current'
    });
  }, 5);

  /* filter dropdown */
  $('.filter-dropdown .opener').click(function(){
    $('.filter-overlay').toggle();
    $(this).siblings('.dropdown').slideToggle();
  });

  $('.filter-overlay').click(function(){
    $(this).hide();
    $('.filter-dropdown .dropdown').slideUp();
  });

  /* filter sliders */
  jqueryUISlider({parent: '#high-value', slider: ".slider-range-01", input01: ".input-01", input02: ".input-02"}, {range: true, min: 0, max: 5000, values: [300, 4600]});
  jqueryUISlider({parent: '#high-value', slider: ".slider-range-02", input01: ".input-03", input02: ".input-04"}, {range: true, min: 0, max: 90, values: [1, 56]});
  jqueryUISlider({parent: '#high-value', slider: ".slider-range-03", input01: ".input-05", input02: ".input-06"}, {range: true, min: 0, max: 20, values: [0, 10]});
  jqueryUISlider({parent: '#high-value', slider: ".slider-range-04", input01: ".input-07", input02: ".input-08"}, {range: true, min: 0, max: 20, values: [0, 10]});

  jqueryUISlider({parent: '#mid-value', slider: ".slider-range-01", input01: ".input-01", input02: ".input-02"}, {range: true, min: 0, max: 5000, values: [300, 4600]});
  jqueryUISlider({parent: '#mid-value', slider: ".slider-range-02", input01: ".input-03", input02: ".input-04"}, {range: true, min: 0, max: 90, values: [1, 56]});
  jqueryUISlider({parent: '#mid-value', slider: ".slider-range-03", input01: ".input-05", input02: ".input-06"}, {range: true, min: 0, max: 20, values: [0, 10]});
  jqueryUISlider({parent: '#mid-value', slider: ".slider-range-04", input01: ".input-07", input02: ".input-08"}, {range: true, min: 0, max: 20, values: [0, 10]});

  jqueryUISlider({parent: '#low-value', slider: ".slider-range-01", input01: ".input-01", input02: ".input-02"}, {range: true, min: 0, max: 5000, values: [300, 4600]});
  jqueryUISlider({parent: '#low-value', slider: ".slider-range-02", input01: ".input-03", input02: ".input-04"}, {range: true, min: 0, max: 90, values: [1, 56]});
  jqueryUISlider({parent: '#low-value', slider: ".slider-range-03", input01: ".input-05", input02: ".input-06"}, {range: true, min: 0, max: 20, values: [0, 10]});
  jqueryUISlider({parent: '#low-value', slider: ".slider-range-04", input01: ".input-07", input02: ".input-08"}, {range: true, min: 0, max: 20, values: [0, 10]});

  /* faq-list */
  $('h4', '.faq-list').click(function(){
    var parent = $(this).parents('.faq-list');
    var parentLi = $(this).parent();

    if (!parentLi.hasClass('active')){
      $('> li', parent).removeClass('active');
      $('.holder', parent).slideUp();
      parentLi.addClass('active');
      $('.holder', '.active').slideDown();
    } else {
      $('.holder', '.active').slideUp();
      $('> li', parent).removeClass('active');
    }
  });

  /* hide-password btn */
  $('.hide-password').on('click', function(){
    var $this= $(this),
      $password_field = $this.prev('input');

    ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  /* site-menu */
  $('.site-menu').click(function(e){
    e.preventDefault();

    $(this).siblings('ul').toggle('slow');
    $(this).parent().toggleClass('active');
  });

  /* tabs */
  $('.tab-menu .mobile').click(function(){
    var currentTab = this.dataset.tab;

    $('.tab-menu .mobile').removeClass('current');
    $(this).addClass('current');

    $('.proj-cols > li').hide();
    $('.' + currentTab).show();
  });

  /* resize */
  $(window).on('resize', function(){
    $('#nav').removeClass('active');
    $('#nav ul').hide();
  });
});

function navHover(options){
  var marker=$(options.marker),current=$(options.current),selector=options.holder;current.addClass("active"),marker.css({left:current.position().left,width:current.outerWidth(),display:"block"}),$("li",selector).mouseover(function(){var a=$(this),b=a.position().left,c=a.outerWidth()||current.outerWidth(),d=0==b?0:b||current.position().left;$(".active").removeClass("active"),a.addClass("active"),marker.css({left:d,width:c})}),$(selector).mouseleave(function(){$(".active").removeClass("active"),current.addClass("active"),marker.css({left:current.position().left,width:current.outerWidth()})});
}

function jqueryUISlider(selectors, sliderOptions) {
  var parent = selectors.parent,
      slider = selectors.slider,
      input01 = selectors.input01,
      input02 = selectors.input02;

  $(slider, parent).slider(sliderOptions);

  $(slider, parent).slider({
    slide: function(event, ui) {
      $(input01, parent).val(ui.values[0]);
      $(input02, parent).val(ui.values[1]);
    }
  });

  $(input01, parent).val($(slider, parent).slider("values", 0));
  $(input02, parent).val($(slider, parent).slider("values", 1));

  $(input01, parent).keyup(function(){
    $(slider, parent).slider("values", 0, $(this).val());
  });
  $(input02, parent).keyup(function(){
    $(slider, parent).slider("values", 1, $(this).val());
  });
}