function CEAGraphChartPanel() {
    Panel.call(this);
    this.chartCEA = null;
}

CEAGraphChartPanel.prototype = Object.create(Panel.prototype);
CEAGraphChartPanel.prototype.constructor = Panel;

CEAGraphChartPanel.prototype.build = function (pathology) {
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    var $canvas = $("<canvas></canvas>").appendTo($panelBody);
    this.chartCEA = pathology.buildChartCEA($canvas);
}