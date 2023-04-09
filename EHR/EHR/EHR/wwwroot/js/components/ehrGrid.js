function EHRGrid() {
    this.id = "";
    this.columns = [];
}

EHRGrid.prototype.addColumn = function(column){
    this.columns.push(column);
}

EHRGrid.prototype.getBody = function () {
    return $("#" + this.id).find("tbody");
}

EHRGrid.prototype.addRow = function (data) {
    var $row = $("<tr></tr>");
    this.columns.forEach(function (column, index) {
        $("<td></td>").text(data[column.field]).appendTo($row);
    });
    $row.appendTo(this.getBody());
}

EHRGrid.prototype.clearBody = function () {
    this.getBody().html("");
}