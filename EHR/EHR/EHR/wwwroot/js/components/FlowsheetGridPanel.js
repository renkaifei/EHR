function FlowsheetGridPanel() {
    Panel.call(this);
    this.$grid = null;
}

FlowsheetGridPanel.prototype = Object.create(Panel.prototype);
FlowsheetGridPanel.prototype.constructor = Panel;

FlowsheetGridPanel.prototype.build = function (arrData) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    var $table = $("<table></table>").appendTo($panelBody);
    this.$grid = this.buildStaticsGrid($table, arrData);
}

FlowsheetGridPanel.prototype.buildStaticsGrid = function ($table,arrData) {
    var result = {};

    var count = arrData.length;
    for (var i = 0; i < count; i++) {
        var tumorMarkerName = arrData[i].getTumorMarkerName();
        if (!result.hasOwnProperty(tumorMarkerName)) {
            result[tumorMarkerName] = {
                name: tumorMarkerName,
                value: 0,
                normalRange: arrData[i].getNormalRange(),
                unit: arrData[i].getUnit(),
                count: 0,
                average: 0
            };
        }
        result[tumorMarkerName].value = result[tumorMarkerName].value + arrData[i].value;
        result[tumorMarkerName].count = result[tumorMarkerName].count + 1;
        if (result[tumorMarkerName].count > 0) result[tumorMarkerName].average = (result[tumorMarkerName].value / result[tumorMarkerName].count).toFixed(1);
    }

    var arrResult = [];
    for (key in result) {
        arrResult.push(result[key]);
    }

    return $table.datagrid({
        columns: [[
            { field: "name", title: "Test", align: "left" },
            { field: "average", title: "Result", align: "left" },
            { field: "normalRange", title: "Normal Range", align: "left" },
            { field: "unit", title: "Unit", align: "left" }
        ]],
        data: arrResult
    });
}

FlowsheetGridPanel.prototype.resizeGrid = function () {
    this.$grid.datagrid("resize");
}