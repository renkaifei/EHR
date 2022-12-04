function PatientCaseService() {

}

PatientCaseService.prototype.getOneById = function (id) {
    return fetch("/api/patientcase/getOneById", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + id
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status != 100000) {
                reject(resp.message);
            } else {
                var patientCase = new PatientCase();
                patientCase.id = resp.data.id;
                patientCase.patientId = resp.data.patientId;
                patientCase.admittedDate = resp.data.admittedDate;
                patientCase.attendingId = resp.data.attendingId;
                patientCase.consultantId = resp.data.consultantId;
                patientCase.location = resp.data.location;
                patientCase.chiefComplaintHistoriesId = resp.data.chiefComplaintHistoriesId;
                patientCase.pathologyReportId = resp.data.pathologyReportId;
                patientCase.pathologySharedNotesId = resp.data.pathologySharedNotesId;
                patientCase.radiologyId = resp.data.radiologyId;
                resolve(patientCase);
            }
        });
    });
}