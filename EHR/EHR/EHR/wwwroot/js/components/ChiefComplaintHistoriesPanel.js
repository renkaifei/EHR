function ChiefComplaintHistoriesPanel() {
    Panel.call(this);
}

ChiefComplaintHistoriesPanel.prototype = Object.create(Panel.prototype);
ChiefComplaintHistoriesPanel.prototype.constructor = Panel;

ChiefComplaintHistoriesPanel.prototype.build = function (chiefComplaintHistories) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    $("<textarea id='chiefComplaintHistoriesEditor'></textarea>").appendTo($panelBody);
    var CKEditor = CKEDITOR.replace('chiefComplaintHistoriesEditor');
    CKEditor.on('instanceReady', function () {
        CKEditor.setData(chiefComplaintHistories.content);
    });
    var $btn = $("<button></button").text("save").css({ "float": "right", "margin": "2px" }).appendTo($panelBody).linkbutton();
    $btn.on("click", function () {
        var data = CKEDITOR.instances.chiefComplaintHistoriesEditor.getData();
        chiefComplaintHistories.content = data;
        var chiefComplaintHistoriesService = new ChiefComplaintHistoriesService();
        if (chiefComplaintHistories.id == 0) {
            chiefComplaintHistoriesService.add(chiefComplaintHistories).then(function (data) {
                chiefComplaintHistories.id = data.id;
                chiefComplaintHistories.content = data.content;
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        } else {
            chiefComplaintHistoriesService.update(chiefComplaintHistories).then(function (data) {
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        }
    });
}

