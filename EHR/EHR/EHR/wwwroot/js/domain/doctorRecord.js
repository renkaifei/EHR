function DoctorRecord() {
    this.id = 0;
    this.doctorId = 0;
    this.patientCaseId = 0;
    this.recordType = "";
    this.content = "";
    this.createTime = new Date("1900-01-01");
    this.updateTime = new Date("1900-01-01");
}

DoctorRecord.prototype.existsInDb = function () {
    return this.id != 0;
}