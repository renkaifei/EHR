function ReportPanel() {
    Panel.call(this);
}

ReportPanel.prototype = Object.create(Panel.prototype);
ReportPanel.prototype.constructor = Panel;

ReportPanel.prototype.build = function (pathology) {
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    $("<div></div>").text(pathology.report).appendTo($panelBody);
}