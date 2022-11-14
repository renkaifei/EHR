function Panel() {
    this.preState = "normal";
    this.state = "normal";
    this.id = "";
    this.name = "";
    this.height = 400;
    this.width = 500;
    this.style = "";
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
        width: this.width,
        style: this.style || {},
        minimizable: true,
        maximizable: true,
        closable: false,
        onBeforeMaximize: function () {
            self.onBeforeMaximize();
        },
        onMaximize: function () {
            self.preState = self.state;
            self.state = "maximize";
            self.onMaximize();  
        },
        onMinimize: function () {
            self.preState = self.state;
            self.state = "minimize";
            self.onMinimize();
        },
        onRestore: function () {
            self.preState = self.state;
            self.state = "normal";
            self.onRestore();
        }
    });
}

Panel.prototype.close = function () {
    this.getJqueryObj().panel("close");
}

Panel.prototype.open = function () {
    this.getJqueryObj().panel("open");
}