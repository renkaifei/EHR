function PatientCaseService() {

}

PatientCaseService.prototype.getOneById = function (id,successCallback,errorCallback) {
    $.ajax({
        url: "/api/patientcase/getOneById",
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: { id: id },
        success: function (resp) {
            if (resp.status != 100000) {
                errorCallback(resp.message);
            } else {
                var patientCase = new PatientCase();
                patientCase.id = resp.data.id;
                patientCase.patientId = resp.data.patientId;
                patientCase.admittedDate = resp.data.admittedDate;
                patientCase.attendingId = resp.data.attendingId;
                patientCase.consultantId = resp.data.consultantId;
                patientCase.location = resp.data.location;
                successCallback(patientCase);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}