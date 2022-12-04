function PathologySharedNotesService() {

}

PathologySharedNotesService.prototype.getOneById = function (id) {
    return fetch("/api/pathologySharedNotes/getOneById", {
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
                var pathologySharedNotes = new PathologySharedNotes();
                if (resp.data != null) {
                    pathologySharedNotes.id = resp.data.id;
                    pathologySharedNotes.sharedNotes = resp.data.sharedNotes;
                }
                resolve(pathologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}

PathologySharedNotesService.prototype.add = function (pathologySharedNotes) {
    return fetch("/api/pathologySharedNotes/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pathologySharedNotes)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status == 100000) {
                var pathologySharedNotes = new PathologySharedNotes();
                if (resp.data != null) {
                    pathologySharedNotes.id = resp.data.id;
                    pathologySharedNotes.sharedNotes = resp.data.sharedNotes;
                }
                resolve(pathologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}

PathologySharedNotesService.prototype.update = function (pathologySharedNotes) {
    return fetch("/api/pathologySharedNotes/update", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pathologySharedNotes)
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            if (resp.status == 100000) {
                resolve(pathologySharedNotes);
            } else {
                reject(resp.message);
            }
        });
    });
}