function PathologyTumorMarker() {
    this.id = 0;
    this.value = 0;
    this.testDate = null;
    this.pathologyId = 0;
    this.tumorMarkerId = 0;
    this.tumorMarker = new TumorMarker();
}

PathologyTumorMarker.prototype.getTumorMarkerName = function () {
    return this.tumorMarker.name;
}

PathologyTumorMarker.prototype.getNormalRange = function () {
    return this.tumorMarker.minValue + "-" + this.tumorMarker.maxValue;
}

PathologyTumorMarker.prototype.getUnit = function () {
    return this.tumorMarker.unit;
}

PathologyTumorMarker.prototype.getMaxValue = function () {
    return this.tumorMarker.maxValue;
}

