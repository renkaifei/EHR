function FlowsheetGridPanel() {
    Panel.call(this);
    this.$grid = null;
}

FlowsheetGridPanel.prototype = Object.create(Panel.prototype);
FlowsheetGridPanel.prototype.constructor = Panel;

FlowsheetGridPanel.prototype.build = function (pathology) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    var $table = $("<table></table>").appendTo($panelBody);
    this.$grid = pathology.buildStaticsGrid($table);
}

FlowsheetGridPanel.prototype.resizeGrid = function () {
    this.$grid.datagrid("resize");
}