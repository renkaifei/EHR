var caGraphChartPanel;
var patientCaseId;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    caGraphChartPanel = new CAGraphChartPanel();
    caGraphChartPanel.id = "pnlCAGraph";
    caGraphChartPanel.title = "CA Graph";
    caGraphChartPanel.style = { "margin": "2px 5px" };
    caGraphChartPanel.minimizable = false;
    caGraphChartPanel.maximizable = false;
    caGraphChartPanel.addImageDownloadTool();
    caGraphChartPanel.addPdfDownloadTool();
}

function pageLoad() {
    patientCaseTumorMarkerService = new PatientCaseTumorMarkerService();

    patientCaseId = getQueryString("patientCaseId");
    if (patientCaseId == null) patientCaseId = 0;

    patientCaseTumorMarkerService.getListByPatientCaseId(patientCaseId).then(function (data) {
        caGraphChartPanel.build(data);
        caGraphChartPanel.maximize();
    }).catch(function (message) {
        $.messager.alert('error', message, "error");
    });
}