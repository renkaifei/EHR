var radiology;
var arrBtnShowCTImage;
var $btnShowReport;
var $btnShowSharedNotes;
var arrPnlCTImages;
var pnlReport;
var pnlSharedNotes;
var radiologyService;
var pnlReportId = "pnlReport"
var $pnlContainer;



$(function () {
    initializeComponent();
    pageLoad();
})

function initializeComponent() {
    $pnlContainer = $("#panelContainer");
    arrBtnShowCTImage = [];
    arrPnlCTImages = [];
    $btnShowReport = $("#btnShowReport").linkbutton().hide().on("click", function () {
        $(this).hide();
        pnlReport.open();
        pnlReport.state = pnlReport.preState;
        pnlReport.preState = "minimize";
    });
    $btnShowSharedNotes = $("#btnShowSharedNotes").linkbutton().hide().on("click", function () {
        $(this).hide();
        pnlSharedNotes.open();
        pnlSharedNotes.state = pnlSharedNotes.preState;
        pnlSharedNotes.preState = "minimize";
    });
}

function pageLoad() {
    var patientCaseId = getIframeQueryString("patientCaseId");
    radiologyService = new RadiologyService();
    radiologyService.getOneByPatientCaseId(patientCaseId).then(function (data) {
        radiology = data;
        builCTImagePanels();
    });
}

function builCTImagePanels() {
    radiology.ctImages.forEach(function (image, index) {
        var $btn = $("<button></button>")
            .linkbutton({
                text: "image" + index
            })
            .attr("imageId","image_" + image.id)
            .on("click", function () {
                var imageId = $(this).attr("imageId");
                var pnlCTImage = arrPnlCTImages.find(function (item) {
                    return item.id == imageId;
                });
                $(this).hide();
                pnlCTImage.open();
                pnlCTImage.state = pnlCTImage.preState;
                pnlCTImage.preState = "minimize";
            })
            .hide()
            .insertBefore($btnShowReport);
        arrBtnShowCTImage.push($btn);
        var id = "image_" + image.id;
        $("<div></div>").attr("id", id).insertBefore($("#" + pnlReportId));
        var ctImagePanel = new CTImagePanel();
        ctImagePanel.id = id;
        ctImagePanel.title = "CT SCANS";
        ctImagePanel.style = { "margin": "2px" };
        ctImagePanel.onBeforeMaximize = function () {
            disableShowBtns();
            closePanelExcept(ctImagePanel);
        }
        ctImagePanel.onMinimize = function () {
            enableShowBtns();
            $btn.show();
            showNormalPanel();
        }
        ctImagePanel.onRestore = function () {
            enableShowBtns();
            showNormalPanel();
        }
        ctImagePanel.build(image);
        arrPnlCTImages.push(ctImagePanel);
    });


    pnlReport = new RadiologyReportPanel();
    pnlReport.id = "pnlReport";
    pnlReport.title = "Reports";
    pnlReport.style = { "margin": "2px" };
    pnlReport.onBeforeMaximize = function () {
        disableShowBtns();
        closePanelExcept(pnlReport);
    }
    pnlReport.onMinimize = function () {
        enableShowBtns();
        $btnShowReport.show();
        showNormalPanel();
    }
    pnlReport.onRestore = function () {
        enableShowBtns();
        showNormalPanel();
    }
    pnlReport.build(radiology);
    

    pnlSharedNotes = new RadiologySharedNotesPanel();
    pnlSharedNotes.id = "pnlSharedNotes";
    pnlSharedNotes.title = "Pathology Shared Notes(Objective)";
    pnlSharedNotes.style = { "margin": "2px" };
    pnlSharedNotes.onBeforeMaximize = function () {
        disableShowBtns();
        closePanelExcept(pnlSharedNotes);
    }
    pnlSharedNotes.onMinimize = function () {
        enableShowBtns();
        $btnShowSharedNotes.show();
        showNormalPanel();
    }
    pnlSharedNotes.onRestore = function () {
        enableShowBtns();
        showNormalPanel();
    }
    pnlSharedNotes.build(radiology);
    
}

function closePanelExcept(panel) {
    arrPnlCTImages.forEach(function (item) {
        if (item.id != panel.id) item.close();
    });
    if (pnlReport.id != panel.id) pnlReport.close();
    if (pnlSharedNotes.id != panel.id) pnlSharedNotes.close();
}

function showNormalPanel() {
    arrPnlCTImages.forEach(function (item) {
        if (item.state == "normal") item.open();
    });
    if (pnlReport.state == "normal") pnlReport.open();
    if (pnlSharedNotes.state == "normal") pnlSharedNotes.open();
}

function enableShowBtns() {
    arrBtnShowCTImage.forEach(function (item) {
        item.linkbutton("enable");
    });
    $btnShowReport.linkbutton("enable");
    $btnShowSharedNotes.linkbutton("enable");
}

function disableShowBtns() {
    arrBtnShowCTImage.forEach(function (item) {
        item.linkbutton("disable");
    });
    $btnShowReport.linkbutton("disable");
    $btnShowSharedNotes.linkbutton("disable");
}


