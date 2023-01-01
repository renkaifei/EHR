var $btnShowPnlCAGraph;
var $btnShowPnlFlowsheet;
var $btnShowPnlCEAGraph;
var $btnShowPnlReports;
var $btnShowPnlPathologySharedNotes;
var caGraphChartPanel;
var flowsheetGridPanel;
var ceaGraphChartPanel;
var reportPanel;
var sharedNotesPanel;
var patientCaseService;
var patientCaseTumorMarkerService;
var pathologyReportService;
var pathologySharedNotesService;
var pathologySharedNotes;
var patientCaseId = 0;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $btnShowPnlCAGraph = $("#btnShowPnlCAGraph");
    $btnShowPnlCAGraph.linkbutton();
    $btnShowPnlCAGraph.on("click", function () {
        $(this).hide();
        caGraphChartPanel.open();
        caGraphChartPanel.state = caGraphChartPanel.preState;
        caGraphChartPanel.preState = "minimize";
    });
    $btnShowPnlCAGraph.hide();

    $btnShowPnlFlowsheet = $("#btnShowPnlFlowsheet");
    $btnShowPnlFlowsheet.linkbutton();
    $btnShowPnlFlowsheet.on("click", function () {
        $(this).hide();
        flowsheetGridPanel.open();
        flowsheetGridPanel.state = flowsheetGridPanel.preState;
        flowsheetGridPanel.preState = "minimize";
    });
    $btnShowPnlFlowsheet.hide();

    $btnShowPnlCEAGraph = $("#btnShowPnlCEAGraph");
    $btnShowPnlCEAGraph.linkbutton();
    $btnShowPnlCEAGraph.on("click", function () {
        $(this).hide();
        ceaGraphChartPanel.open();
        ceaGraphChartPanel.state = ceaGraphChartPanel.preState;
        ceaGraphChartPanel.preState = "minimize";
    });
    $btnShowPnlCEAGraph.hide();

    $btnShowPnlReports = $("#btnShowPnlReports");
    $btnShowPnlReports.linkbutton();
    $btnShowPnlReports.on("click", function () {
        $(this).hide();
        reportPanel.open();
        reportPanel.state = reportPanel.preState;
        reportPanel.preState = "minimize";
    });
    $btnShowPnlReports.hide();

    $btnShowPnlPathologySharedNotes = $("#btnShowPnlPathologySharedNotes");
    $btnShowPnlPathologySharedNotes.linkbutton();
    $btnShowPnlPathologySharedNotes.on("click", function () {
        $(this).hide();
        sharedNotesPanel.open();
        sharedNotesPanel.state = sharedNotesPanel.preState;
        sharedNotesPanel.preState = "minimize";
    });
    $btnShowPnlPathologySharedNotes.hide();

    caGraphChartPanel = new CAGraphChartPanel();
    caGraphChartPanel.id = "pnlCAGraph";
    caGraphChartPanel.title = "CA Graph";
    caGraphChartPanel.style = { "margin": "2px 5px" };
    caGraphChartPanel.addImageDownloadTool();
    caGraphChartPanel.addPdfDownloadTool();
    caGraphChartPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(caGraphChartPanel);
    };
    caGraphChartPanel.onMaximize = function () {
        
    }
    caGraphChartPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlCAGraph.show();
        showNormalPanel();
    };
    caGraphChartPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    flowsheetGridPanel = new FlowsheetGridPanel();
    flowsheetGridPanel.id = "pnlFlowsheet";
    flowsheetGridPanel.title = "Flowsheet";
    flowsheetGridPanel.style = { "margin": "2px 5px" };
    flowsheetGridPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(flowsheetGridPanel);
    }
    flowsheetGridPanel.onMaximize = function () {
        flowsheetGridPanel.resizeGrid();
    }
    flowsheetGridPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlFlowsheet.show();
        showNormalPanel();
    }
    flowsheetGridPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    ceaGraphChartPanel = new CEAGraphChartPanel();
    ceaGraphChartPanel.id = "pnlCEAGraph";
    ceaGraphChartPanel.title = "CEA Graph";
    ceaGraphChartPanel.style = { "margin": "2px 5px" };
    ceaGraphChartPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(ceaGraphChartPanel);
    };
    ceaGraphChartPanel.onMaximize = function () {
        
    }
    ceaGraphChartPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlCEAGraph.show();
        showNormalPanel();
    };
    ceaGraphChartPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    reportPanel = new ReportPanel();
    reportPanel.id = "pnlReports";
    reportPanel.title = "Reports";
    reportPanel.style = { "margin": "2px 5px" };
    reportPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(reportPanel);
    }
    reportPanel.onMaximize = function () {
        
    }
    reportPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlReports.show();
        showNormalPanel();
    }
    reportPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }

    sharedNotesPanel = new PathologySharedNotesPanel();
    sharedNotesPanel.id = "pnlPathologySharedNotes";
    sharedNotesPanel.title = "Pathology Shared Notes(Objective)";
    sharedNotesPanel.style = { "margin": "2px 5px" };
    sharedNotesPanel.onBeforeMaximize = function () {
        disableShowBtn();
        closePanelExcept(sharedNotesPanel);
    }
    sharedNotesPanel.onMaximize = function () {

    }
    sharedNotesPanel.onMinimize = function () {
        enableShowBtn();
        $btnShowPnlPathologySharedNotes.show();
        showNormalPanel();
    }
    sharedNotesPanel.onRestore = function () {
        enableShowBtn();
        showNormalPanel();
    }
}

