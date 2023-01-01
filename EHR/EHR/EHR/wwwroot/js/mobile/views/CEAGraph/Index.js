let ceaGraphChartPanel;
let patientCaseTumorMarkerService;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    ceaGraphChartPanel = new CEAGraphChartPanel();
    ceaGraphChartPanel.id = "pnlCEAGraph";
    ceaGraphChartPanel.fit = true;

}

function pageLoad() {
    var patientCaseId = 1;
    patientCaseTumorMarkerService = new PatientCaseTumorMarkerService();
    patientCaseTumorMarkerService.getListByPatientCaseId(patientCaseId)
        .then(function (data) {
            var arrceaData = data.filter(function (item) {
                return item.tumorMarker.name == "CEA";
            });
            ceaGraphChartPanel.build(arrceaData);
        });
}