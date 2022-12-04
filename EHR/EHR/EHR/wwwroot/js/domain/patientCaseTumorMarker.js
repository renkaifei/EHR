function PatientCaseTumorMarker() {
    this.id = 0;
    this.value = 0;
    this.testDate = null;
    this.patientCaseId = 0;
    this.tumorMarkerId = 0;
    this.tumorMarker = new TumorMarker();
}

PatientCaseTumorMarker.prototype.getTumorMarkerName = function () {
    return this.tumorMarker.name;
}

PatientCaseTumorMarker.prototype.getNormalRange = function () {
    return this.tumorMarker.minValue + "-" + this.tumorMarker.maxValue;
}

PatientCaseTumorMarker.prototype.getUnit = function () {
    return this.tumorMarker.unit;
}

PatientCaseTumorMarker.prototype.getMaxValue = function () {
    return this.tumorMarker.maxValue;
}

