function RadiologyReportPanel() {
    Panel.call(this);
}

RadiologyReportPanel.prototype = Object.create(Panel.prototype);
RadiologyReportPanel.prototype.constructor = Panel;

RadiologyReportPanel.prototype.build = function (radiology) {
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    $("<div></div>").text(radiology.report).appendTo($panelBody);
}