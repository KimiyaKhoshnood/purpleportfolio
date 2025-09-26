export const chartsData = [

    {
        "series": [
            {
                "data": [
                    400,
                    430,
                    448,
                    470,
                    540,
                    580,
                    690,
                    1100,
                    1200,
                    1380
                ]
            }
        ],
        "options": {
            "chart": {
                "type": "Bar",
                "height": 350,
                "width": 350,
            },
            "plotOptions": {
                "bar": {
                    "borderRadius": 4,
                    "borderRadiusApplication": "end",
                    "horizontal": true
                }
            },
            "dataLabels": {
                "enabled": false
            },
            "xaxis": {
                "categories": [
                    "South Korea",
                    "Canada",
                    "United Kingdom",
                    "Netherlands",
                    "Italy",
                    "France",
                    "Japan",
                    "United States",
                    "China",
                    "Germany"
                ]
            }
        }
    },
    {
        "series": [
            44,
            55,
            13,
            43,
            22
        ],
        "options": {
            "chart": {
                "height": 350,
                "width": 350,
                "type": "Pie"
            },
            "labels": [
                "Team A",
                "Team B",
                "Team C",
                "Team D",
                "Team E"
            ],
            "responsive": [
                {
                    "breakpoint": 480,
                    "options": {
                        "chart": {
                            "width": 200
                        },
                        "legend": {
                            "position": "bottom"
                        }
                    }
                }
            ]
        }
    },
    {
        "series": [
            {
                "name": "series1",
                "data": [
                    31,
                    40,
                    28,
                    51,
                    42,
                    109,
                    100
                ]
            },
            {
                "name": "series2",
                "data": [
                    11,
                    32,
                    45,
                    32,
                    34,
                    52,
                    41
                ]
            }
        ],
        "options": {
            "chart": {
                "height": 350,
                "width": 350,
                "type": "Area"
            },
            "dataLabels": {
                "enabled": false
            },
            "stroke": {
                "curve": "smooth"
            },
            "xaxis": {
                "type": "datetime",
                "categories": [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ]
            },
            "tooltip": {
                "x": {
                    "format": "dd/MM/yy HH:mm"
                }
            }
        }
    },
    {
        "series": [
            {
                "name": "Session Duration",
                "data": [
                    45,
                    52,
                    38,
                    24,
                    33,
                    26,
                    21,
                    20,
                    6,
                    8,
                    15,
                    10
                ]
            },
            {
                "name": "Page Views",
                "data": [
                    35,
                    41,
                    62,
                    42,
                    13,
                    18,
                    29,
                    37,
                    36,
                    51,
                    32,
                    35
                ]
            },
            {
                "name": "Total Visits",
                "data": [
                    87,
                    57,
                    74,
                    99,
                    75,
                    38,
                    62,
                    47,
                    82,
                    56,
                    45,
                    47
                ]
            }
        ],
        "options": {
            "chart": {
                "height": 350,
                "width": 350,
                "type": "Line",
                "zoom": {
                    "enabled": false
                }
            },
            "dataLabels": {
                "enabled": false
            },
            "stroke": {
                "curve": "smooth"
            },
            "title": {
                "text": "Page Statistics",
                "align": "left"
            },
            "legend": {
                "tooltipHoverFormatter": "function (val, opts) { return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'; }"
            },
            "markers": {
                "size": 0,
                "hover": {
                    "sizeOffset": 6
                }
            },
            "xaxis": {
                "categories": [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan"
                ]
            },
            "tooltip": {
                "y": [
                    {
                        "title": {
                            "formatter": "function (val) { return val + ' (mins)'; }"
                        }
                    },
                    {
                        "title": {
                            "formatter": "function (val) { return val + ' per session'; }"
                        }
                    },
                    {
                        "title": {
                            "formatter": "function (val) { return val; }"
                        }
                    }
                ]
            },
            "grid": {
                "borderColor": "#f1f1f1"
            }
        }
    },
    {
        "series": [
            70
        ],
        "options": {
            "chart": {
                "height": 300,
                "width": 350,
                "type": "Radial"
            },
            "plotOptions": {
                "radialBar": {
                    "hollow": {
                        "size": "70%"
                    }
                }
            },
            "labels": [
                "Cricket"
            ]
        }
    },
    // {
    //     "series": [
    //         70
    //     ],
    //     "options": {
    //         "chart": {
    //             "type": "Progress"
    //         },
    //         "plotOptions": {
    //             "radialBar": {
    //                 "hollow": {
    //                     "size": "60%"
    //                 },
    //                 "dataLabels": {
    //                     "name": {
    //                         "show": false
    //                     },
    //                     "value": {
    //                         "fontSize": "22px",
    //                         "show": true
    //                     }
    //                 }
    //             }
    //         },
    //         "labels": [
    //             "Progress"
    //         ]
    //     }
    // }
]