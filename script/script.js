$( document ).ready(function() {
    console.log( "ready jQ!" );

//ZOOM

    var $zoom = $('#zoom');
    var $popupImg = $('.popupImg');
        
  
//VIS


	$zoom.on('click', show);
	$popupImg.on("click", hide);


   	function show() {
     	console.log("click to show");     
      	$popupImg.css("visibility","visible"); 
 	}

    function hide() {
        $popupImg.css("visibility","hidden");
        
   	}





//ANIMATION
  //Find 1. elem to click.
	var $my5Img = $('.my5Images');
	var $my5imgFirst = $my5Img.find('.col-2').eq(0);

	$my5imgFirst.on('click', startAnim);



   //After click start anim
	function startAnim() {

	    //console.log("click");	

	    for (var i=0;i<5;i++) {
	    	var $CurrElem = $my5Img.find('.col-2').eq(i).find('.second'); //Anim opacity 0-1-0
	    	var $CurrElemFirst = $my5Img.find('.col-2').eq(i).find('.first'); //Anim opacity 1-0-1
	    	
	    	delayAddClass($CurrElem, $CurrElemFirst, 3000*i)

	    }

	    function delayAddClass($elem, $elemFirst, timeout) {
	    	setTimeout(function() {
	    		$elem.addClass('animOpacity'), $elemFirst.addClass('animOpacityFirst');
	    	}, timeout)

	    }
		$my5imgFirst.off('click', startAnim);
		$my5imgFirst.on('click', stopAnim);
	}

	function stopAnim() {
		$my5Img.find('.col-2 img').removeClass('animOpacity').removeClass('animOpacityFirst');

		$my5imgFirst.off('click', stopAnim);
		$my5imgFirst.on('click', startAnim);
	}


//Play audio after click #zoom

$('#zoom').click(function() {
	 $("audio")[0].play();

});


});



