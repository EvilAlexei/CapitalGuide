$(function(){
  $('.full-chat').tooltip({
    position: { my: "right top+10", at: "right bottom" }
  });

  navHover({
    holder: '#nav',
    marker: '#marker',
    current: '.current'
  });

  /*$("#slider-range-01").slider({
    range: true,
    min: 0,
    max: 5000,
    values: [ 300, 4600 ],
    slide: function( event, ui ) {
      $( "#input-low-01" ).val("$" + ui.values[0]);
      $( "#input-high-01" ).val("$" + ui.values[1]);
    }
  });
  $( "#input-low-01" ).val($("#slider-range-01").slider("values",0));
  $( "#input-high-01" ).val($("#slider-range-01").slider("values",1));*/
});

function navHover(options){
  var marker=$(options.marker),current=$(options.current),selector=options.holder;current.addClass("active"),marker.css({left:current.position().left,width:current.outerWidth(),display:"block"}),$("li",selector).mouseover(function(){var a=$(this),b=a.position().left,c=a.outerWidth()||current.outerWidth(),d=0==b?0:b||current.position().left;$(".active").removeClass("active"),a.addClass("active"),marker.css({left:d,width:c})}),$(selector).mouseleave(function(){$(".active").removeClass("active"),current.addClass("active"),marker.css({left:current.position().left,width:current.outerWidth()})});
}