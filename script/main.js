$(".scroll-spy").scrollSpy({
  anchors: ["a[href*=\\#]"],
});

var burger = $("#burger");
var body = $("#body");

burger.on("click", function (e) {
  body.css("overflow-y", "hidden");
});
