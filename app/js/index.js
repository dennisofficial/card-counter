var selectedCards = [];
var opponentCards = [];
var graveyardCards = [];

var cards = 52;

//-------------------------//
//    ON CLICK EVENTS      //
//-------------------------//

// Card Buttons on-click
$('.card').each(function() {
	$(this).on('click', function() {
		var id = $(this).attr('id');

		// Check if in graveyard
		if (graveyardCards.includes(id)) {
			return;
		}

		// Check if selected or not
		if (selectedCards.includes(id)) {
			delete selectedCards[selectedCards.indexOf(id)];
			selectedCards = selectedCards.filter(Number);
			$(this).css('background-color', '');
		}
		else {
			selectedCards.push(id);
			selectedCards = selectedCards.filter(Number);
			$(this).css('background-color', '#3e3e3e');
		}
		highlight();
	});
});

// Opponent Button
$('#btn-op').on('click', function() {
	for (var i = 0; i < selectedCards.length; i++) {
		opponentCards.push(selectedCards[i]);
		$('#' + selectedCards[i]).css('background-color', '#3c24ff');
	}
	selectedCards = [];
	highlight();
});

// Graveyard Button
$('#btn-gy').on('click', function() {
	for (var i = 0; i < selectedCards.length; i++) {
		graveyardCards.push(selectedCards[i]);
		$('#' + selectedCards[i]).css('opacity', '0');
	}
	selectedCards = [];
	highlight();
});

// Reset Button
$('#btn-rs').on('click', function() {
	reset();
});

// 24 Cards Button
$('#btn-24').on('click', function() {
	limitCards(24);
	cards = 24;
});

// 36 Cards Button
$('#btn-36').on('click', function() {
	limitCards(36);
	cards = 36;
});

// 52 Cards Button
$('#btn-52').on('click', function() {
	limitCards(52);
	cards = 52;

});

//-------------------------//
//        FUNCTIONS        //
//-------------------------//

function limitCards(num) {
	$('.card').each(function() {
		if (parseInt($(this).attr('id')) <= num) {
			$(this).show();
		}
		else {
			$(this).hide();
		}
	});
	reset();
}

function reset() {
	selectedCards = [];
	graveyardCards = [];
	opponentCards = [];
	$('.card').each(function() {
		var id = $(this).attr('id');
		$(this).css('background-color', '');
		$(this).css('opacity', '');
	});
}

function highlight() {
	// Reset Opacity
	$('.card').each(function() {
		if (graveyardCards.includes($(this).attr('id'))) {
			return;
		}
		if (selectedCards.length == 0) {
			$(this).css('opacity', '');
		}
		else {
			$(this).css('opacity', '0.25');
		}
	});
	// Iterate through selectedCards
	for (var i = 0; i < selectedCards.length; i++) {
		var idSelect = selectedCards[i];
		var row = parseInt((idSelect-1)/4)+1;
		var rowBegin = ((row - 1) * 4) + 1;
		var rowEnd = row * 4;
		for (var j = rowBegin; j <= rowEnd; j++) {
			if (!graveyardCards.includes(j+'')) {
				$('#' + j).css('opacity', '1');
			}
		}
		for (var j = idSelect; j > 0; j -= 4) {
			if (!graveyardCards.includes(j+'')) {
				$('#' + j).css('opacity', '1');
			}
		}
	}
}
