/* This Class function will be extended using the "new"
    constructor and will take either a config object
    and a number, or nothing at all.

    Instantiate it using Your_SimpleChart_Instance.chartIt();
*/

// -----------------
// -- Simple Chart Master Class
// -----------------
var SimpleChart = function(config, num) {
    var Main = this;
    Main.pre = config;
    
    // SET RANDOM DATA ARRAY LENGTH VARIABLE
    if (num != null) {
        Main.num = num;
    } else {
        Main.num = 1;
        // console.log("num is null. Set =", Main.num)
    }

    // RANDOM NUMBER ARRAY GENRATOR
    Main.Random = function(num) {
        if (num == null) {
            var length = num;
        } else {
            num = Main.num;
        }
    
        arr = [];
        // console.log("Whats the num that came through?", Main.num);

        for (var i = 0, l = Main.num; i < l; i++) {
            var min = 0;
            var max = 100;
            var ran = Math.floor(Math.random() * (max - min + 1)) + min;
            // var ran = Math.round((Math.random() * l) * Math.random() * l);
            arr.push(ran);
        };

        return arr;
        
    }

    // RANDOM NUMBER GRABBER
    // DEPENDENT ON RANDOM NUMBER GENERATOR
    Main.grabFirst = function(num) {
        var singleNum = new Main.Random(num);
        // console.log(singleNum[0], "Single Number Called");

        return singleNum[0];
    }
    var testNum;
    testNum = this.grabFirst();


    // INITIAL CONFIG TRANSFORMATION
    // SANITIZE CHART OBJECT
    (Main.configChart = function() {
        // console.log("Config Passed in", config);
        // console.log("Current Config -- Pre Transform", Main.pre);
        console.log("-------------------------------\n")
        console.log("Config Stage 1 -- Begin Switch Transformation");
        
        if (Main.pre == null) {
            Main.pre = [{            
                divElem: $('#chart'),
                title: 'Default Gauge',
                type: 'gauge',
                yAxis: 1,
                speed: 'km/h',
                name: 'Speed',
                suffix: ' km/h',
                data: testNum || 0,
                time: 1000
            }]
        } else {
            for (var i = 0; i < Main.pre.length;i++) {
                switch (Main.pre[i].type) {
                    case 'column':
                    console.log("You've Chosen a column graph");
                        Main.pre = [{
                            name: Main.pre[i].name,
                            type: Main.pre[i].type,
                            yAxis: i,
                            data: testNum || 0,
                            divElem: Main.pre[i].divElem,
                            title: Main.pre[i].title,
                            // speed: 'km/h',
                            // name: 'Speed',
                            // suffix: ' km/h',
                            time: Main.pre[i].time
                        }];
                        break;
                    case 'spline':
                    console.log("You've Chosen a spline graph");
                        Main.pre = [{
                            name: Main.pre[i].name,
                            type: Main.pre[i].type,
                            yAxis: i,
                            data: testNum || 0,
                            divElem: Main.pre[i].divElem,
                            title: Main.pre[i].title,
                            speed: 'km/h',
                            name: 'Speed',
                            suffix: ' km/h',
                            time: Main.pre[i].time
                        }];
                        break;
                    case 'bar':
                    console.log("You've Chosen a bar graph");
                        Main.pre = [{
                            name: Main.pre[i].name,
                            type: Main.pre[i].type,
                            yAxis: i,
                            data: testNum || 0,
                            divElem: Main.pre[i].divElem,
                            title: Main.pre[i].title,
                            speed: 'km/h',
                            name: 'Speed',
                            suffix: ' km/h',
                            time: Main.pre[i].time
                        }];
                        break;
                    case 'gauge':
                    console.log("You've Chosen a gauge graph");
                        Main.pre = [{
                            name: Main.pre[i].name,
                            type: Main.pre[i].type,
                            yAxis: i,
                            data: testNum || 0,
                            divElem: Main.pre[i].divElem,
                            title: Main.pre[i].title,
                            speed: 'km/h',
                            name: 'Speed',
                            suffix: ' km/h',
                            time: Main.pre[i].time
                        }];
                        break;
                    default:
                    console.log("You've Chosen the default 'bar' graph");
                        Main.pre = [{
                            name: Main.pre[i].name || "Default Graph",
                            type: 'bar',
                            yAxis: i,
                            divElem: $('#chart'),
                            title: 'Default bar',
                            name: 'Default Graph',
                            suffix: ' units',
                            data: testNum || 0,
                            time: 5000
                        }];
                }
                console.log("Config Stage 1 -- End Switch Transformation");
            }
        }
    })();
    // Main.configChart(); // IMMEDIATE INVOKING METHOD PREFERED OVER SELF DECLARED

    // if (params.name != null && params.type != null && params.data != null) {
        
    //     switch (params.tooltip.type) {
    //         case 'prefix':
    //             if (params.tooltip.type == "prefix") {
    //                 alert("Prefix Chosen");
    //                 self.tooltip = {
    //                     'valuePrefix': params.tooltip.value
    //                 }
    //             }
    //             break;
    //         case 'suffix':
    //             if (params.tooltip.type == "suffix") {
    //                 alert("Suffix Chosen");
    //                 self.tooltip = {
    //                     'valueSuffix': params.tooltip.value
    //                 }
    //             }
    //             break;
    //         default:
    //             self.tooltip = null;
    //     }    
    // }
    (Main.setOptions = function(config, message) {
        // DISPLAY MESSAGE IF ONE WAS PASSED IN
        if (message != null)
            console.log(message);
        // DETERMINE IF THE CONFIG IS NULL
        if (config != null) {
            console.log("Config found. Creating config.key");
            console.log("Config Stage 2 -- Mirror Main Config Object");
            console.log("Current config object", config);

            // IF CONFIG EXISTS, ITERATE OVER THE ITEMS
            // AND ATTACH THEM TO MAIN.CONFIG
            for (key in config) {
                console.log("Found key: "+'"'+key+'"'+" with data:", config[key]);
    
                Main.config[key] = config[key];
            }


        } else {
            // IF CONFIG IS NULL, ITERATE OVER PRE EXISTING
            // KEY'S AND ATTACH THEM TO MAIN.CONFIG
            console.log("No Config found. Iterating with Main.pre[i]");
            console.log("Config Stage 2 -- Mirror Main Config Object");
            for (var i = 0; i < Main.pre.length; i++) {
                Main.config = Main.pre[i];
                console.log("this is Main.pre["+i+"]", Main.pre[i]);
                
                Main.config.divElem = Main.pre[i].divElem;
                Main.config.title = Main.pre[i].title;
                Main.config.type = Main.pre[i].type;
                Main.config.speed = Main.pre[i].speed;
                Main.config.name = Main.pre[i].name;
                Main.config.suffix = Main.pre[i].suffix;
                Main.config.data = Main.pre[i].data;
                Main.config.time = Main.pre[i].time;
                Main.config.options = Main.pre[i].options;
            }
            console.warn("Main.config now mirrors initial config",Main.config);
        }

        console.log("Config Stage 3 -- Building Options");
        for (var i = 0; i < Main.pre.length; i++) {
            
            // console.log("config",config);
            // console.log("main.config.options",Main.config.options);
            
            if (Main.pre[i].options == null) {
            console.log("You didn't pass in a config.options. Setting default");
            
            // BUILDING MAIN.CONFIG OPTIONS FROM MAIN.PRE[i]
            Main.config = Main.pre[i];
                Main.config.options = {
                    chart: {
                        type: Main.config.type,
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: Main.config.title
                    },

                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },

                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 200,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: Main.config.speed
                        },
                        plotBands: [{
                            from: 0,
                            to: 120,
                            color: '#55BF3B' // green
                        }, {
                            from: 120,
                            to: 160,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 160,
                            to: 200,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: Main.config.name,
                        data: [Main.config.data], // (function(){ return Main.Random(20);}),
                        tooltip: {
                            valueSuffix: Main.config.suffix
                        }
                    }]
                };
            } else {
                console.log("User passed in options. Mirroring config.options");
                for (key in config) {
                    if (config[key] != null) {
                        Main.config.options[key] = config[key];
                    }
                }
                console.log("config",config);
                console.log("main.config.options",Main.config.options);
            }
        }    
    })();
    

    // Add some life
    Main.run = function(chart) {
        console.warn("Chart function enabled with a "+Main.config.time+" ms interval:"+"\n"+"Chart data is:", chart);
        if (!chart.renderer.forExport) {
            var self = Main;
            var interval = 0;

            setInterval(function () {

                var newVal = testNum;
                var inc = Math.round((Math.random() - 0.5) * 20);
                // console.log(Main,"inside of interval");
                // console.log(newVal,"New Val");

                for (var i = 0; i < Main.config.options.series.length; i++) {
                    
                    var points = chart.series[i].points[0];

                    newVal = points.y + inc;
                    if (newVal < 0 || newVal > 200) {
                        newVal = points.y - inc;
                        // console.log(newVal,"is new value")
                    }
                    
                    points.update(newVal);
                    
                    // console.log("Charting this object ---->",chart);
                    // console.log("Adding Point to chart.series["+i+"]points[0]", points);
                    // console.log("Current Drawing Interval: "+(interval+1))

                    interval ++;

                }

            }, Main.config.options.time);
        }
    };
    // SET A DIV KEY ON PRIMARY CONFIG OBJECT
    // FOR USE WITH SHORTENED METHOD
    Main.element = Main.config.divElem;

    // CREATE A CHARTING FUNCTION
    // TO BE INVOKED BY THE USER 
    Main.chartIt = function() {
        self = this;
        self.element.highcharts(self.config.options, self.run)
        // console.log("The Self",self);
        // console.log("Self config options",self.config.options,"Chart It options")
    }
    console.log('Finished Compliling SimpleChart()\n-------------------------------');
}

