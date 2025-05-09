let ala = new Audio('ala.mp3');
ala.loop = true;

function play_se(){
	ala.play().catch(() => {
		console.warn("音声の自動再生はブロックされました");
	});
	navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
}

function goFullScreen() {
	let elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen().catch(() => {
			console.warn("フルスクリーンは自動では拒否されました");
		});
	}
}

$(function(){
	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');

	// ★ ここを即時処理に変更
	goFullScreen();  // 自動フルスクリーン
	play_se();        // 自動再生トライ

	// ↓必要ならボタンも残せる
	$('#close').click(function(){
		$('#alert').modal('close');
		goFullScreen();
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
