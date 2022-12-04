function CEAGraphChartPanel() {
    Panel.call(this);
    this.chartCEA = null;
}

CEAGraphChartPanel.prototype = Object.create(Panel.prototype);
CEAGraphChartPanel.prototype.constructor = Panel;

CEAGraphChartPanel.prototype.build = function (arrData) {
    Panel.prototype.build.call(this);
    var $panelBody = this.getJqueryObj().panel("body");
    var $canvas = $("<canvas></canvas>").appendTo($panelBody);
    this.chartCEA = this.buildCEAChart($canvas,arrData);
}

CEAGraphChartPanel.prototype.buildCEAChart = function (ctx, arrData) {
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
            }
        }
    });

    return chart;
}