function PatientCaseTumorMarkerService() {

}

PatientCaseTumorMarkerService.prototype.getListByPatientCaseId = function (patientCaseId) {
    var promiseOne = fetch("/api/patientCaseTumorMarker/getListByPatientCaseId", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "patientCaseId=" + patientCaseId
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
        var patientCaseTumorMarkers = [];
        var count = data1.length;
        for (var i = 0; i < count; i++) {
            var patientCaseTumorMarker = new PatientCaseTumorMarker();
            patientCaseTumorMarker.id = data1[i].id;
            patientCaseTumorMarker.value = data1[i].value;
            patientCaseTumorMarker.testDate = data1[i].testDate;
            patientCaseTumorMarker.patientCaseId = data1[i].patientCaseId;
            patientCaseTumorMarker.tumorMarkerId = data1[i].tumorMarkerId;
            var tumorMarkerId = data1[i].tumorMarkerId;
            var tumorMarker = data2.find(item => item.id == tumorMarkerId);
            patientCaseTumorMarker.tumorMarker.id = tumorMarker.id;
            patientCaseTumorMarker.tumorMarker.name = tumorMarker.name;
            patientCaseTumorMarker.tumorMarker.fullName = tumorMarker.fullName;
            patientCaseTumorMarker.tumorMarker.minValue = tumorMarker.minValue;
            patientCaseTumorMarker.tumorMarker.maxValue = tumorMarker.maxValue;
            patientCaseTumorMarker.tumorMarker.unit = tumorMarker.unit;
            patientCaseTumorMarkers.push(patientCaseTumorMarker);
        }
        return new Promise(function (resolve, reject) {
            resolve(patientCaseTumorMarkers);
        });
    });
}

PatientCaseTumorMarkerService.prototype.getCAListByPatientCaseId = function (patientCaseId) {
    var promiseOne = fetch("/api/patientCaseTumorMarker/getCAListByPatientCaseId", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "patientCaseId=" + patientCaseId
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
        var patientCaseTumorMarkers = [];
        var count = data1.length;
        for (var i = 0; i < count; i++) {
            var patientCaseTumorMarker = new PatientCaseTumorMarker();
            patientCaseTumorMarker.id = data1[i].id;
            patientCaseTumorMarker.value = data1[i].value;
            patientCaseTumorMarker.testDate = data1[i].testDate;
            patientCaseTumorMarker.patientCaseId = data1[i].patientCaseId;
            patientCaseTumorMarker.tumorMarkerId = data1[i].tumorMarkerId;
            var tumorMarkerId = data1[i].tumorMarkerId;
            var tumorMarker = data2.find(item => item.id == tumorMarkerId);
            patientCaseTumorMarker.tumorMarker.id = tumorMarker.id;
            patientCaseTumorMarker.tumorMarker.name = tumorMarker.name;
            patientCaseTumorMarker.tumorMarker.fullName = tumorMarker.fullName;
            patientCaseTumorMarker.tumorMarker.minValue = tumorMarker.minValue;
            patientCaseTumorMarker.tumorMarker.maxValue = tumorMarker.maxValue;
            patientCaseTumorMarker.tumorMarker.unit = tumorMarker.unit;
            patientCaseTumorMarkers.push(patientCaseTumorMarker);
        }
        return new Promise(function (resolve, reject) {
            resolve(patientCaseTumorMarkers);
        });
    });
}