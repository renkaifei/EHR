function Card() {
    this.caption = "";
    this.image = "";
}

Card.prototype.build = function () {
    var $container = $("<div></div>");
    $container.addClass("card");
    $("<img />").prop("src", this.image).addClass("card-image").appendTo($container);
    $("<span></span>").text(this.caption).appendTo($container);
    return $container;
}