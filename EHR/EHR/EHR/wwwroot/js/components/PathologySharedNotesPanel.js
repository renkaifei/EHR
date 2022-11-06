function PathologySharedNotesPanel() {
    Panel.call(this);
}

PathologySharedNotesPanel.prototype = Object.create(Panel.prototype);
PathologySharedNotesPanel.prototype.constructor = Panel;

PathologySharedNotesPanel.prototype.build = function (pathology) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    $("<textarea id='sharedNotesEditor'></textarea>").appendTo($panelBody);
    var CKEditor = CKEDITOR.replace('sharedNotesEditor');
    CKEditor.on('instanceReady', function () {
        CKEditor.setData(pathology.clinicalNotes);
    });
    var $btn = $("<button></button").text("save").css({"float":"right","margin":"2px"}).appendTo($panelBody).linkbutton();
    $btn.on("click", function () {
        var data = CKEDITOR.instances.sharedNotesEditor.getData();
        pathology.clinicalNotes = data;
        var pathologyService = new PathologyService();
        pathologyService.updateClinicalNotes(pathology).then(function (data) {
            $.messager.alert('info', "save successfully", "info");
        }).catch(function (message) {
            $.messager.alert('error', message, "error");
        });
    });
}