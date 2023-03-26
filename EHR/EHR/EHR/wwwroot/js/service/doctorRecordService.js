function DoctorRecordService() {

}

DoctorRecordService.prototype.getOne = function (patientCaseId,recordType) {
    return fetch("/api/DoctorRecord/GetOneByPatientCaseIdAndRecordType", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "patientCaseId=" + patientCaseId + "&recordType=" + recordType
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var doctorRecord = new DoctorRecord();
            doctorRecord.id = resp.data.id;
            doctorRecord.patientCaseId = resp.data.patientCaseId;
            doctorRecord.doctorId = resp.data.doctorId;
            doctorRecord.content = atob(resp.data.content);
            doctorRecord.recordType = resp.data.recordType;
            doctorRecord.createTime = resp.data.createTime;
            doctorRecord.updateTime = resp.data.updateTime;
            return Promise.resolve(doctorRecord);
        }
    });

    
}

DoctorRecordService.prototype.add = function (data) {
    return fetch("/api/DoctorRecord/Add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var doctorRecord = new DoctorRecord();
            doctorRecord.id = resp.data.id;
            doctorRecord.patientCaseId = resp.data.patientCaseId;
            doctorRecord.doctorId = resp.data.doctorId;
            doctorRecord.content = atob(resp.data.content);
            doctorRecord.recordType = resp.data.recordType;
            doctorRecord.createTime = resp.data.createTime;
            doctorRecord.updateTime = resp.data.updateTime;
            return Promise.resolve(doctorRecord);
        }
    });
}

DoctorRecordService.prototype.update = function (data) {
    return fetch("/api/DoctorRecord/Update", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var doctorRecord = new DoctorRecord();
            doctorRecord.id = resp.data.id;
            doctorRecord.patientCaseId = resp.data.patientCaseId;
            doctorRecord.doctorId = resp.data.doctorId;
            doctorRecord.content = atob(resp.data.content);
            doctorRecord.recordType = resp.data.recordType;
            doctorRecord.createTime = resp.data.createTime;
            doctorRecord.updateTime = resp.data.updateTime;
            return Promise.resolve(doctorRecord);
        }
    });
}


DoctorRecordService.prototype.deleteById = function (doctorRecordId) {
    return fetch("/api/DoctorRecord/DeleteById", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "doctorRecordId=" + doctorRecordId
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            return Promise.resolve(doctorRecordId);
        }
    });
}