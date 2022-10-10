var userService;
var $lblPatientName;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    userService = new UserService();
    $lblPatientName = $("#lblPatientName");
}

function pageLoad() {
    var userId = 1;
    userService.GetOne(userId, function (user) {
        $lblPatientName.text(user.getFullName());
    }, function (msg) {
        $.messager.alert('错误', msg,"error");
    });
}
