function CareOptionDataGridPanel() {
    Panel.call(this);
}

CareOptionDataGridPanel.prototype = Object.create(Panel.prototype);
CareOptionDataGridPanel.prototype.constructor = Panel;

CareOptionDataGridPanel.prototype.build = function (careOptions) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    var $table = $("<table></table>").appendTo($panelBody);
    var answerTitle = "";
    if (carOptions[0].optionType == "1") {
        answerTitle = "Long course chemoRT with capecitabine or infusional 5-fluorouracil followed by ";
        answerTitle = answerTitle + "chemotherapy for 12-16 weeks with FOLFOX or XELOX";
    } else if (carOptions[0].optionType == "2") {
        answerTitle = "Short course RT followed by chemotherapy for 12-16 weeks with FOLFOX or XELOX";
    } else if (carOptions[0].optionType == "3") {
        answerTitle = "Chemotherapy for 12-16 weeks with FOLFOX or XELOX followed by long course ";
        answerTitle = answerTitle + " chemoRT with capecitabine or infusional 5-fluorouracil or short course RT ";
    } else if (carOptions[0].optionType == "4") {
        answerTitle = "No treatment";
    }
    $table.datagrid({
        columns: [[
            { field: "question", title: "Question" },
            { field: "answer", title: answerTitle}
        ]],
        data: careOptions
    });
}
