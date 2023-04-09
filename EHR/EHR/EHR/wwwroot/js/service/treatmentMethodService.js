function TreatmentMethodService() {
    
}

TreatmentMethodService.prototype.getAll = function () {
    return fetch("/api/TreatmentMethod/GetAll", {
        method: "POST"
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var treatmentMethods = [];
            var count = resp.data.length;
            for (var i = 0; i < count; i++) {
                var treatmentMethod = new TreatmentMethod();
                treatmentMethod.id = resp.data[i].id;
                treatmentMethod.name = resp.data[i].name;
                treatmentMethod.createTime = resp.data[i].createTime;
                treatmentMethod.updateTime = resp.data[i].updateTime;
                treatmentMethods.push(treatmentMethod);
            }
            return Promise.resolve(treatmentMethods);
        }
    });
}