function PathologyService() {

}

PathologyService.prototype.getOneById = function (id) {
    var promiseOne = fetch("/api/pathology/getonebyid", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + id
    }).then(function (resp) {
        return resp.json();
    });

    var promiseTwo = fetch("/api/tumormarker/getall", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {
        return resp.json();
    });

    return Promise.all([promiseOne, promiseTwo]).then(function (values) {
        values.forEach(item => {
            if (item.status != 100000) throw item.message;
        });
        var data1 = values[0].data;
        var data2 = values[1].data;
        var pathology = new Pathology();
        pathology.id = data1.id;
        pathology.clinicalNotes = data1.clinicalNotes;
        pathology.report = data1.report;
        pathology.patientCaseId = data1.patientCaseId;
        var count = data1.pathologyTumorMarkers.length;
        for (var i = 0; i < count; i++) {
            var pathologyTumorMarker = new PathologyTumorMarker();
            pathologyTumorMarker.id = data1.pathologyTumorMarkers[i].id;
            pathologyTumorMarker.value = data1.pathologyTumorMarkers[i].value;
            pathologyTumorMarker.testDate = data1.pathologyTumorMarkers[i].testDate;
            pathologyTumorMarker.pathologyId = pathologyTumorMarker.id;
            pathologyTumorMarker.tumorMarkerId = data1.pathologyTumorMarkers[i].tumorMarkerId;
            var tumorMarkerId = data1.pathologyTumorMarkers[i].tumorMarkerId;
            var tumorMarker = data2.find(item => item.id == tumorMarkerId);
            pathologyTumorMarker.tumorMarker.id = tumorMarker.id;
            pathologyTumorMarker.tumorMarker.name = tumorMarker.name;
            pathologyTumorMarker.tumorMarker.fullName = tumorMarker.fullName;
            pathologyTumorMarker.tumorMarker.minValue = tumorMarker.minValue;
            pathologyTumorMarker.tumorMarker.maxValue = tumorMarker.maxValue;
            pathologyTumorMarker.tumorMarker.unit = tumorMarker.unit;
            pathology.pathologyTumorMarkers.push(pathologyTumorMarker);
        }
        return new Promise(function (resolve,reject) {
            resolve(pathology);
        });
    });
}

PathologyService.prototype.getOneByPatientCaseId = function (patientCaseId, successCallback, errorCallback) {
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

PathologyService.prototype.updateClinicalNotes = function (pathology) {
    return fetch("/api/pathology/updateClinicalNotes", {
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + pathology.id + "&clinicalNotes=" + pathology.clinicalNotes
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status != 100000) {
                reject(data.message);
            } else {
                resolve(pathology);
            }
        });
    });
}