$(function() {
	var foret = document.getElementById("foret");
	var crepuscule = document.getElementById("crepuscule");
	var mer = document.getElementById("mer");
	var pluie = document.getElementById("pluie");
	var playing = "";
	var muted = false;
	
	
	$('#mute').on('click', function(e) {
      $('.icon').toggleClass("off"); 
      e.preventDefault();
    });
	
	$("#mute").click(function() {
		if(!muted) {
			foret.volume = 0;
			crepuscule.volume = 0;
			mer.volume = 0;
			pluie.volume = 0;
			muted = true;
		} else {
			foret.volume = 1;
			crepuscule.volume = 1;
			mer.volume = 1;
			pluie.volume = 1;
			muted = false;
		}
	});
	
	$('.sound').click(function() {
        switch($(this).find("audio").prop("id")) {
			case "foret":
				if(playing == "foret") {
					fade(foret);
					return;
				}
				$('#harmonie').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/foret.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "foret";
				fade(foret);
				break;
			case "crepuscule":
				if(playing == "crepuscule") {
					fade(crepuscule);
					return;
				}
				$('#harmonie').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/crepuscule.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "crepuscule";
				fade(crepuscule);
				break;
			case "mer":
				if(playing == "mer") {
					fade(mer);
					return;
				}
				$('#harmonie').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/mer.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "mer";
				fade(mer);
				break;
			case "pluie":
				if(playing == "pluie") {
					fade(pluie);
					return;
				}
				$('#harmonie').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/pluie.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "pluie";
				fade(pluie);
				break;
		}
		console.log(playing);
    });
	
	$(".sound").first().find("a").click();
	
	function fadeOut(element) {
		$(element).animate({
			"volume": "0"
		}, 1000, function() {
			element.pause();
		});
	}
	
	function fade(element) {
		if(!foret.paused) fadeOut(foret);
		if(!pluie.paused) fadeOut(pluie);
		if(!crepuscule.paused) fadeOut(crepuscule);
		if(!mer.paused) fadeOut(mer);
		
		if(element.paused) {
			element.volume = 0;
			element.play();
			$(element).animate({
				"volume": "1"
			}, 1000);
        } else {
	        fadeOut(element);
        }
	}
	
	$(".sound").click(function(e) {
        if( $(this).hasClass("active") ) {
            $(this).removeClass("active").addClass("avail");
        } else {
			// Si d'autres menus sont ouverts, supprimez la classe ouverte et ajoutez la classe fermée
            $(this).siblings().removeClass("active").addClass("avail"); 
            $(this).removeClass("avail").addClass("active");
        }
	});
	
	$("body").queryLoader2({
		minimumTime: 2000,
		barColor:'#fff',
		barHeight: 0,
		percentage: true
	});
	
	$('#harmonie').delay(1500).fadeIn(2000);
	$('#intro').delay(2000).fadeIn(2000).delay(3000).fadeOut(2000);
	$('#nature').delay(8000).fadeIn(2000);
	
    $.get();
});