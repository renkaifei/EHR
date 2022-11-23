function Doctor() {
    User.call(this);
}

Doctor.prototype = Object.create(User.prototype);
Doctor.prototype.constructor = User;