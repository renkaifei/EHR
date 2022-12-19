function RadiologySharedNotes() {
    this.id = 0;
    this.sharedNotes = "";
    this.patientCaseId = 0;
}

RadiologySharedNotes.prototype.isExistsInDb = function(){
    return this.id != 0;
}