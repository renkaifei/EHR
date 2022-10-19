function PathologyService() {

}

PathologyService.prototype.getOneById = function (id,successCallback,errorCallback) {
    $.ajax({
        url: "/api/pathology/getonebyid",
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: { id: id },
        success:function (resp) {
            if (resp.status != 100000) {
                errorCallback(resp.message);
            } else {
                var pathology = new Pathology();
                pathology.id = resp.data.id;
                if (resp.pathologyTumorMarkers != null) {
                    var count = resp.pathologyTumorMarkers.length;
                    for (var i = 0; i < count; i++) {
                        var pathologyTumorMarker = new PathologyTumorMarker();
                        pathologyTumorMarker.id = resp.data.pathologyTumorMarkers[i].id;
                        pathologyTumorMarker.value = resp.data.pathologyTumorMarkers[i].value;
                        pathologyTumorMarker.testDate = resp.data.pathologyTumorMarkers[i].testDate;
                        pathologyTumorMarker.tumorMarkerId = resp.data.pathologyTumorMarkers[i].tumorMarkerId;
                        pathologyTumorMarker.tumorMarker.id = resp.data.pathologyTumorMarkers[i].tumorMarker.id;
                        pathologyTumorMarker.tumorMarker.name = resp.data.pathologyTumorMarkers[i].tumorMarker.name;
                        pathologyTumorMarker.tumorMarker.fullName = resp.data.pathologyTumorMarkers[i].tumorMarker.fullName;
                        pathologyTumorMarker.tumorMarker.minValue = resp.data.pathologyTumorMarkers[i].tumorMarker.minValue;
                        pathologyTumorMarker.tumorMarker.maxValue = resp.data.pathologyTumorMarkers[i].tumorMarker.maxValue;
                        pathologyTumorMarker.tumorMarker.unit = resp.data.pathologyTumorMarkers[i].tumorMarker.unit;
                        pathology.pathologyTumorMarkers.push(pathologyTumorMarker);
                    }
                    successCallback(pathology);
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

PathologyService.prototype.getOneByPatientCaseId = function (patientCaseId,successCallback,errorCallback) {
    $.ajax({
        url: "/api/pathology/getOneByPatientCaseId",
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: { patientCaseId: patientCaseId },
        success: function (resp) {
            if (resp.status != 100000) {
                errorCallback(resp.message);
            } else {
                var pathology = new Pathology();
                pathology.id = resp.data.id;
                pathology.report = resp.data.report;
                pathology.clinicalNotes = resp.data.clinicalNotes;
                pathology.patientCaseId = resp.data.patientCaseId;
                var count = resp.data.pathologyTumorMarkers.length;
                for (var i = 0; i < count; i++) {
                    var pathologyTumorMarker = new PathologyTumorMarker();
                    pathologyTumorMarker.id = resp.data.pathologyTumorMarkers[i].id;
                    pathologyTumorMarker.value = resp.data.pathologyTumorMarkers[i].value;
                    pathologyTumorMarker.testDate = resp.data.pathologyTumorMarkers[i].testDate;
                    pathologyTumorMarker.tumorMarkerId = resp.data.pathologyTumorMarkers[i].tumorMarkerId;
                    pathologyTumorMarker.tumorMarker.id = resp.data.pathologyTumorMarkers[i].tumorMarker.id;
                    pathologyTumorMarker.tumorMarker.name = resp.data.pathologyTumorMarkers[i].tumorMarker.name;
                    pathologyTumorMarker.tumorMarker.fullName = resp.data.pathologyTumorMarkers[i].tumorMarker.fullName;
                    pathologyTumorMarker.tumorMarker.minValue = resp.data.pathologyTumorMarkers[i].tumorMarker.minValue;
                    pathologyTumorMarker.tumorMarker.maxValue = resp.data.pathologyTumorMarkers[i].tumorMarker.maxValue;
                    pathologyTumorMarker.tumorMarker.unit = resp.data.pathologyTumorMarkers[i].tumorMarker.unit;
                    pathology.pathologyTumorMarkers.push(pathologyTumorMarker);
                }
                successCallback(pathology);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}