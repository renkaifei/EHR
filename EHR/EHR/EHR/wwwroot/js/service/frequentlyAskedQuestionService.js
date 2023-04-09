function FrequentlyAskedQuestionService() {

}

FrequentlyAskedQuestionService.prototype.getList = function (keywords) {
    return fetch("/api/FrequentlyAskedQuestion/GetList", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "keywords=" + keywords ?? ""
    }).then(function (resp) {
        return resp.json();
    }).then(function (resp) {
        if (resp.status != 100000) {
            return Promise.reject(resp.message);
        } else {
            var questiones = [];
            var count = resp.data.length;
            for (var i = 0; i < count; i++) {
                var question = new FrequentlyAskedQuestion();
                question.id = resp.data[i].id;
                question.question = resp.data[i].question;
                question.createTime = resp.data[i].createTime;
                question.createTime = resp.data[i].updateTime;
                questiones.push(question);
            }
            return Promise.resolve(questiones);
        }
    })
}