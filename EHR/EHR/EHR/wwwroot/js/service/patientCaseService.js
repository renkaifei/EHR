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
                successCallback(patientCase);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}