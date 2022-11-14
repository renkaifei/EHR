var patientService;
var patientCaseService;

var patient;
var patientCase;

var $lblPatientName;
var $lblAge;
var $lblAllergies;
var $leftSideMenu;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $lblPatientName = $("#lblPatientName");
    $lblAge = $("#lblAge");
    $lblAllergies = $("#lblAllergies");
    $leftSideMenu = $("#leftSideMenu");
    $leftSideMenu.sidemenu({
        width: 295,
        border: false,
        data: [{
            text: "Chief Complaint and Histories"
        }, {
            text: "Labortory Test Results",
            status: "open",
            children: [{
                text: "Pathology",
                attributes: {
                    "url": "/Pathology/Index"
                }
            }, {
                text: "Radiology",
                attributes: {
                    "url": "/Radiology/Index"
                }
            }]
        }, {
            text: "Physical Examinaition"
        }, {
            text: "Assessment"
        }, {
            text: "Planning"
        }, {
            text: "Orders",
            status: "closed",
            children: [{
                text: "Patient portal"
            }, {
                text: "Pathology"
            }, {
                text: "Radiology"
            }, {
                text: "Medications"
            }, {
                text: "Therapies"
            }, {
                text: "Follow-up visit"
            }]
        }, {
            text: "Documents",
            status: "closed",
            children: [{
                text: "Shared Visit Notes and Plan"
            }]
        }],
        onSelect: function (item) {
            if ("attributes" in item) {
                if ("url" in item["attributes"]) {
                    document.getElementById("myContainer").src = item["attributes"]["url"] + "?patientCaseId=" + patientCase.id;
                }
            }
        }
    });
}

function pageLoad() {
    //service initialize
    patientService = new PatientService();
    patientCaseService = new PatientCaseService();

    //initialize test data;
    var patientCaseId = 1;

    //get patientCaseInfo;
    patientCaseService.getOneById(patientCaseId, function (data) {
        patientCase = data;
        patientService.getOneById(patientCase.patientId, function (data) {
            patient = data;
            $lblPatientName.text(patient.getFullName());
            $lblAge.text(patient.age);
        }, function (message) {
            $.messager.alert('error', message, "error");
        });
    }, function (message) {
        $.messager.alert('error', message, "error");
    });
}


