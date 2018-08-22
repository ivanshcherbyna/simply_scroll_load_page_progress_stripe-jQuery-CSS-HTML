"# simply_scroll_load_page_progress_stripe-jQuery-CSS-HTML" 
<html>
<head>
	<title>Styled Stipe</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


</head>
<header class="header">
	<div id="progress-stripe">
	</div>
	<div>
		Stack wideflow
	</div>
</header>
<body>
	<div class="bottom-fix"></div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
	<div class="content">
		<h1> Hello Styled Stripe</h1>
	</div>
</body>
</html>
<style>
  *{
	margin: 0;
	padding: 0;
}
#progress-stripe{
	top: 0;
	width: 0%;
}

#progress-stripe.loaded{
	width: 100%;
	transition: width 3s;
	-webkit-transition: width 3s;
	position: fixed;
    min-width: auto;
    border-top: 3px solid #F48024;
}
.content{
	margin: 25px;
}
.bottom-fix{
	bottom: 0;
	width: 0%;
	transition: width 1s;
	-webkit-transition: width 1s;
	position: fixed;
    min-width: auto;
    border-top: 3px solid #92f442;
    box-shadow: -4px 13px 39px 3px #325615;
}
</style>
<script>
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
  </script>
  
