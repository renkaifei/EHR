var $btnShowCareOption1Panel;
var $btnShowCareOption2Panel;
var $btnShowCareOption3Panel;
var $btnShowCareOption4Panel;
var $btnShowSDMThreeTalks;

var careOption1Panel;
var careOption2Panel;
var careOption3Panel;
var careOption4Panel;
var sdmThreeTalksPanel;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $btnShowCareOption1Panel = $("#btnShowCareOption1Panel");
    $btnShowCareOption1Panel.linkbutton();
    $btnShowCareOption1Panel.on("click", function () {
        $(this).hide();
        careOption1Panel.open();
        careOption1Panel.state = careOption1Panel.preState;
        careOption1Panel.preState = "minimize";
    });
    $btnShowCareOption1Panel.hide();

    $btnShowCareOption2Panel = $("#btnShowCareOption2Panel");
    $btnShowCareOption2Panel.linkbutton();
    $btnShowCareOption2Panel.on("click", function () {
        $(this).hide();
        careOption2Panel.open();
        careOption2Panel.state = careOption2Panel.preState;
        careOption2Panel.preState = "minimize";
    });
    $btnShowCareOption2Panel.hide();

    $btnShowCareOption3Panel = $("#btnShowCareOption3Panel");
    $btnShowCareOption3Panel.linkbutton();
    $btnShowCareOption3Panel.on("click", function () {
        $(this).hide();
        careOption3Panel.open();
        careOption3Panel.state = careOption3Panel.preState;
        careOption3Panel.preState = "minimize";
    });
    $btnShowCareOption3Panel.hide();

    $btnShowCareOption4Panel = $("#btnShowCareOption4Panel");
    $btnShowCareOption4Panel.linkbutton();
    $btnShowCareOption4Panel.on("click", function () {
        $(this).hide();
        careOption4Panel.open();
        careOption4Panel.state = careOption4Panel.preState;
        careOption4Panel.preState = "minimize";
    });
    $btnShowCareOption4Panel.hide();

    $btnShowSDMThreeTalks = $("#btnShowSDMThreeTalks");
    $btnShowSDMThreeTalks.linkbutton();
    $btnShowSDMThreeTalks.on("click", function () {
        $(this).hide();
        sdmThreeTalksPanel.open();
        sdmThreeTalksPanel.state = sdmThreeTalksPanel.preState;
        sdmThreeTalksPanel.preState = "minimize";
    });
    $btnShowSDMThreeTalks.hide();

    careOption1Panel = new CareOptionDataGridPanel();
    careOption1Panel.id = "careOption1Panel";
    careOption1Panel.title = "Care Option";
    careOption1Panel.style = { "margin": "2px 5px" };
    careOption1Panel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(careOption1Panel);
    }
    careOption1Panel.onMaximize = function () {

    }
    careOption1Panel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    careOption1Panel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    careOption2Panel = new CareOptionDataGridPanel();
    careOption2Panel.id = "careOption2Panel";
    careOption2Panel.title = "Care Option";
    careOption2Panel.style = { "margin": "2px 5px" };
    careOption2Panel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(careOption2Panel);
    }
    careOption2Panel.onMaximize = function () {

    }
    careOption2Panel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    careOption2Panel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    careOption3Panel = new CareOptionDataGridPanel();
    careOption3Panel.id = "careOption3Panel";
    careOption3Panel.title = "Care Option";
    careOption3Panel.style = { "margin": "2px 5px" };
    careOption3Panel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(careOption3Panel);
    }
    careOption3Panel.onMaximize = function () {

    }
    careOption3Panel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    careOption3Panel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    careOption4Panel = new CareOptionDataGridPanel();
    careOption4Panel.id = "careOption4Panel";
    careOption4Panel.title = "Care Option";
    careOption4Panel.style = { "margin": "2px 5px" };
    careOption4Panel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(careOption4Panel);
    }
    careOption4Panel.onMaximize = function () {

    }
    careOption4Panel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    careOption4Panel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    sdmThreeTalksPanel = new CareOptionDataGridPanel();
    sdmThreeTalksPanel.id = "careOption4Panel";
    sdmThreeTalksPanel.title = "Care Option";
    sdmThreeTalksPanel.style = { "margin": "2px 5px" };
    sdmThreeTalksPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(sdmThreeTalksPanel);
    }
    sdmThreeTalksPanel.onMaximize = function () {

    }
    sdmThreeTalksPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    sdmThreeTalksPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }
}

function pageLoad() {
    
}

function showNormalPanel() {
    var arrPanel = [careOption1Panel, careOption2Panel, careOption3Panel, careOption4Panel, sdmThreeTalksPanel];
    arrPanel.forEach(function (item) {
        if (item.state == "normal") item.open();
    });
}

function enableShowBtn() {
    var arrShowBtn = [$btnShowCareOption1Panel, $btnShowCareOption2Panel, $btnShowCareOption3Panel,
        $btnShowCareOption4Panel, $btnShowSDMThreeTalks];
    arrShowBtn.forEach(function (item) {
        item.linkbutton("enable");
    });
}

function disableShowBtn() {
    var arrShowBtn = [$btnShowCareOption1Panel, $btnShowCareOption2Panel, $btnShowCareOption3Panel,
        $btnShowCareOption4Panel, $btnShowSDMThreeTalks];
    arrShowBtn.forEach(function (item) {
        item.linkbutton("disable");
    });
}