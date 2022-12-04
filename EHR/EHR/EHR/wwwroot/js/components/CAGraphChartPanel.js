function CAGraphChartPanel() {
    Panel.call(this);
    this.chartCA = null;
}

CAGraphChartPanel.prototype = Object.create(Panel.prototype);
CAGraphChartPanel.prototype.constructor = Panel;

CAGraphChartPanel.prototype.build = function (arrData) {
    Panel.prototype.build.call(this);
    $panelBody = this.getJqueryObj().panel("body");
    var $canvas = $("<canvas></canvas>").appendTo($panelBody);
    this.chartCA = this.buildCAChart($canvas, arrData);
}

CAGraphChartPanel.prototype.buildCAChart = function (ctx, arrData) {
    var labels = [];
    var realData = [];
    var targetData = [];
    for (var i = 0; i < arrData.length; i++) {
        labels.push(arrData[i].testDate);
        realData.push(arrData[i].value);
        targetData.push(arrData[i].tumorMarker.maxValue);
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
                    tension: 0.1
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
                            size: 9
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
                        stepSize: 10
                    }
                }
            }
        }
    });
    return chart;
}

