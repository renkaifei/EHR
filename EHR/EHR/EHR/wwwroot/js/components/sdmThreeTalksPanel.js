function SDMThreeTalksPanel() {
    Panel.call(this);
}

SDMThreeTalksPanel.prototype = Object.create(Panel.prototype);
SDMThreeTalksPanel.prototype.constructor = Panel;

SDMThreeTalksPanel.prototype.build = function () {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    $("<textarea id='sharedNotesEditor'></textarea>").appendTo($panelBody);
    var CKEditor = CKEDITOR.replace('sharedNotesEditor');
    CKEditor.on('instanceReady', function () {
        CKEditor.setData(pathologySharedNotes.sharedNotes);
    });
    var $btn = $("<button></button").text("save").css({ "float": "right", "margin": "2px" }).appendTo($panelBody).linkbutton();
    $btn.on("click", function () {
        var data = CKEDITOR.instances.sharedNotesEditor.getData();
        pathologySharedNotes.sharedNotes = data;
        var pathologySharedNotesService = new PathologySharedNotesService();
        if (pathologySharedNotes.isExistsInDb()) {
            pathologySharedNotesService.update(pathologySharedNotes).then(function (data) {
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        } else {
            pathologySharedNotesService.add(pathologySharedNotes).then(function (data) {
                pathologySharedNotes.id = data.id;
                pathologySharedNotes.sharedNotes = data.sharedNotes;
                $.messager.alert('info', "save successfully", "info");
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        }
    });
}