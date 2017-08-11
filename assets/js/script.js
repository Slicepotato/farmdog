$(document).ready(function(){
	var today = moment().format('dddd, MMMM Do YYYY');
	$('#date').html(today);

	/* Use this for Later
	//
	$.ajax({
			type:'GET',
			url:'get_squares.php',
			dataType: "json",
			success:function(data){
					// console.log(data);
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

	*/

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
