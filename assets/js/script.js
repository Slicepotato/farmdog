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

	console.log('boo');

	$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1e3QmEU6BrlpkUmbaviNfwGx0vpfOL740Nwj8gDboTBQ/od6/public/values?alt=json", function(data) {
  //first row "title" column
  	console.log(data.feed.entry[0]['gsx$title']['$t']);
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
