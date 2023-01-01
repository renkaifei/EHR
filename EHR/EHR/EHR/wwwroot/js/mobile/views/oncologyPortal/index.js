var addressBookCard;
var diaryCard;
var pathologyCard;
var appointmentsCard;
var educationCard;
var questionnairesCard;
var cardiologyCard;
var medicationsCard;
var radiologyCard;
var decisionMarkingCard;
var myHealthCard;
var visitNotesCard;

$(function () {
    initializeComponent();
    pageLoad();
});

function initializeComponent() {
    addressBookCard = new Card();
    addressBookCard.image = "/images/card.PNG";
    addressBookCard.caption = "addressBook";
    $("#addressBookContainer").append(addressBookCard.build());

    diaryCard = new Card();
    diaryCard.image = "/images/card.PNG";
    diaryCard.caption = "Diary";
    $("#diaryContainer").append(diaryCard.build());

    pathologyCard = new Card();
    pathologyCard.image = "/images/card.PNG";
    pathologyCard.caption = "Pathology";
    $("#pathologyContainer").append(pathologyCard.build());

    appointmentsCard = new Card();
    appointmentsCard.image = "/images/card.PNG";
    appointmentsCard.caption = "appointments";
    $("#appointmentsContainer").append(appointmentsCard.build());

    educationCard = new Card();
    educationCard.image = "/images/card.PNG";
    educationCard.caption = "education";
    $("#educationContainer").append(educationCard.build());

    questionnairesCard = new Card();
    questionnairesCard.image = "/images/card.PNG";
    questionnairesCard.caption = "questionnaires";
    $("#questionnairesContainer").append(questionnairesCard.build());

    cardiologyCard = new Card();
    cardiologyCard.image = "/images/card.PNG";
    cardiologyCard.caption = "Cardiology";
    $("#cardiologyContainer").append(cardiologyCard.build());

    medicationsCard = new Card();
    medicationsCard.image = "/images/card.PNG";
    medicationsCard.caption = "medications";
    $("#medicationsContainer").append(medicationsCard.build());

    radiologyCard = new Card();
    radiologyCard.image = "/images/card.PNG";
    radiologyCard.caption = "radiology";
    $("#radiologyContainer").append(radiologyCard.build());

    decisionMarkingCard = new Card();
    decisionMarkingCard.image = "/images/card.PNG";
    decisionMarkingCard.caption = "Decision Marking";
    $("#decisionMakingContainer").append(decisionMarkingCard.build());

    myHealthCard = new Card();
    myHealthCard.image = "/images/card.PNG";
    myHealthCard.caption = "My Health";
    $("#myHealthContainer").append(myHealthCard.build());

    visitNotesCard = new Card();
    visitNotesCard.image = "/images/card.PNG";
    visitNotesCard.caption = "Visit Notes";
    $("#visitNotesContainer").append(visitNotesCard.build());
}

function pageLoad() {
    
}