
  
  jQuery(document).ready(function($) { 	
  		$('#progress-stripe').addClass("loaded");  

  		var bodyHeight =  $('body').height();
	  		//console log for debug
	  		console.log(bodyHeight);
		$( window ).on('scroll', function(){ 
			var currentScreenHeight= $(window).height();
			correctBodyHeight = bodyHeight-currentScreenHeight;
			var position = (window.scrollY/correctBodyHeight)*100; 

			//console log for debug
			console.log('correctBodyHeight = ' +correctBodyHeight);
			console.log('position = ' + position+'%');

			$('.bottom-fix').css('width',position+'%');

		});
		

		
  });
  