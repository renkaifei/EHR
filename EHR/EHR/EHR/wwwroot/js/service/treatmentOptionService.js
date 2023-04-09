function TreatmentOptionService() {

}

TreatmentOptionService.prototype.getListByQuestionId = function (questionId) {
    return fetch("/api/TreatmentOption/GetListByQuestionId", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "questionId=" + questionId
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var treatmentOptions = [];
            var count = resp.data.length;
            for (var i = 0; i < count; i++) {
                var treatmentOption = new TreatmentOption();
                treatmentOption.id = resp.data[i].id;
                treatmentOption.questionId = resp.data[i].questionId;
                treatmentOption.treatmentMethodId = resp.data[i].treatmentMethodId;
                treatmentOption.content = resp.data[i].content;
                treatmentOptions.push(treatmentOption);
            }
            return Promise.resolve(treatmentOptions);
        }
    });
}