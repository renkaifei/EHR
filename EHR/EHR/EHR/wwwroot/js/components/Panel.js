function Panel() {
    this.preState = "normal";
    this.state = "normal";
    this.id = "";
    this.height = 400;
    this.width = 400;
    this.title = "";
    this.onBeforeMaximize = function () { };
    this.onMaximize = function () { };
    this.onMinimize = function () { };
    this.onRestore = function () { };
}

Panel.prototype.getJqueryObj = function () {
    return $("#" + this.id);
}

Panel.prototype.build = function () {
    var self = this;
    this.getJqueryObj().panel({
        title: this.title,
        height: this.height,
        width:this.width,
        minimizable: true,
        maximizable: true,
        closable: false,
        onBeforeMaximize: function () {
            self.onBeforeMaximize();
        },
        onMaximize: function () {
            self.onMaximize();
            self.preState = self.state;
            self.state = "maximize";
        },
        onMinimize: function () {
            self.onMinimize();
            self.preState = self.state;
            self.state = "minimize";
        },
        onRestore: function () {
            self.onRestore();
            self.preState = self.state;
            self.state = "normal";
        }
    });
}

Panel.prototype.close = function () {
    this.getJqueryObj().panel("close");
}

Panel.prototype.open = function () {
    this.getJqueryObj().panel("open");
    this.state = this.preState;
}