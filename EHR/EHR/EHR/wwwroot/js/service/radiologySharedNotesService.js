function RadiologySharedNotesService() {
    
}

RadiologySharedNotesService.prototype.getOneById = function (id) {
    return fetch("/api/radiologySharedNotes/getOneById", {
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
                var radiologySharedNotes = new RadiologySharedNotes();
                if (resp.data != null) {
                    radiologySharedNotes.id = resp.data.id;
                    radiologySharedNotes.sharedNotes = resp.data.sharedNotes;
                }
                resolve(radiologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}

RadiologySharedNotesService.prototype.add = function (radologySharedNotes) {
    return fetch("/api/radiologySharedNotes/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(radologySharedNotes)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status == 100000) {
                radologySharedNotes.id = resp.data.id;
                radiologySharedNotes.sharedNotes = resp.data.sharedNotes;
                resolve(radiologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}

RadiologySharedNotesService.prototype.update = function (radologySharedNotes) {
    return fetch("/api/radiologySharedNotes/update", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(radologySharedNotes)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status == 100000) {
                resolve(radiologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}