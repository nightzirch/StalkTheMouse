var mouseX = 0, mouseY = 0;
var speed = 2;
var size = {x:224,y:242};
var timer;

$(document).mousemove(function(e){
	mouseX = e.pageX;
	mouseY = e.pageY; 
});

// cache the selector2
var stalkers = new Array();

for(var i = 0; i < $(".stalker").length; i++) {
	var stalker = {
		el: $(".stalker")[i],
		x: 0,
		y: 0
	}
	stalkers.push(stalker);
	$(stalker.el).css(
		{
			"z-index": 100-i,
			"width": size.x,
			"height": size.y,
			"background-image": 'url("img/whale-' + (i+1) + '.png")',
			"margin-left": (size.y / -2),
			"margin-top": (size.x / -2)
		}
	)
}

function loop() {
	setInterval(function(){
		for(i in stalkers) {
			if(i == 0) {
				stalkers[i].x += (mouseX - stalkers[i].x) / speed;
				stalkers[i].y += (mouseY - stalkers[i].y) / speed;
			}
			else {
				stalkers[i].x += (stalkers[i-1].x - stalkers[i].x) / speed;
				stalkers[i].y += (stalkers[i-1].y - stalkers[i].y) / speed;
			}
			
			$(stalkers[i].el).css({left:stalkers[i].x, top:stalkers[i].y});
		}
	}, 30);
}

/*function loop() {
	setInterval(function() {
		var i = 0;
		var interval = setInterval(function() {
			stalkers[i].x += (mouseX - stalkers[i].x) / speed;
			stalkers[i].y += (mouseY - stalkers[i].y) / speed;
			
			$(stalkers[i].el).css({left:stalkers[i].x, top:stalkers[i].y});
			
			i++;
			
			if(i >= stalkers.length) {
				clearInterval(interval);
				i = 0;
			}
		}, 30);
	}, 30);
}*/

loop();