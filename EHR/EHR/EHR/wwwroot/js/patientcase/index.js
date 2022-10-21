var patientService;
var patientCaseService;
var pathologyService;

var patient;
var patientCase;
var pathology;

var $lblPatientName;
var $patientCasetabs;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    patientService = new PatientService();
    patientCaseService = new PatientCaseService();
    pathologyService = new PathologyService();

    $lblPatientName = $("#lblPatientName");
    $patientCasetabs = $("#patientCasetabs");
    $patientCasetabs.tabs({
        fit: true,
        border:true
    });
    $patientCasetabs.tabs('add', {
        title: 'Pathology',
        content: "<table><tr>"
            + "<td style='vertical-align:top'>"
            + "<div id='pnlTumorMarkersTends' ></div>"
            + "<div id='pnlClinicalNotes' ></div>"
            + "</td>"
            + "<td style='vertical-align:top'>"
            + "<div id='pnlTumorMarkersLabValues' ></div>"
            + "<div id='pnlPathologyReport' ></div>"
            + "</td>"
            + "</tr></table>",
        closable: false
    });
    $("#pnlTumorMarkersTends").panel({
        width: 450,
        height: 600,
        title: "Tumor Markers Trends",
        content: "<div>"
            + "<canvas id='chart_ca19_9' height='250' width='400'></canvas>"
            +"<canvas id='chart_cea' height='300' width='400'></canvas>"
            + "</div>",
        minimizable: true,
        maximizable: true,
        closable:true
    });
    $("#pnlClinicalNotes").panel({
        width: 450,
        height: 200,
        title: "Clinical Notes",
        content: "<input id='txtClinicalNotes' type='text' style='height:120px;width:445px'>"
            + "<button id='btnSaveClinicalNotes' style='float:right;margin:2px 5px;'>save</button>",
        minimizable: true,
        maximizable: true,
        closable: true
    });
    $("#txtClinicalNotes").textbox({
        multiline: true,
    });
    $("#btnSaveClinicalNotes").linkbutton().on("click", function () {
        var clinicalNotes = $("#txtClinicalNotes").textbox("getValue");
        pathologyService.updateClinicalNotes({
            id: pathology.id,
            clinicalNotes: clinicalNotes
        }, function (data) {
            pathology.clinicalNotes = data.clinicalNotes;
            $.messager.alert('info', 'success', "info");
        }, function (message) {
            $.messager.alert('error', message, "error");
        })
    });
    $("#pnlTumorMarkersLabValues").panel({
        width: 400,
        height: 200,
        title: "Tumor Markers Lab Values",
        content:"<table id='tblTumorMarkersLabValues'></table>",
        minimizable: true,
        maximizable: true,
        closable: true
    });
    $("#pnlPathologyReport").panel({
        width: 400,
        height: 200,
        title: "Pathology Report",
        content:"<p id='pPathologyReport'></p>",
        minimizable: true,
        maximizable: true,
        closable: true
    });
}

function pageLoad() {
    var patientCaseId = 1;
    patientCaseService.getOneById(patientCaseId, function (data) {
        patientCase = data;
        patientService.getOneById(patientCase.patientId, function (data) {
            patient = data;
            $lblPatientName.text(patient.getFullName());
        }, function (message) {
            $.messager.alert('error', message, "error");
        });
    }, function (message) {
        $.messager.alert('error', message, "error");
    });
    pathologyService.getOneByPatientCaseId(patientCaseId, function (data) {
        pathology = data;
        var canvas_ca19_9 = document.getElementById("chart_ca19_9").getContext('2d');
        pathology.buildLineChartOfCA19_9(canvas_ca19_9);
        var canvas_cea = document.getElementById("chart_cea").getContext('2d');
        pathology.buildLineChartOfCEA(canvas_cea);
        $("#txtClinicalNotes").textbox("setValue", pathology.clinicalNotes);
        var $tblTumorMarkersLabValues = $("#tblTumorMarkersLabValues");
        pathology.buildStaticsGrid($tblTumorMarkersLabValues);
        $("#pPathologyReport").text(pathology.report);
    }, function (message) {
        $.messager.alert('error', message, "error");
    });
}


