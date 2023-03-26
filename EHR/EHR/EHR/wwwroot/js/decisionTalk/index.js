var btnShowCareOption1Panel;
var btnShowCareOption2Panel;
var btnShowCareOption3Panel;
var btnShowCareOption4Panel;
var careOption1Panel;
var careOption2Panel;
var careOption3Panel;
var careOption4Panel;
var careOption1Table;
var careOption2Table;
var careOption3Table;
var careOption4Table;
var careOptionDoctorRecordEditor;

var careOptionService;
var doctorRecordService;

var patientCaseId = 0;
var doctorRecord = null;
var timeOutHandler = -1;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    btnShowCareOption1Panel = $("#btnShowCareOption1Panel").linkbutton();
    btnShowCareOption1Panel.hide();
    btnShowCareOption2Panel = $("#btnShowCareOption2Panel").linkbutton();
    btnShowCareOption2Panel.hide();
    btnShowCareOption3Panel = $("#btnShowCareOption3Panel").linkbutton();
    btnShowCareOption3Panel.hide();
    btnShowCareOption4Panel = $("#btnShowCareOption4Panel").linkbutton();
    btnShowCareOption4Panel.hide();

    careOption1Panel = new Panel();
    careOption1Panel.id = "careOption1Panel";
    careOption1Panel.title = "Care Options";
    careOption1Panel.footer = "#careOption1PanelFooter";
    careOption1Panel.closable = true;
    careOption1Panel.style = { "margin": "2px 5px"};
    careOption1Panel.onBeforeMaximize = function () {
        careOption2Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
    }
    careOption1Panel.build();
    careOption1Table = new EHRGrid();
    careOption1Table.id = "careOption1Table";
    careOption1Table.addColumn({ field: "question" });
    careOption1Table.addColumn({ field: "answer" });

    careOption2Panel = new Panel();
    careOption2Panel.id = "careOption2Panel";
    careOption2Panel.title = "Care Options";
    careOption2Panel.closable = true;
    careOption2Panel.footer = "#careOption2PanelFooter";
    careOption2Panel.style = { "margin": "2px 5px" };
    careOption2Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
    }
    careOption2Panel.build();
    careOption2Table = new EHRGrid();
    careOption2Table.id = "careOption2Table";
    careOption2Table.addColumn({ field: "question" });
    careOption2Table.addColumn({ field: "answer" });

    careOption3Panel = new Panel();
    careOption3Panel.id = "careOption3Panel";
    careOption3Panel.title = "Care Options";
    careOption3Panel.closable = true;
    careOption3Panel.footer = "#careOption3PanelFooter";
    careOption3Panel.style = { "margin": "2px 5px" };
    careOption3Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption2Panel.close();
        careOption4Panel.close();
    }
    careOption3Panel.build();
    careOption3Table = new EHRGrid();
    careOption3Table.id = "careOption3Table";
    careOption3Table.addColumn({ field: "question" });
    careOption3Table.addColumn({ field: "answer" });

    careOption4Panel = new Panel();
    careOption4Panel.id = "careOption4Panel";
    careOption4Panel.title = "Care Options";
    careOption4Panel.footer = "#careOption4PanelFooter";
    careOption4Panel.closable = true;
    careOption4Panel.style = { "margin": "2px 5px" };
    careOption4Panel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption2Panel.close();
        careOption3Panel.close();
    }
    careOption4Panel.build();
    careOption4Table = new EHRGrid();
    careOption4Table.id = "careOption4Table";
    careOption4Table.addColumn({ field: "question" });
    careOption4Table.addColumn({ field: "answer" });

    careOptionDoctorRecordEditor = CKEDITOR.replace('careOptionDoctorRecordEditor');
    careOptionDoctorRecordEditor.on('instanceReady', function () {
        careOptionDoctorRecordEditor.resize('100%', '250');
    });


    
}

function pageLoad() {
    careOptionService = new CareOptionService();
    doctorRecordService = new DoctorRecordService();

    patientCaseId = getIframeQueryString("patientCaseId");

    careOptionService.getAll().then(function (careOptions) {
        var careOption1s = careOptions.filter(function (item) {
            return item.optionType.toLowerCase() == "option1"
        });
        careOption1s = careOption1s.sort(function (a,b) {
            if (a.orderNo > b.orderNo) return 1;
            if (a.orderNo == b.orderNo) return 0;
            if (a.orderNo < b.orderNo) return -1;
        });
        $.each(careOption1s, function ( index,item) {
            careOption1Table.addRow(item);
        });

        var careOption2s = careOptions.filter(function (item) {
            return item.optionType.toLowerCase() == "option2"
        });
        careOption2s = careOption2s.sort(function (a, b) {
            if (a.orderNo > b.orderNo) return 1;
            if (a.orderNo == b.orderNo) return 0;
            if (a.orderNo < b.orderNo) return -1;
        });
        $.each(careOption2s, function (index, item) {
            careOption2Table.addRow(item);
        });

        var careOption3s = careOptions.filter(function (item) {
            return item.optionType.toLowerCase() == "option3"
        });
        careOption3s = careOption3s.sort(function (a, b) {
            if (a.orderNo > b.orderNo) return 1;
            if (a.orderNo == b.orderNo) return 0;
            if (a.orderNo < b.orderNo) return -1;
        });
        $.each(careOption3s, function (index, item) {
            careOption3Table.addRow(item);
        });

        var careOption4s = careOptions.filter(function (item) {
            return item.optionType.toLowerCase() == "option4"
        });
        careOption4s = careOption4s.sort(function (a, b) {
            if (a.orderNo > b.orderNo) return 1;
            if (a.orderNo == b.orderNo) return 0;
            if (a.orderNo < b.orderNo) return -1;
        });
        $.each(careOption4s, function (index, item) {
            careOption4Table.addRow(item);
        });
    });

    doctorRecordService.getOne(patientCaseId, "careoption").then(function (record) {
        doctorRecord = record;
        if (record.existsInDb()) {
            careOptionDoctorRecordEditor.on('instanceReady', function () {
                careOptionDoctorRecordEditor.setData(record.content);
            });
        }
        careOptionDoctorRecordEditor.on("change", function () {
            clearTimeout(timeOutHandler);
            timeOutHandler = setTimeout(function () {
                var data = CKEDITOR.instances.careOptionDoctorRecordEditor.getData();
                if (data == "") {
                    if (!doctorRecord.existsInDb()) {
                        doctorRecordService.deleteById(doctorRecord.id);
                    }
                } else {
                    doctorRecord.content = btoa(data);
                    if (doctorRecord.existsInDb()) {
                        doctorRecordService.update(doctorRecord);
                    } else {
                        doctorRecordService.add(doctorRecord);
                    }
                }
            }, 500)
        });
    });
}