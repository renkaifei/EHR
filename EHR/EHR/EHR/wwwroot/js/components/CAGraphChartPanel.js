function CAGraphChartPanel() {
    Panel.call(this);
    this.chartCA = null;
}

CAGraphChartPanel.prototype = Object.create(Panel.prototype);
CAGraphChartPanel.prototype.constructor = Panel;

CAGraphChartPanel.prototype.build = function (pathology) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    var $canvas = $("<canvas></canvas>").appendTo($panelBody);
    this.chartCA = pathology.buildChartCA($canvas);
}

