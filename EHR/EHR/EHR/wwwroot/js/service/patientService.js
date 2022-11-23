function PatientService() {

}

PatientService.prototype.getOneById = function (id) {
    return fetch("/api/patient/getOneById", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "id=" + id
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve,reject) {
            if (resp.status != 100000) {
                reject(resp.message);
            } else {
                var patient = new Patient();
                patient.id = resp.data.id;
                patient.mrn = resp.data.mrn;
                patient.firstName = resp.data.firstName;
                patient.middleName = resp.data.middleName;
                patient.lastName = resp.data.lastName;
                patient.age = resp.data.age;
                patient.loginName = resp.data.loginName;
                patient.address = resp.data.address;
                patient.medicare = resp.data.medicare;
                patient.dob = resp.data.dob;
                patient.gender = resp.data.gender;
                if (resp.data.patientAllergies != null) {
                    resp.data.patientAllergies.forEach(function (item) {
                        var x = new PatientAllergy();
                        x.id = item.id;
                        x.patientId = item.patientId;
                        x.allergyId = item.allergyId;
                        x.allergy.id = item.allergy.id;
                        x.allergy.name = item.allergy.name;
                        patient.patientAllergies.push(x);
                    });
                }
                resolve(patient);
            }
        });
    });
}