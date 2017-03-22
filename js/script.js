

$(document).ready(function(){

	$('#offcanvasleft').click(function() {
	  $('.row-offcanvas-left').toggleClass('active');
	});

	// $('[data-toggle=offcanvasleft]').click(function() {
	//   $('.row-offcanvas-left').toggleClass('active');
	// });

	$('#left__side-bar_introduction').on('click', function(){
		$('#introduction').fadeIn();
		
		$('#definition').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$('#left__side-bar_definition').on('click', function(){
		$('#definition').fadeIn();
		$('#introduction').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$('#left__side-bar_characteristics').on('click', function(){
		$('#characteristics').fadeIn();
		$('#introduction').css('display', 'none');
		$('#definition').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$('#left__side-bar_architecture').on('click', function(){
		$('#architecture').fadeIn();
		$('#introduction').css('display', 'none');
		$('#definition').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$('#left__side-bar_technologies').on('click', function(){
		$('#technologies').fadeIn();
		$('#introduction').css('display', 'none');
		$('#definition').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$('#left__side-bar_applications').on('click', function(){
		$('#applications').fadeIn();
		$('#introduction').css('display', 'none');
		$('#definition').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#research_activities').css('display', 'none');
		$('#left__side-bar_sub').fadeIn();
	});

	$('#left__side-bar_research_activities').on('click', function(){
		$('#research_activities').fadeIn();
		$('#introduction').css('display', 'none');
		$('#definition').css('display', 'none');
		$('#characteristics').css('display', 'none');
		$('#architecture').css('display', 'none');
		$('#technologies').css('display', 'none');
		$('#applications').css('display', 'none');
		$('#left__side-bar_sub').css('display', 'none');
	});

	$(window).scroll(function() {
		var scrollHeight = $(document).height();
	    if($(window).scrollTop() > scrollHeight) {
	        $('.back_top').css('display', 'none');
	    } else {
	         $('.back_top').css('display', 'block');
	    }
	});
	$('#scroll_top').on('click', function(){
		 $("html, body").animate({ scrollTop: 0 }, "slow");
		  $(this).css('display', 'none');
	});

});


