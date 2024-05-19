function play_se(){
	var ala = new Audio('ala.mp3');
	ala.play();
	navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
}

$(function(){


	
	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');
	$('#close').click(function(){
		$('#alert').modal('close');
		play_se();
	});
	
	var device = navigator.userAgent.match(/Android|iPhone|iPad|Windows|Mac/);
	
	if (device == null){
		device = '端末';
	}
	$('#device').text(device);
	
	var time = 200;
	setInterval(function(){
		time--;
		$('#timer').text(time);
	}, 1000);
	
});