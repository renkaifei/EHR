var $txtFrequentlyAskedQuestion;
var m_optionGrid;
var m_frequentlyAskedQuestionService;
var m_treatmentMetodService;
var m_treatmentOptionService;
var m_timeoutHandler = 0;
var m_treatmentMethods = [];

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    $txtFrequentlyAskedQuestion = $("#txtFrequentlyAskedQuestion").combobox({
        valueField: "question",
        textField: "question",
        onChange: function (newValue, oldValue) {
            clearTimeout(m_timeoutHandler);
            m_timeoutHandler = setTimeout(function () {
                if (newValue != "") {
                    fillFrequentlyAskedQuestionCombobox(newValue);
                }
                clearTimeout(m_timeoutHandler);
            },1000)
        },
        onSelect: function (question) {
            fillTreatmentOptionGrid(question.id);
        }
    });

    m_optionGrid = new EHRGrid();
    m_optionGrid.id = "optionGrid";
    m_optionGrid.addColumn({ field: "treatmentMethod" });
    m_optionGrid.addColumn({ field: "content" });
}

function pageLoad() {
    m_frequentlyAskedQuestionService = new FrequentlyAskedQuestionService();
    m_treatmentMetodService = new TreatmentMethodService();
    m_treatmentOptionService = new TreatmentOptionService();
    m_treatmentMetodService.getAll().then(function (treatmentMethods) {
        m_treatmentMethods = treatmentMethods;
    }).catch(function (message) {
        alert(message);
    });
}

function fillFrequentlyAskedQuestionCombobox(keywords) {
    m_frequentlyAskedQuestionService.getList(keywords).then(function (questiones) {
        $txtFrequentlyAskedQuestion.combobox("loadData", questiones);
    }).catch(function (message) {
        alert(message);
    });
}

function fillTreatmentOptionGrid(questionId) {
    m_treatmentOptionService.getListByQuestionId(questionId)
        .then(function (treatmentOptions) {
            m_optionGrid.clearBody();
            var count = treatmentOptions.length;
            for (var i = 0; i < count; i++) {
                treatmentOptions[i].treatmentMethod = m_treatmentMethods.find(function (item) {
                    return item.id == treatmentOptions[i].treatmentMethodId;
                }).name;
                m_optionGrid.addRow(treatmentOptions[i]);
            }
        }).catch(function (message) {
            alert(message);
        })
}