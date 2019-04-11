var loadingnum = document.getElementById("loadingnum");
var num = 0;

var music_div = document.getElementById("music_div");
var music = document.getElementById("music");
var music_c = true;


load();


function load() {
	//android  ios 内部原因 为了节省流量，规定不自动播放音频视频
	//--创建页面监听，等待微信端页面加载完毕 触发音频播放
	document.addEventListener('DOMContentLoaded', function() {
		function audioAutoPlay() {
			music.play();
			document.addEventListener("WeixinJSBridgeReady", function() {
				music.play();
			}, false);
		}
		audioAutoPlay();
	});
	//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
	document.addEventListener('touchstart', function() {
		function audioAutoPlay() {
			music.play();
		}
		audioAutoPlay();
	});
	
	//检测音乐加载完成
	music.addEventListener('canplay',function(){
		music.canplay = 1;
	})


	var tiem = setInterval(function() {

		num += 1;
		loadingnum.innerHTML = num + "%";

		if (num >= 100 && music.canplay) {

            console.log(music.canplay);

			loadingnum.innerHTML = "100%";
			pageTop(index);

			music_div.style.display = "block";

			girl();
			clearInterval(tiem);
		}

	}, 50)
}


music_div.onclick = function() {

	if (music_c) {
		music_div.style.backgroundImage = "url(project1_img/audio_stop.png)";
		music_div.style.animationPlayState = "paused";
		music.pause();
		music_c = false;
	} else {
		music_div.style.backgroundImage = "url(project1_img/audio_play.png)";
		music_div.style.animationPlayState = "running";
		music.play();
		music_c = true;
	}

}


var p2_girl = document.getElementById("p2_girl");

function girl() {

	var ti = setTimeout(function() {

		p2_girl.src = "project1_img/p2_girl.png";
		p2_girl.style.marginLeft = "-18%";

	}, 3000)


}

var p2_btn = document.getElementById("p2_btn");

p2_btn.onclick = function() {

	pageTop(index);

}












/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//page04
var _p4_btn = document.getElementById('p4_btn');
var _position = document.getElementsByClassName('position');
var _zb = document.getElementsByClassName('zb');
var _text = document.getElementsByClassName('text');
var CitySelected;


for (var i = 0; i < _position.length; i++) {
	_position[i].aa = i;
	_position[i].clicked = 0;

	_position[i].onclick = function() {
		for (var j = 0; j < _position.length; j++) {
			_position[j].clicked = 0;
			_position[j].style.textShadow = 'none';
			_zb[j].src = 'project1_img/zuobiao1.png';
			_text[j].style.opacity = '0';
		}
		CitySelected = this.aa;
		this.clicked = 1;
		this.style.textShadow = '2px 2px 20px gold';
		_zb[this.aa].src = 'project1_img/zuobiao2.png';
		_text[this.aa].style.opacity = '1';

	}
}

_p4_btn.onclick = function() {
	console.log(CitySelected);
	switch (CitySelected) {
		case 0:

			pageTop(3);
			index = 4;
			break;
		case 1:
			_pages[3].classList.add('out_top');
			_pages[3].classList.remove('in_top', 'in_down', 'out_down');

			_pages[5].classList.add('in_top');
			_pages[5].classList.remove('out_top', 'in_down', 'out_down', 'hide');
			index = 5;
			break;
		case 2:
			_pages[3].classList.add('out_top');
			_pages[3].classList.remove('in_top', 'in_down', 'out_down');

			_pages[6].classList.add('in_top');
			_pages[6].classList.remove('out_top', 'in_down', 'out_down', 'hide');
			index = 6;
			break;
		default:
			break;
	}
}

var _return = document.getElementsByClassName('return');

for (var i = 0; i < _return.length; i++) {
	_return[i].aa = i;
	_return[i].onclick = function() {


		_pages[this.aa + 4].classList.add('hide');
		_pages[this.aa + 4].classList.remove('in_top', 'in_down', 'out_top');

		_pages[3].classList.add('in_down');
		_pages[3].classList.remove('out_top', 'in_top', 'out_down', 'hide');
		index = 3;
	}
}
