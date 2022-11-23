var patientService;
var doctorService;
var patientCaseService;

var patientCase;
var patient;
var attendingDoctor;
var consultantDoctor;

var $tablePatientInfo;
var $lblPatientName;
var $lblMRN;
var $lblAge;
var $lblAllergies;
var $toggerPatientInfo;
var $lblAttending;
var $lblDOB;
var $lblMedicare;
var $lblAddress;
var $lblConsultant;
var $lblGender;
var $lblAdmitted;
var $lblLocation;
var $leftSideMenu;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $tablePatientInfo = $("#tablePatientInfo");
    $lblPatientName = $("#lblPatientName");
    $lblMRN = $("#lblMRN");
    $lblAge = $("#lblAge");
    $lblAllergies = $("#lblAllergies");
    $toggerPatientInfo = $("#toggerPatientInfo").on("click", function () {
        if ($(this).hasClass("spinner-arrow-down")) {
            showPatientDetailInfo();
            $(this).removeClass("spinner-arrow-down").addClass("spinner-arrow-up");
            var regionNorth = $("body").layout("panel", "north");
            regionNorth.panel("resize", { "height": 100 });
            $("body").layout("resize");
        } else {
            hidePatientDetailInfo();
            $(this).removeClass("spinner-arrow-up").addClass("spinner-arrow-down");
            var regionNorth = $("body").layout("panel", "north");
            regionNorth.panel("resize", { "height": 30 });
            $("body").layout("resize");
        }
    });
    $lblAttending = $("#lblAttending");
    $lblDOB = $("#lblDOB");
    $lblMedicare = $("#lblMedicare");
    $lblAddress = $("#lblAddress");
    $lblConsultant = $("#lblConsultant");
    $lblGender = $("#lblGender");
    $lblAdmitted = $("#lblAdmitted");
    $lblLocation = $("#lblLocation");
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
    hidePatientDetailInfo();

    //service initialize
    patientCaseService = new PatientCaseService();
    patientService = new PatientService();
    doctorService = new DoctorService();

    //initialize test data;
    var patientCaseId = 1;

    

    //get patientCaseInfo;
    patientCaseService.getOneById(patientCaseId, function (data) {
        patientCase = data;
        $lblAdmitted.text(patientCase.admittedDate);
        $lblLocation.text(patientCase.location);
        patientService.getOneById(patientCase.patientId)
            .then(function (data) {
                patient = data;
                $lblPatientName.text(patient.getFullName());
                $lblMRN.text(patient.mrn);
                $lblAge.text(patient.age);
                $lblAllergies.text(patient.getAllergies());
                $lblDOB.text(patient.dob);
                $lblMedicare.text(patient.medicare);
                $lblAddress.text(patient.address);
                $lblGender.text(patient.gender);
               
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        doctorService.getOneById(patientCase.attendingId)
            .then(function (data) {
                attendingDoctor = data;
                $lblAttending.text(attendingDoctor.getFullName());
            }).catch(function (message) {
                $.messager.alert('error', message, "error");
            });
        doctorService.getOneById(patientCase.consultantId)
            .then(function (data) {
                consultantDoctor = data;
                $lblConsultant.text(consultantDoctor.getFullName());
            })

    }, function (message) {
        $.messager.alert('error', message, "error");
    });
}


function hidePatientDetailInfo() {
    $tablePatientInfo.find("tr:eq(0)").siblings().hide();
}

function showPatientDetailInfo() {
    $tablePatientInfo.find("tr:eq(0)").siblings().show();
}

