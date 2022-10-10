function User() {
    this.id = 0;
    this.firstName = "";
    this.middleName = "";
    this.lastName = "";
    this.address = "";
    this.loginName = "";
}

User.prototype.getFullName = function () {
    return this.firstName + this.middleName + this.lastName;
}