// DEFINE FAKE TEST OBJECT
var rando = new SimpleChart();




// -----------------
// -- BUTTON SETUP
// -----------------
$('.block').on('click', function() {
    var self = this ;
    console.log("You Clicked This Container:",$(self));

    var config2 = [{
        divElem: $(self),
        title: 'Tachiometer',
        type: 'gauge',
        speed: 'km/h',
        name: 'Speed',
        suffix: ' km/h',
        time: 1000,
        data: rando.grabFirst()
    }];

    var bill = new SimpleChart(config2, 10);
    console.log(bill, "this is bill");

    bill.setOptions({
        chart: {
            type: 'gauge',
            plotBorderWidth: 1,
            plotBackgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            height: 175
        },

        title: {
            text: 'Soil & Light Sensors'
        },

        pane: [{
            startAngle: -20,
            endAngle: 20,
            background: null,
            center: ['25%', '145%'],
            size: 250
        }, {
            startAngle: -20,
            endAngle: 20,
            background: null,
            center: ['50%', '145%'],
            size: 250
        }, {
            startAngle: -20,
            endAngle: 20,
            background: null,
            center: ['75%', '145%'],
            size: 250
        }],

        yAxis: [{
            min: -10,
            max: 35,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: -10,
                to: 10,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 10,
                to: 18,
                color: '#FFFF00',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 18,
                to: 35,
                color: '#33CC33',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 0,
            title: {
                text: 'Tempurature<br/><span style="font-size:8px">Celcius</span>',
                y: -40
            }
        }, {
            min: 0,
            max: 80,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0,
                to: 25,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 25,
                to: 35,
                color: '#FFFF00',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 35,
                to: 80,
                color: '#33CC33',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 1,
            title: {
                text: 'Humidity<br/><span style="font-size:8px">%</span>',
                y: -40
            }
        },{
            min: -10,
            max: 35,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: -10,
                to: 10,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 10,
                to: 18,
                color: '#FFFF00',
                innerRadius: '100%',
                outerRadius: '105%'
            },{
                from: 18,
                to: 35,
                color: '#33CC33',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 2,
            title: {
                text: 'Awesomeness<br/><span style="font-size:8px">Celcius</span>',
                y: -40
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '100%'
                }
            }
        },


        series: [{
            data: [0],
            yAxis: 0
        }, {
            data: [0],
            yAxis: 1
        },{
            data: [0],
            yAxis: 2
        }]
    },"Setting Options for Bill");
    console.log("current bill ----------\n", bill);

    bill.setOptions({title: {
        text: 'Some New Title'
    }},"Setting bills options\n===============");

    // bill.setOptions({pane:(function(){
    //     console.warn("THIS.PANE EXISTS!", this);
    //     this.pane.push([0]);
    // })},"Setting Pane Object");
    console.log("Bill's new options ----------\n", bill);


    // bill.config.divElem.highcharts(bill.config.options, bill.run);
    console.log("Completed Building Bill", bill);
    bill.chartIt();
    // TEST
    // CANNOT SET OPTIONS AFTER HIGH CHARTS INIT
    // bill.setOptions({title: {
    //     text: 'Some New Title'
    // }},"Setting bobs options\n===============");
    
});

