// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
	initMap(); 
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$('.judge-img').bind("taphold", tapholdHandler);

		function tapholdHandler(event){
			var targetIdPrefix = event.target.id;
			console.log('prefix: ' + targetIdPrefix);
			$('#' + targetIdPrefix + '-bio').show();
		}
	})
}

// init RSVP form submit listener
function initRSVPForm() {
	// add your code here
	$('#rsvpForm').submit(function(e) {
		e.preventDefault();
		console.log('submitting...');
		var email = $('#rsvpEmail').val();
		$.post('addRSVP', {rsvpEmail: email}, postCallback);
	})

	function postCallback(res){
		alert("RSVP form successfully submitted!");
		$('#rsvpEmail').val('');
	}
}