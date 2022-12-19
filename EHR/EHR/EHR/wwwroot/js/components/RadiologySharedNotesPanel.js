function RadiologySharedNotesPanel() {
    Panel.call(this);
}

RadiologySharedNotesPanel.prototype = Object.create(Panel.prototype);
RadiologySharedNotesPanel.prototype.constructor = Panel;

RadiologySharedNotesPanel.prototype.build = function (radiologySharedNotes) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    $("<textarea id='sharedNotesEditor'></textarea>").appendTo($panelBody);
    var CKEditor = CKEDITOR.replace('sharedNotesEditor');
    CKEditor.on('instanceReady', function () {
        CKEditor.setData(radiologySharedNotes.sharedNotes);
    });
    var $btn = $("<button></button").text("save").css({ "float": "right", "margin": "2px" }).appendTo($panelBody).linkbutton();
    $btn.on("click", function () {
        var data = CKEDITOR.instances.sharedNotesEditor.getData();
        radiologySharedNotes.sharedNotes = data;
        var radiologySharedNotesService = new RadiologySharedNotesService();
        if (radiologySharedNotes.isExistsInDb()) {
            radiologySharedNotesService.update(radiologySharedNotes).then(function (data) {
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        } else {
            radiologySharedNotesService.add(radiologySharedNotes).then(function (data) {
                radiologySharedNotes.id = data.id;
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        }
    });
}