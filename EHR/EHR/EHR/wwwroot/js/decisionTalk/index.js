var btnShowCareOption1Panel;
var btnShowCareOption2Panel;
var btnShowCareOption3Panel;
var btnShowCareOption4Panel;
var btnShowCareOptionDoctorRecordEditorPanel;

var careOption1Panel;
var careOption2Panel;
var careOption3Panel;
var careOption4Panel;
var careOption1Table;
var careOption2Table;
var careOption3Table;
var careOption4Table;
var careOptionDoctorRecordEditorPanel;
var careOptionDoctorRecordEditor;

var treatmentMethodService;
var treatmentQuestionService;
var treatmentOptionService;
var doctorRecordService;

var patientCaseId = 0;
var doctorRecord = null;
var timeOutHandler = -1;
var m_treatmentMethods = [];
var m_treatmentQuestions = [];

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    btnShowCareOption1Panel = $("#btnShowCareOption1Panel").linkbutton()
        .on("click", function () {
            careOption1Panel.open();
            careOption1Panel.state = careOption1Panel.preState;
            careOption1Panel.preState = "minimize";
            btnShowCareOption1Panel.hide();
        });
    btnShowCareOption1Panel.hide();
    btnShowCareOption2Panel = $("#btnShowCareOption2Panel").linkbutton()
        .on("click", function () {
            careOption2Panel.open();
            careOption2Panel.state = careOption2Panel.preState;
            careOption2Panel.preState = "minimize";
            btnShowCareOption2Panel.hide();
        });
    btnShowCareOption2Panel.hide();
    btnShowCareOption3Panel = $("#btnShowCareOption3Panel").linkbutton()
        .on("click", function () {
            careOption3Panel.open();
            careOption3Panel.state = careOption3Panel.preState;
            careOption3Panel.preState = "minimize";
            btnShowCareOption3Panel.hide();
        });
    btnShowCareOption3Panel.hide();
    btnShowCareOption4Panel = $("#btnShowCareOption4Panel").linkbutton()
        .on("click", function () {
            careOption4Panel.open();
            careOption4Panel.state = careOption4Panel.preState;
            careOption4Panel.preState = "minimize";
            btnShowCareOption4Panel.hide();
        });
    btnShowCareOption4Panel.hide();
    btnShowCareOptionDoctorRecordEditorPanel = $("#btnShowCareOptionDoctorRecordEditorPanel").linkbutton()
        .on("click", function () {
            careOptionDoctorRecordEditorPanel.open();
            careOptionDoctorRecordEditorPanel.state = careOptionDoctorRecordEditorPanel.preState;
            careOptionDoctorRecordEditorPanel.preState = "minimize";
            btnShowCareOptionDoctorRecordEditorPanel.hide();
        });
    btnShowCareOptionDoctorRecordEditorPanel.hide();

    careOption1Panel = new Panel();
    careOption1Panel.id = "careOption1Panel";
    careOption1Panel.title = "Care Options";
    careOption1Panel.footer = "#careOption1PanelFooter";
    careOption1Panel.closable = true;
    careOption1Panel.style = { "margin": "2px 5px" };
    careOption1Panel.onBeforeMaximize = function () {
        careOption2Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
        careOptionDoctorRecordEditorPanel.close();
    }
    careOption1Panel.onMinimize = function () {
        btnShowCareOption1Panel.show();
    }
    careOption1Panel.onRestore = function () {
        if (careOption2Panel.state == "normal") careOption2Panel.open();
        if (careOption3Panel.state == "normal") careOption3Panel.open();
        if (careOption4Panel.state == "normal") careOption4Panel.open();
        if (careOptionDoctorRecordEditorPanel.state == "normal") careOptionDoctorRecordEditorPanel.open();
    }
    careOption1Panel.build();
    careOption1Table = new EHRGrid();
    careOption1Table.id = "careOption1Table";
    careOption1Table.addColumn({ field: "question" });
    careOption1Table.addColumn({ field: "content" });

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
        careOptionDoctorRecordEditorPanel.close();
    }
    careOption2Panel.onMinimize = function () {
        btnShowCareOption2Panel.show();
    }
    careOption2Panel.onRestore = function () {
        if (careOption1Panel.state == "normal") careOption1Panel.open();
        if (careOption3Panel.state == "normal") careOption3Panel.open();
        if (careOption4Panel.state == "normal") careOption4Panel.open();
        if (careOptionDoctorRecordEditorPanel.state == "normal") careOptionDoctorRecordEditorPanel.open();
    }
    careOption2Panel.build();
    careOption2Table = new EHRGrid();
    careOption2Table.id = "careOption2Table";
    careOption2Table.addColumn({ field: "question" });
    careOption2Table.addColumn({ field: "content" });

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
        careOptionDoctorRecordEditorPanel.close();
    }
    careOption3Panel.onRestore = function () {
        if (careOption1Panel.state == "normal") careOption1Panel.open();
        if (careOption2Panel.state == "normal") careOption2Panel.open();
        if (careOption4Panel.state == "normal") careOption4Panel.open();
        if (careOptionDoctorRecordEditorPanel.state == "normal") careOptionDoctorRecordEditorPanel.open();
    }
    careOption3Panel.onMinimize = function () {
        btnShowCareOption3Panel.show();
    }
    careOption3Panel.build();
    careOption3Table = new EHRGrid();
    careOption3Table.id = "careOption3Table";
    careOption3Table.addColumn({ field: "question" });
    careOption3Table.addColumn({ field: "content" });

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
        careOptionDoctorRecordEditorPanel.close();
    }
    careOption4Panel.onRestore = function () {
        if (careOption1Panel.state == "normal") careOption1Panel.open();
        if (careOption2Panel.state == "normal") careOption2Panel.open();
        if (careOption3Panel.state == "normal") careOption3Panel.open();
        if (careOptionDoctorRecordEditorPanel.state == "normal") careOptionDoctorRecordEditorPanel.open();
    }
    careOption4Panel.onMinimize = function () {
        btnShowCareOption4Panel.show();
    }
    careOption4Panel.build();
    careOption4Table = new EHRGrid();
    careOption4Table.id = "careOption4Table";
    careOption4Table.addColumn({ field: "question" });
    careOption4Table.addColumn({ field: "content" });

    careOptionDoctorRecordEditorPanel = new Panel();
    careOptionDoctorRecordEditorPanel.id = "careOptionDoctorRecordEditorPanel";
    careOptionDoctorRecordEditorPanel.title = "SMD THREE TALKS";
    careOptionDoctorRecordEditorPanel.closable = true;
    careOptionDoctorRecordEditorPanel.width = 1010;
    careOptionDoctorRecordEditorPanel.style = { "margin": "2px 5px" };
    careOptionDoctorRecordEditorPanel.onBeforeMaximize = function () {
        careOption1Panel.close();
        careOption2Panel.close();
        careOption3Panel.close();
        careOption4Panel.close();
    }
    careOptionDoctorRecordEditorPanel.onRestore = function () {
        if (careOption1Panel.state == "normal") careOption1Panel.open();
        if (careOption2Panel.state == "normal") careOption2Panel.open();
        if (careOption3Panel.state == "normal") careOption3Panel.open();
        if (careOption4Panel.state == "normal") careOption4Panel.open();
    }
    careOptionDoctorRecordEditorPanel.onMinimize = function () {
        btnShowCareOptionDoctorRecordEditorPanel.show();
    }
    careOptionDoctorRecordEditorPanel.build();
    careOptionDoctorRecordEditor = CKEDITOR.replace('careOptionDoctorRecordEditor');
    careOptionDoctorRecordEditor.on('instanceReady', function () {
        careOptionDoctorRecordEditor.resize('100%', '250');
    });

}

