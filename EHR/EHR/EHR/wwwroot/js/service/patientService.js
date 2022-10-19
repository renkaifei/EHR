function PatientService() {

}

PatientService.prototype.getOneById = function (id,successCallback,errorCallback) {
    $.ajax({
        url: "/api/patient/getOneById",
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: { id:id },
        success: function (resp) {
            if (resp.status != 100000) {
                errorCallback(resp.message);
            } else {
                var patient = new Patient();
                patient.id = resp.data.id;
                patient.firstName = resp.data.firstName;
                patient.middleName = resp.data.middleName;
                patient.lastName = resp.data.lastName;
                patient.loginName = resp.data.loginName;
                patient.address = resp.data.address;
                successCallback(patient);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}