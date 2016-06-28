


$("#tab_film").DataTable({
	"ajax" : "aufgabe13.json",
	"pageLength": 5,
	"lengthMenu" : [5, 10, 15, 20],
	"order" : [[1, "asc"]]
});





$(document).ready(function() {
	$('.tooltip').tooltipster();
});



$("#btn-favorite").tooltipster({
    content: $("#favoriteContent").detach()
});

