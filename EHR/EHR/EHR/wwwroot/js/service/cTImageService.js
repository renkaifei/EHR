function CTImageService() {
    
}

CTImageService.prototype.getListByPatientCaseId = function (patientCaseId) {
    return fetch("/api/ctImage/getListByPatientCaseId", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "patientCaseId=" + patientCaseId
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            var cTImages = [];
            if (resp.status == 100000) {
                if (resp.data != null) {
                    var length = resp.data.length;
                    for (var i = 0; i < length; i++) {
                        var cTImage = new CTImage();
                        cTImage.id = resp.data[i].id;
                        cTImage.imagePath = resp.data[i].imagePath;
                        cTImage.patientCaseId = resp.data[i].patientCaseId;
                        cTImages.push(cTImage);
                    }
                    resolve(cTImages);
                }
            } else {
                reject(resp.message);
            }
        });
    })
}