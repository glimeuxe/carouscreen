window.addEventListener("load", function () {
	setBackground();

	$(".carousel").flickity({
		freeScroll: false,
		draggable: true,
		dragThreshold: 1,
		prevNextButtons: false,
		pageDots: false,
		percentPosition: true,
		cellAlign: "center",
	});

	$(".carousel").on("change.flickity", function (event, index) {
		$(".background")
			.hide()
			.attr("src", "carousel-" + index + ".png")
			.show();
	});
});

window.addEventListener("resize", function () {
	document.location.reload(true);
});

function setBackground() {
	$(".background").attr("src", "carousel-0" + ".png");
}