function pageLoad() {
    patientCaseService = new PatientCaseService();
    patientCaseTumorMarkerService = new PatientCaseTumorMarkerService();
    pathologyReportService = new PathologyReportService();
    pathologySharedNotesService = new PathologySharedNotesService();

    patientCaseId = getIframeQueryString("patientCaseId");
    if (patientCaseId == null) patientCaseId = 0;
        
    patientCaseTumorMarkerService.getListByPatientCaseId(patientCaseId).then(function (data) {
        var arrcaData = data.filter(function (item) {
            return item.tumorMarker.name == "CA";
        });
        caGraphChartPanel.build(arrcaData);
        flowsheetGridPanel.build(data);
        var arrceaData = data.filter(function (item) {
            return item.tumorMarker.name == "CEA";
        });
        ceaGraphChartPanel.build(arrceaData);
    }).catch(function (message) {
        $.messager.alert('error', message, "error");
    });
    
    patientCaseService.getOneById(patientCaseId)
        .then(function (data) {
            var pathologyReportId = data.pathologyReportId || 0;
            pathologyReportService.getOneById(pathologyReportId)
                .then(function (data) {
                    reportPanel.build(data);
                }).catch(function (message) {
                    $.messager.alert('error', message, "error");
                });
            var pathologySharedNotesId = data.pathologySharedNotesId || 0;
            pathologySharedNotesService.getOneById(pathologySharedNotesId)
                .then(function (data) {
                    pathologySharedNotes = data;
                    pathologySharedNotes.patientCaseId = patientCaseId;
                    sharedNotesPanel.build(pathologySharedNotes);
                }).catch(function (message) {
                    $.messager.alert('error', message, "error");
                });
        }).catch(function (message) {
            $.messager.alert('error', message, "error");
        });
}

function closePanelExcept(panel) {
    var arrPanel = [caGraphChartPanel, flowsheetGridPanel, ceaGraphChartPanel, reportPanel, sharedNotesPanel];
    arrPanel.forEach(function(item) {
        if (item.id != panel.id) item.close();
    });
}

function showNormalPanel() {
    var arrPanel = [caGraphChartPanel, flowsheetGridPanel, ceaGraphChartPanel, reportPanel, sharedNotesPanel];
    arrPanel.forEach(function(item) {
        if (item.state == "normal") item.open();
    });
}

function enableShowBtn() {
    var arrShowBtn = [$btnShowPnlCAGraph, $btnShowPnlFlowsheet, $btnShowPnlCEAGraph, $btnShowPnlCEAGraph, $btnShowPnlReports, $btnShowPnlPathologySharedNotes];
    arrShowBtn.forEach(function (item) {
        item.linkbutton("enable")
    });
}

function disableShowBtn() {
    var arrShowBtn = [$btnShowPnlCAGraph, $btnShowPnlFlowsheet, $btnShowPnlCEAGraph, $btnShowPnlCEAGraph, $btnShowPnlReports, $btnShowPnlPathologySharedNotes];
    arrShowBtn.forEach(function (item) {
        item.linkbutton("disable")
    });
}

