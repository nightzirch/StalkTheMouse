var mouseX = 0, mouseY = 0;
var speed = 2;
var size = {x:69,y:74};

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
			"background-image": 'url("img/' + (i+1) + '.png")',
			"margin": (size.x / -2) + " 0 0 " + (size.y / -2)
		}
	)
}



var loop = setInterval(function(){
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