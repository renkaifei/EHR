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
            text: "Shared Decision-Marking",
            status: "open",
            children: []
        }, {
            text: "Patient Health Information",
            status: "open",
            children: [{
                id: "menu_patientHealthInformation",
                text: "Patient Health Information",
                iconCls: "sidemenu-default-icon"
            }]
        }, {
            text: "TEAM TALK",
            status:"open",
            children: [{
                text: "Pathology",
                children: [{
                    text:"CA graph"
                }, {
                    text:"CEA graph"
                }, {
                    text:"Oncology flowsheet"
                }]
            }, {
                text: "Radiology",
                attributes: {
                    url: "/Radiology/Index",
                    tag:"menu_radiology"
                }
            }]
        }, {
            text: "OPTION TALK",
            children: [
                {
                    text: "OPTION TALK",
                    attributes: {
                        url: "/OptionTalk/Index",
                        tag: "menu_optionTalk"
                    }
                }
            ]
        }, {
            text: "DECISION TALK",
            children: [
                {
                    text: "DECISION TALK",
                    attributes: {
                        url: "/DecisionTalk/Index",
                        tag: "menu_decisionTalk"
                    }
                }
            ]
        }],
        onSelect: function (item) {
            if ("attributes" in item) {
                if ("url" in item["attributes"] && "tag" in item["attributes"]) {
                    document.getElementById("myContainer").src = item["attributes"]["url"] + "?patientCaseId=" + patientCase.id;
                }
            }
        },
        formatter: function (node) {
            return node.text;
        }
    });

    //connection.on("ReceivePathologyMessage", function (pathologyId) {
    //    patientCase.pathologyId = pathologyId;
    //    update_menu_pathology();
    //});

    //connection.on("ReceiveRadiologyMessage", function (radiologyId) {
    //    patientCase.radiologyId = radiologyId;
    //    update_menu_radiology();
    //});

    //connection.on("ReceiveChiefComplaintHistoriesMessage", function (chiefComplaintHistoriesId) {
    //    patientCase.chiefComplaintHistoriesId = chiefComplaintHistoriesId;
    //    update_menu_chiefComplaintHistories();
    //});
    //connection.start().then(function () {
        
    //}).catch(function (err) {
    //    return console.error(err.toString());
    //});
}

function pageLoad() {
    hidePatientDetailInfo();

    //service initialize
    patientCaseService = new PatientCaseService();
    patientService = new PatientService();
    doctorService = new DoctorService();

    //initialize test data;
    var patientCaseId = 1;

    //connection.invoke("WatchPatientCase", patientCaseId).catch(function (err) {
    //    return console.error(err.toString());
    //});

    //get patientCaseInfo;
    patientCaseService.getOneById(patientCaseId).then(function (data) {
        patientCase = data;
        $lblAdmitted.text(patientCase.admittedDate);
        $lblLocation.text(patientCase.location);

        update_menu_chiefComplaintHistories();
        update_menu_pathology();
        update_menu_radiology();
    }).then(function () {
        return patientService.getOneById(patientCase.patientId)
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
            });
    }).then(function () {
        return doctorService.getOneById(patientCase.attendingId)
            .then(function (data) {
                attendingDoctor = data;
                $lblAttending.text(attendingDoctor.getFullName());
            });
    }).then(function () {
        return doctorService.getOneById(patientCase.consultantId)
            .then(function (data) {
                consultantDoctor = data;
                $lblConsultant.text(consultantDoctor.getFullName());
            });
    }).catch(function (message) {
        $.messager.alert('error', message, "error");
    });
}


function hidePatientDetailInfo() {
    $tablePatientInfo.find("tr:eq(0)").siblings().hide();
}

function showPatientDetailInfo() {
    $tablePatientInfo.find("tr:eq(0)").siblings().show();
}

function update_menu_chiefComplaintHistories() {
    var menu_chiefComplaintHistories_node = $(".sidemenu-tree").eq(0).tree("find", "menu_chiefComplaintHistories");
    if (menu_chiefComplaintHistories_node == null) return;
    $(".sidemenu-tree").eq(0).tree("update", {
        target: menu_chiefComplaintHistories_node.target,
        iconCls: patientCase.chiefComplaintHistoriesId == null ? "icon-no" : "sidemenu-default-icon"
    });
}

function update_menu_pathology() {
    var menu_pathology_node = $(".sidemenu-tree").eq(1).tree("find", "menu_pathology");
    if (menu_pathology_node == null) return;
    $(".sidemenu-tree").eq(1).tree("update", {
        target: menu_pathology_node.target,
        iconCls: patientCase.pathologySharedNotesId == null ? "icon-no" : "sidemenu-default-icon"
    });
}

function update_menu_radiology() {
    var menu_radiology_node = $(".sidemenu-tree").eq(1).tree("find", "menu_radiology");
    if (menu_radiology_node == null) return;
    $(".sidemenu-tree").eq(1).tree("update", {
        target: menu_radiology_node.target,
        iconCls: patientCase.radiologySharedNotesId == null ? "icon-no" : "sidemenu-default-icon"
    });
}



