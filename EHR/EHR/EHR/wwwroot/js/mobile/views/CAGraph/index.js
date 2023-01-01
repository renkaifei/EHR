let caGraphChartPanel;
let patientCaseTumorMarkerService;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    caGraphChartPanel = new CAGraphChartPanel();
    caGraphChartPanel.id = "caGraphChartPanel";
    caGraphChartPanel.fit = true;
}

function pageLoad() {
    var patientCaseId = 1;
    patientCaseTumorMarkerService = new PatientCaseTumorMarkerService();
    patientCaseTumorMarkerService.getListByPatientCaseId(patientCaseId)
        .then(function (data) {
            var arrcaData = data.filter(function (item) {
                return item.tumorMarker.name == "CA";
            });
            caGraphChartPanel.build(arrcaData);
        });
}