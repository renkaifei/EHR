function PathologyReportService() {

}

PathologyReportService.prototype.getOneById = function (id) {
    return fetch("/api/pathologyReport/getOneById", {
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
                var pathologyReport = new PathologyReport();
                if (resp.data != null) {
                    pathologyReport.id = resp.data.id;
                    pathologyReport.report = resp.data.report;
                }
                resolve(pathologyReport);
            } else {
                reject(resp.message);
            }
        });
    });
}