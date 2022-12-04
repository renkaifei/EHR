function ChiefComplaintHistoriesService() {

}

ChiefComplaintHistoriesService.prototype.getOneById = function (id) {
    return fetch("/api/chiefComplaintHistories/getOneById", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + id
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve,reject) {
            if (resp.status == 100000) {
                var chiefComplaintHistories = new ChiefComplaintHistories();
                if (resp.data != null) {
                    chiefComplaintHistories.id = resp.data.id;
                    chiefComplaintHistories.content = resp.data.content;
                }
                resolve(chiefComplaintHistories);
            } else {
                reject(resp.message);
            }
        });
    })
}

ChiefComplaintHistoriesService.prototype.add = function (chiefComplaintHistories) {
    return fetch("/api/chiefComplaintHistories/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chiefComplaintHistories)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve,reject) {
            if (resp.status == 100000) {
                var temp = new ChiefComplaintHistories();
                temp.id = resp.data.id;
                temp.content = resp.data.content;
                resolve(temp);
            } else {
                reject(resp.message);
            }
        });
    });
}

ChiefComplaintHistoriesService.prototype.update = function (chiefComplaintHistories) {
    return fetch("/api/chiefComplaintHistories/update", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chiefComplaintHistories)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve,reject) {
            if (resp.status == 100000) {
                var temp = new ChiefComplaintHistories();
                temp.id = resp.data.id;
                temp.content = resp.data.content;
                resolve(temp);
            } else {
                reject(resp.message);
            }
        });
    });
}