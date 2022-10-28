var $btnShowPnlCAGraph;
var $btnShowPnlFlowsheet;
var $btnShowPnlCEAGraph;
var $btnShowPnlReports;
var $btnShowPnlPathologySharedNotes;
var caGraphChartPanel;
var flowsheetGridPanel;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $btnShowPnlCAGraph = $("#btnShowPnlCAGraph");
    $btnShowPnlCAGraph.linkbutton();
    $btnShowPnlCAGraph.on("click", function () {
        $btnShowPnlCAGraph.hide();
        caGraphChartPanel.open();
    });
    $btnShowPnlCAGraph.hide();

    $btnShowPnlFlowsheet = $("#btnShowPnlFlowsheet");
    $btnShowPnlFlowsheet.linkbutton();
    $btnShowPnlFlowsheet.on("click", function () {
        $btnShowPnlFlowsheet.hide();
        flowsheetGridPanel.open();
    });
    $btnShowPnlFlowsheet.hide();

    $btnShowPnlCEAGraph = $("#btnShowPnlCEAGraph");
    $btnShowPnlCEAGraph.linkbutton();
    $btnShowPnlCEAGraph.hide();

    $btnShowPnlReports = $("#btnShowPnlReports");
    $btnShowPnlReports.linkbutton();
    $btnShowPnlReports.hide();

    $btnShowPnlPathologySharedNotes = $("#btnShowPnlPathologySharedNotes");
    $btnShowPnlPathologySharedNotes.linkbutton();
    $btnShowPnlPathologySharedNotes.hide();

    caGraphChartPanel = new CAGraphChartPanel();
    caGraphChartPanel.id = "pnlCAGraph";
    caGraphChartPanel.title = "CA Graph";
    caGraphChartPanel.onBeforeMaximize = function () {
        flowsheetGridPanel.close();
    };
    caGraphChartPanel.onMaximize = function () {
        $btnShowPnlFlowsheet.linkbutton("disable");
    }
    caGraphChartPanel.onMinimize = function () {
        $btnShowPnlCAGraph.show();
    };
    caGraphChartPanel.onRestore = function () {
        if (flowsheetGridPanel.state =="normal") flowsheetGridPanel.open();
        $btnShowPnlFlowsheet.linkbutton("enable");
    }
    caGraphChartPanel.build();

    flowsheetGridPanel = new FlowsheetGridPanel();
    flowsheetGridPanel.id = "pnlFlowsheet";
    flowsheetGridPanel.title = "Flowsheet";
    flowsheetGridPanel.onBeforeMaximize = function () {
        caGraphChartPanel.close();
    }
    flowsheetGridPanel.onMaximize = function () {
        $btnShowPnlCAGraph.linkbutton("disable");
    }
    flowsheetGridPanel.onMinimize = function () {
        $btnShowPnlFlowsheet.show();
    }
    flowsheetGridPanel.onRestore = function () {
        if (caGraphChartPanel.state == "normal") caGraphChartPanel.open();
        $btnShowPnlCAGraph.linkbutton("enable");
    }
    flowsheetGridPanel.build();
}

function pageLoad() {
    
}