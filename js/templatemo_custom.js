/* Credit: http://www.templatemo.com */

$(document).ready(function(){

	//$('#service_tabs li:first-child').tab('show');

	$('#services .services_buttons li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
});

function change_panels(new_index){
	var arrow_positions = [ 20, 110, 205 ];
	var new_top = arrow_positions[new_index] + 'px';

	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('#services_tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.services_buttons li').removeClass('active');
	$('.services_buttons li:nth-child('+(new_index+1)+')').addClass('active');
}

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(41.896338,-87.6859781)
    };
    map = new google.maps.Map(document.getElementById('google_map'),  mapOptions);
    var image = 'images/left_arrow.png';
    var myLatLng = new google.maps.LatLng(41.896338,-87.6859781);
  	var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  }); 
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);