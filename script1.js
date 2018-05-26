function click1() {
	$('#loginText').text("Logowanie2");
	$.ajax(
		{
			url: "http://localhost/example/php1.php",
			success: function(result){
				alert(result);
			}
		});
	$('#loginText').removeClass("class1");
	$('#loginText').addClass("class2");
	
	$('#menu div').append('<a href="/podstrona5">Nowy przycisk</a>');
}

function a() {
	var a = 5;
	var a = [3,4,5,6]
	return 5;
}

var a = a();