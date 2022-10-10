function UserService() {

}

UserService.prototype.GetOne = function (userId,successCallback,errorCallback) {
    $.ajax({
        url: "/api/user/getone",
        type: "post",
        dataType: "json",
        contentType:"application/x-www-form-urlencoded",
        data: { userId: userId},
        success: function (resp) {
            if (resp.status != 100000) {
                errorCallback(resp.message);
            } else {
                var user = new User();
                user.id = resp.id;
                user.firstName = resp.data.firstName;
                user.middleName = resp.data.middleName;
                user.lastName = resp.data.lastName;
                user.address = resp.data.address;
                user.loginName = resp.data.loginName;
                successCallback(user);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

