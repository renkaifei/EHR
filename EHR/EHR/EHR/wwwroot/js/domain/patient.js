function Patient() {
    this.mrn = "";
    this.patientAllergies = [];
}

Patient.prototype = Object.create(User.prototype);
Patient.prototype.constructor = User;

Patient.prototype.getAllergies = function () {
    var allergies = [];
    this.patientAllergies.forEach(function (patientAllergy) {
        allergies.push(patientAllergy.allergy.name);
    });
    return allergies.join(",");
}





