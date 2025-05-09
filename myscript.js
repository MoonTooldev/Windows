function play_se(){
	var ala = new Audio('ala.mp3');
	ala.loop = true;
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

function goFullScreen() {
	let elem = document.documentElement; // ページ全体（<html>要素）

	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { // Safari用
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { // IE用
		elem.msRequestFullscreen();
	}
}
