let ala = new Audio('ala.mp3');
ala.loop = true;

function play_se(){
	ala.play();
	navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
}

function goFullScreen() {
	let elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}

$(function(){
	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');

	$('#close').click(function(){
		$('#alert').modal('close');
		goFullScreen();  // ユーザー操作中！
		play_se();        // 音も再生！
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
