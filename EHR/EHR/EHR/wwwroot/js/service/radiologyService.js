function RadiologyService() {

}

RadiologyService.prototype.getOneByPatientCaseId = function (patientCaseId) {
    return fetch("/api/radiology/getonebypatientcaseid", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "patientCaseId=" + patientCaseId
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        var radiology = new Radiology();
        return new Promise(function (resolve, reject) {
            if (resp.status != 100000) {
                reject(resp.message);
            } else {
                radiology.id = resp.data.id;
                radiology.report = resp.data.report;
                radiology.sharedNotes = resp.data.sharedNotes;
                if (resp.data.ctImages != null) {
                    resp.data.ctImages.forEach(function (item) {
                        var ctImage = new CTImage();
                        ctImage.id = item.id;
                        ctImage.imagePath = item.imagePath;
                        ctImage.radiologyId = item.radiologyId;
                        radiology.ctImages.push(ctImage);
                    });
                }
                resolve(radiology);
            }
        });
    });
}

RadiologyService.prototype.updateSharedNotes = function (radiology) {
    return fetch("/api/radiology/updateSharedNotesById", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + radiology.id + "&sharedNotes=" + radiology.sharedNotes
    })
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            return new Promise(function (resolve, reject) {
                if (data.status != 100000) {
                    reject(data.message)
                } else {
                    resolve("");
                }
            });
        });
}