$('#default').on('click', function() {

    console.log("Default Action: No Config");

    var config = [{
        divElem: $('#chart'),
        title: 'Column Thing',
        type: 'column',
        suffix: ' Rays Per Hour',
        data: rando.grabFirst(),
        time: 1000
    }];

    var ben = new SimpleChart(config, 2);
    // console.log(ben, "this is ben");

    // console.log("ben div elem",ben.config.divElem);
    // console.log("ben chart",ben.config.options.chart);
    // console.log("ben config options",ben.config.options);

    ben.element.highcharts(ben.config.options, ben.run);
    console.log("Completed Default Action\n-------------------------------");
    
});

$('#newTest').on('click', function() {
    var rando = new SimpleChart();

    var self = this;
    
    self.newChart = document.createElement('div');
    self.newChart.className = "chart-container col-xs-12 col-sm-4 col-md-3";
    self.newChart.textContent = "Simple Chart Failed To Load";

    document.getElementById('chart').appendChild(self.newChart);

    var config = [{
        divElem: $(self.newChart),
        title: $('#name').val() || 'New Dynamic Chart',
        type: $('#type').val() || 'spline',
        suffix: ' Awesomeness',
        data: $('#data').val() || rando.grabFirst(),
        time: parseInt($('#time').val()) || 1000
    }];

    console.log("Internal config", config);

    var craig = new SimpleChart(config, 2);
    craig.chartIt();

    console.log("Completed Default Action\n-------------------------------");

});


$('#pushMore').on('click', function() {
    console.log("Clicked Push More");
    
    var chartElem = document.getElementsByClassName('block');
    chartElem

    console.log(chartElem);


    console.log("Completed Push More Action\n-------------------------------");
});