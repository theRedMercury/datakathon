function graphVisualisation(vect){

    var minABV;
    var maxABV;
    var min

    var v3D = [];
    var vXY = [];
    var vYZ = [];
    var vZX = [];
    var vNM = [];

    for (var i = 0, I = vect.length; i<I; i++){
        v3D.push({name: vect[i].name, data: [[vect[i].ABV,vect[i].EBC,vect[i].DLUO]]});
        vXY.push({name: vect[i].name, data: [[vect[i].ABV ,vect[i].EBC ]]});
        vYZ.push({name: vect[i].name, data: [[vect[i].EBC ,vect[i].DLUO]]});
        vZX.push({name: vect[i].name, data: [[vect[i].DLUO,vect[i].ABV ]]});
    }

    var myChart3D = Highcharts.chart('chart3D', {
        chart: {
            type: 'scatter3d', 
            margin: 100,
            options3d: {
                enabled: true,
                alpha:  15,         // TODO
                beta:   30,         // TODO
                depth:  250,        // TODO
                viewDistance: 5,    // TODO
                fitToPlot: false,   // TODO
                frame: {
                    bottom: { size: 1, color: 'rgba(0,0,0,0.02)' }, // TODO
                    back:   { size: 1, color: 'rgba(0,0,0,0.04)' }, // TODO
                    side:   { size: 1, color: 'rgba(0,0,0,0.06)' }  // TODO
                }
            }
        },
        title: {
            text: 'ABV vs EBC vs DLUO'
        },
        plotOptions: {
            scatter: {
                width: 10,
                height: 10,
                depth: 10
            }
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'ABV [%]'
            }
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'EBC [-]'
            }
        },
        zAxis: {
            title: {
                enabled: true,
                text: 'DLUO [years]'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'ABV: {point.x} [%]<br>EBC: {point.y}<br>DLUO: {point.z} years'
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'ABV: {point.x} [%]<br>EBC: {point.y}<br>DLUO: {point.z} years'
                }
            },
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        select: function () {
                            var text = 'ABV: '+this.category + ' [%]; EBC: ' + this.y + ' [-]; DLUO: ' + this.z + ' [years];',
                                chart = this.series.chart;
                            if (!chart.lbl) {
                                chart.lbl = chart.renderer.label(text, 100, 70)
                                    .attr({
                                        padding: 10,
                                        r: 5,
                                        fill: Highcharts.getOptions().colors[1],
                                        zIndex: 5
                                    })
                                    .css({
                                        color: '#FFFFFF'
                                    })
                                    .add();
                            } else {
                                chart.lbl.attr({
                                    text: text
                                });
                            }
                        }
                    }
                }
            }
        },
        series: v3D
    });

    $(myChart3D.container).on('mousedown.hc touchstart.hc', function (eStart) {
        eStart = myChart3D.pointer.normalize(eStart);
        var posX    = eStart.chartX,
            posY    = eStart.chartY,
            alpha   = myChart3D.options.chart.options3d.alpha,
            beta    = myChart3D.options.chart.options3d.beta,
            newAlpha,
            newBeta,
            sensitivity = 5;    // TODO
        $(document).on({
            'mousemove.hc touchmove.hc': function (e) {
                e = myChart3D.pointer.normalize(e);
                newBeta  = beta  + (posX - e.chartX) / sensitivity;
                myChart3D.options.chart.options3d.beta = newBeta;
                newAlpha = alpha + (e.chartY - posY) / sensitivity;
                myChart3D.options.chart.options3d.alpha = newAlpha;
                myChart3D.xAxis[0].setExtremes(myChartXY.xAxis[0].min,myChartXY.xAxis[0].max);
                myChart3D.yAxis[0].setExtremes(myChartYZ.xAxis[0].min,myChartYZ.xAxis[0].max);
                myChart3D.zAxis[0].setExtremes(myChartZX.xAxis[0].min,myChartZX.xAxis[0].max);
                myChart3D.redraw(false);
            },
            'mouseup touchend': function () {
                $(document).off('.hc');
            }
        });
    });

    var myChartXY = Highcharts.chart('chartXY', {
        chart: {
            type: 'scatter',
            margin: 75,
            zoomType: 'x'
        },
        title: {
            text: 'Alcohol By Volume [%] vs European Brewery Convention [-]'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'ABV [%]'
            }
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'EBC [-]'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'ABV: {point.x} [%]<br> EBC: {point.y}'
                }
            },
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        select: function () {
                            var text = 'ABV: '+this.category + ' [%]; EBC: ' + this.y + ' [-];',
                                chart = this.series.chart;
                            if (!chart.lbl) {
                                chart.lbl = chart.renderer.label(text, 100, 70)
                                    .attr({
                                        padding: 10,
                                        r: 5,
                                        fill: Highcharts.getOptions().colors[1],
                                        zIndex: 5
                                    })
                                    .css({
                                        color: '#FFFFFF'
                                    })
                                    .add();
                            } else {
                                chart.lbl.attr({
                                    text: text
                                });
                            }
                        }
                    }
                }
            }
        },
        series: vXY
    });

    var myChartYZ = Highcharts.chart('chartYZ', {
        chart: {
            type: 'scatter',
            margin: 75,
            zoomType: 'x'
        },
        title: {
            text: 'European Brewery Convention [-] vs Shelf Life [years]'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'EBC [-]'
            }
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'DLUO [years]'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'EBC: {point.x}<br> DLUO: {point.y} [years]'
                }
            },
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        select: function () {
                            var text = 'EBC: '+this.category + ' [-]; DLUO: ' + this.y + ' [years];',
                                chart = this.series.chart;
                            if (!chart.lbl) {
                                chart.lbl = chart.renderer.label(text, 100, 70)
                                    .attr({
                                        padding: 10,
                                        r: 5,
                                        fill: Highcharts.getOptions().colors[1],
                                        zIndex: 5
                                    })
                                    .css({
                                        color: '#FFFFFF'
                                    })
                                    .add();
                            } else {
                                chart.lbl.attr({
                                    text: text
                                });
                            }
                        }
                    }
                }
            }
        },
        series: vYZ
    });

    var myChartZX = Highcharts.chart('chartZX', {
        chart: {
            type: 'scatter',
            margin: 75,
            zoomType: 'x'
        },
        title: {
            text: 'Shelf Life [years] vs Alcohol By Volume [%]'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'DLUO [years]'
            }
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'ABV [%]'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'DLUO: {point.x} [years]<br> ABV: {point.y} [%]'
                }
            },
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        select: function () {
                            var text = 'DLUO: '+this.category + ' [years]; AVG: ' + this.y + ' [%];',
                                chart = this.series.chart;
                            if (!chart.lbl) {
                                chart.lbl = chart.renderer.label(text, 100, 70)
                                    .attr({
                                        padding: 10,
                                        r: 5,
                                        fill: Highcharts.getOptions().colors[1],
                                        zIndex: 5
                                    })
                                    .css({
                                        color: '#FFFFFF'
                                    })
                                    .add();
                            } else {
                                chart.lbl.attr({
                                    text: text
                                });
                            }
                        }
                    }
                }
            }
        },
        series: vZX
    });
}