function pageLoad() {
    treatmentMethodService = new TreatmentMethodService();
    treatmentQuestionService = new FrequentlyAskedQuestionService();
    treatmentOptionService = new TreatmentOptionService();
    doctorRecordService = new DoctorRecordService();
    patientCaseId = getIframeQueryString("patientCaseId");

    treatmentMethodService.getAll().then(function (treatmentMetohds) {
        m_treatmentMethods = treatmentMetohds;
        return treatmentQuestionService.getList("")
    }).then(function (treatmentQuestions) {
        m_treatmentQuestions = treatmentQuestions;
        return treatmentOptionService.getAll();
    }).then(function (treatmentOptions) {
        var count = m_treatmentMethods.length;
        var treatmentMethod = m_treatmentMethods[0];
        var data = treatmentOptions.filter(function (item) {
            return item.treatmentMethodId = treatmentMethod.id;
        });
        $.each(data, function (index, item) {
            item.question = m_treatmentQuestions.find(question => question.id == item.questionId).question;
            careOption1Table.addRow(item);
        });

        treatmentMethod = m_treatmentMethods[1];
        data = treatmentOptions.filter(function (item) {
            return item.treatmentMethodId = treatmentMethod.id;
        });
        $.each(data, function (index, item) {
            item.question = m_treatmentQuestions.find(question => question.id == item.questionId).question;
            careOption2Table.addRow(item);
        });


        treatmentMethod = m_treatmentMethods[2];
        data = treatmentOptions.filter(function (item) {
            return item.treatmentMethodId = treatmentMethod.id;
        });
        $.each(data, function (index, item) {
            item.question = m_treatmentQuestions.find(question => question.id == item.questionId).question;
            careOption3Table.addRow(item);
        });

        treatmentMethod = m_treatmentMethods[3];
        data = treatmentOptions.filter(function (item) {
            return item.treatmentMethodId = treatmentMethod.id;
        });
        $.each(data, function (index, item) {
            item.question = m_treatmentQuestions.find(question => question.id == item.questionId).question;
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