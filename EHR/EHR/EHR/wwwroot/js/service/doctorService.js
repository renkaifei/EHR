function DoctorService() {

}

DoctorService.prototype.getOneById = function (id) {
    return fetch("/api/doctor/getOneById", {
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
                var doctor = new Doctor();
                doctor.id = resp.data.id;
                doctor.firstName = resp.data.firstName;
                doctor.middleName = resp.data.middleName;
                doctor.lastName = resp.data.lastName;
                doctor.age = resp.data.age;
                doctor.address = resp.data.address;
                doctor.loginName = resp.data.loginName;
                resolve(doctor);
            } else {
                reject(resp.message);
            }
        });
    });
}