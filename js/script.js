$(function() {
$( "#slider-range-max" ).slider({
      range: "max",
      min: 10,
      max: 500,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
})