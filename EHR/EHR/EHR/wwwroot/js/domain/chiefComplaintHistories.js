function ChiefComplaintHistories() {
    this.id = 0;
    this.content = null;
    this.patientCaseId = 0;
}

ChiefComplaintHistories.prototype.isExistsInDb = function () {
    return this.id != 0;
}




