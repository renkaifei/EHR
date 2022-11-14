function CTImagePanel() {
    Panel.call(this);
}

CTImagePanel.prototype = Object.create(Panel.prototype);
CTImagePanel.prototype.constructor = Panel;

CTImagePanel.prototype.build = function (ctImage) {
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    $("<img />").attr("src", ctImage.imagePath).css({
        height: "99%",
        width: "99%",
        "object-fit": "contain"
    }).appendTo($panelBody);
}

