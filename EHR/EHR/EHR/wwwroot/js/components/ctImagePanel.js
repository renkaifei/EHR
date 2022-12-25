function CTImagePanel() {
    Panel.call(this);
}

CTImagePanel.prototype = Object.create(Panel.prototype);
CTImagePanel.prototype.constructor = Panel;

CTImagePanel.prototype.build = function (ctImage) {
    var self = this;
    var $img = $("<img />").attr("src", ctImage.imagePath).css({
        height: "99%",
        width: "99%",
        "object-fit": "contain"
    });
    this.tools = [{
        iconCls: "icon-save",
        handler: function () {
            downloadRemoteImage("ct.jpg", ctImage.imagePath);
        }
    }, {
        iconCls: "icon-pdf",
        handler: function () {
            $.messager.alert('info', "Generating pdf, please wait patiently", "info");
            downloadRemoteImageToPdf($img[0], "ct.pdf");
        }
    }];
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    $img.appendTo($panelBody);
}

