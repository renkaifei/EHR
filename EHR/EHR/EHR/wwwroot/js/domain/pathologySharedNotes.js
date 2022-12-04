function PathologySharedNotes() {
    this.id = 0;
    this.sharedNotes = "";
    this.patientCaseId = 0;
}

PathologySharedNotes.prototype.isExistsInDb = function () {
    return this.id != 0;
}