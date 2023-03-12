var careOption1Panel;
var careOption2Panel;
var careOption3Panel;
var careOption4Panel;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    careOption1Panel = new Panel();
    careOption1Panel.id = "careOption1Panel";
    careOption1Panel.title = "Care Options";
    careOption1Panel.closable = true;
    careOption1Panel.style = { "margin": "2px 5px" };
    careOption1Panel.onBeforeMaximize = function () {
        careOption2Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
    }
    careOption1Panel.build();

    careOption2Panel = new Panel();
    careOption2Panel.id = "careOption2Panel";
    careOption2Panel.title = "Care Options";
    careOption2Panel.closable = true;
    careOption2Panel.style = { "margin": "2px 5px" };
    
    careOption2Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
    }
    careOption2Panel.build();

    careOption3Panel = new Panel();
    careOption3Panel.id = "careOption3Panel";
    careOption3Panel.title = "Care Options";
    careOption3Panel.closable = true;
    careOption3Panel.style = { "margin": "2px 5px" };
    careOption3Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption2Panel.close();
        careOption4Panel.close();
    }
    careOption3Panel.build();

    careOption4Panel = new Panel();
    careOption4Panel.id = "careOption4Panel";
    careOption4Panel.title = "Care Options";
    careOption4Panel.closable = true;
    careOption4Panel.style = { "margin": "2px 5px" };
    careOption4Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption2Panel.close();
        careOption3Panel.close();
    }
    careOption4Panel.build();
}

function pageLoad() {
    
}