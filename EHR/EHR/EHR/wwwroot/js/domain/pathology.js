function Pathology() {
    this.id = 0;
    this.report = "";
    this.clinicalNotes = "";
    this.patientCaseId = 0;
    this.pathologyTumorMarkers = [];
}

Pathology.prototype.buildLineChartOfCA19_9 = function (ctx) {
    var labels = [];
    var realData = [];
    var targetData = [];
    for (var i = 0; i < this.pathologyTumorMarkers.length; i++) {
        if (this.pathologyTumorMarkers[i].tumorMarker.name == "CA19-9") {
            labels.push(this.pathologyTumorMarkers[i].testDate);
            realData.push(this.pathologyTumorMarkers[i].value);
            targetData.push(this.pathologyTumorMarkers[i].tumorMarker.maxValue);
        }
    }
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'CA growth rate(U/ml)',
                    data: realData,
                    borderColor: "rgb(0,0,205)",
                    tension:0.1
                },
                {
                    label: 'Target value(U/ml)',
                    data: targetData,
                    borderColor: "rgb(139,69,19)",
                    tension: 0.1
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size:9
                        }
                    }
                },
                title: {
                    align: "center",
                    display: true,
                    text: "Carbohydrate antigen 19-9 (CA 19-9) Chart"
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Test Periods",
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "Results U/ml",
                    },
                    min: 0,
                    max: 50,
                    ticks: {
                        stepSize:10
                    }
                }
            },
            responsive:false
        }
    });
}

Pathology.prototype.buildLineChartOfCEA = function (ctx) {
    var labels = [];
    var realData = [];
    var targetData = [];
    for (var i = 0; i < this.pathologyTumorMarkers.length; i++) {
        if (this.pathologyTumorMarkers[i].tumorMarker.name == "CEA") {
            labels.push(this.pathologyTumorMarkers[i].testDate);
            realData.push(this.pathologyTumorMarkers[i].value);
            targetData.push(this.pathologyTumorMarkers[i].tumorMarker.maxValue);
        }
    }
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'CEA Results (ng/ml)',
                    data: realData,
                    borderColor: "rgb(0,0,205)",
                    tension: 0.1
                },
                {
                    label: 'Target value(ng/ml)',
                    data: targetData,
                    borderColor: "rgb(139,69,19)",
                    tension: 0.1
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 9
                        }
                    }
                },
                title: {
                    align: "center",
                    display: true,
                    text: "Carcinoembryonic antigen"
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Test Periods",
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "Results (ng/ml)",
                    },
                    min: 0,
                    max: 8,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            responsive: false
        }
    });


}

Pathology.prototype.buildStaticsGrid = function ($grid) {
    var result = {};

    var count = this.pathologyTumorMarkers.length;
    for (var i = 0; i < count; i++) {
        var tumorMarkerName = this.pathologyTumorMarkers[i].getTumorMarkerName();
        if (!result.hasOwnProperty(tumorMarkerName)) {
            result[tumorMarkerName] = {
                name: tumorMarkerName,
                value: 0,
                normalRange: this.pathologyTumorMarkers[i].getNormalRange(),
                unit: this.pathologyTumorMarkers[i].getUnit(),
                count: 0,
                average:0
            };
        }
        result[tumorMarkerName].value = result[tumorMarkerName].value + this.pathologyTumorMarkers[i].value;
        result[tumorMarkerName].count = result[tumorMarkerName].count + 1;
        if (result[tumorMarkerName].count > 0) result[tumorMarkerName].average = (result[tumorMarkerName].value / result[tumorMarkerName].count).toFixed(1);
    }

    var arrResult = [];
    for (key in result) {
        arrResult.push(result[key]);
    }

    $grid.datagrid({
        columns: [[
            { field: "name", title: "Test", align: "left" },
            { field: "average", title: "Result",  align: "left" },
            { field: "normalRange", title: "Normal Range",  align: "left" },
            { field: "unit", title: "Unit",  align: "left" }
        ]],
        data: arrResult
    });
}