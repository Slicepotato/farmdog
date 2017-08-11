$(document).ready(function(){
	var today = moment().format('dddd, MMMM Do YYYY');
	$('#date').html(today);

	function fetchCard() {
		$('#panel').append('<span id="loading"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></span>');

		setTimeout(function(){
			$.ajax({
					type:'GET',
					url:'get_squares.php',
					dataType: "json",
					success:function(data){
							// console.log(data);
							$('#panel').empty();
							$.each( data, function(index, panel) {
								$('#panel').append('<li id="' + panel.id + '"><span>' + panel.block + '</span></li>');
							});

							var freespace = $('ul#panel').find('li:eq(11)');
							$('<li id="free"></li>').insertAfter(freespace);

							$('li').click(function(){
								$(this).toggleClass('select');
					    });
					}
			});
		}, 2000);
	}

	// Read / Format the JSON array from the PHP server output
	fetchCard();

	/* Google Sheets API
	var sheetId = '1e3QmEU6BrlpkUmbaviNfwGx0vpfOL740Nwj8gDboTBQ';
	$.getJSON("https://spreadsheets.google.com/feeds/list/"+ sheetId +"/1/public/values?alt=json", function(data) {
  //first row "title" column
		$.each(data.feed.entry, function(key, cell) {
					console.log(cell.title.$t);
					$('#panel').append('<li id="' + cell.title.$t + '"><span>' + cell.title.$t + '</span></li>');
		});

		var freespace = $('ul#panel').find('li:eq(11)');
		$('<li id="free"></li>').insertAfter(freespace);

		$('li').click(function(){
			$(this).toggleClass('select');
		});
	});
	*/

	$('#new-board').on('click', function() {
		$('#panel').empty();
		fetchCard();
	});

	dialog = $( "#request" ).dialog({
		modal: true,
		autoOpen: false,
		height: 620,
		width: 820
    });

	$( "#request-block" ).button().on( "click", function() {
		dialog.dialog( "open" );
    });
});
