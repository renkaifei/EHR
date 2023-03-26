function CareOptionService() {

}

CareOptionService.prototype.getAll = function () {
    return fetch('/api/careOption/getAll', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ""
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        return new Promise(function (resolve, reject) {
            var careOptions = [];
            if (resp.status == 100000) {
                if (resp.data != null) {
                    const length = resp.data.length;
                    for (var i = 0; i < length; i++) {
                        var careOption = new CareOption();
                        careOption.id = resp.data[i].id;
                        careOption.question = resp.data[i].question;
                        careOption.answer = resp.data[i].answer;
                        careOption.optionType = resp.data[i].optionType;
                        careOption.createTime = resp.data[i].createTime;
                        careOption.updateTime = resp.data[i].updateTime;
                        careOption.orderNo = resp.data[i].orderNo;
                        careOptions.push(careOption);
                    }
                }
                resolve(careOptions);
            } else {
                reject(resp.message);
            }
        });
    });
}