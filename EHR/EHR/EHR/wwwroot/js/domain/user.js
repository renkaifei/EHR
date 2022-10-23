function User() {
    this.id = 0;
    this.firstName = "";
    this.middleName = "";
    this.lastName = "";
    this.age = 0;
    this.address = "";
    this.loginName = "";
}

User.prototype.getFullName = function () {
    if (this.middleName == null || this.middleName == "") {
        return this.firstName + ", " + this.lastName;
    } else {
        return this.firstName + ", " + this.middleName + ", " + this.lastName;
    }
}