function RadiologyReportService() {

}

RadiologyReportService.prototype.getOneById = function (id) {
    return fetch("/api/radiologyReport/getOneById", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + id
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status == 100000) {
                var radiologyReport = new RadiologyReport();
                if (resp.data != null) {
                    radiologyReport.id = resp.data.id;
                    radiologyReport.report = resp.data.report;
                }
                resolve(radiologyReport);
            } else {
                reject(resp.message);
            }
        });
    })
}