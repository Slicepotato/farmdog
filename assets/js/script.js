$(document).ready(function(){
	var today = moment().format('dddd, MMMM Do YYYY');
	$('#date').html(today);

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
