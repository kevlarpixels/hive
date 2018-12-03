//greetings

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good <br>Evening!';
}

else if (hourNow > 12) {
    greeting = 'Good <br>Afternoon!';
}

else if (hourNow > 0) {
    greeting = 'Good <br>Morning!';
}

else {
    greeting = 'Welcome!';
}

//Charts.js

var ctxAll = document.getElementById('myChartAll').getContext('2d');
var chart = new Chart(ctxAll, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Jonathan",
            backgroundColor: 'rgba(30, 67, 99, 0)',
            borderColor: 'rgb(30, 67, 99)',
            data: [16, 25, 12, 44, 131, 70,
                95,	64,	82,	51,	74,	78,	79,	37,	43,	42,	20,	18,
                70,	24,	47,	37,	44,	44,	22,	32,	31,	37,	27],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [0, 0, 0, 0, 0, 0, 
                    22,	20,	39,	25,	71,	119, 37, 38, 46, 28, 37, 2,
                    18,	15,	17,	50,	53,	23,	17,	23,	57,	200, 88],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [1, 16, 19, 13, 29, 14,
                20,	7,	8,	14,	2,	26,	17,	22,	8,	10,	18,	5,
                23,	9,	6,	0, 0, 5,	8,	10,	7,	17,	24


            ],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [6,	14,	19,	13,	17,	16,
                10,	19,	10,	11,	19,	22,	22,	17,	13,	10,	11,	4,
                44,	85,	33,	26,	22,	19,	15,	17,	23,	9,	26


            ],
        }
        ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Code Enforcement Officers"
        }
    }
});

var ctx16 = document.getElementById('myChart16').getContext('2d');
var chart = new Chart(ctx16, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17"],
        datasets: [{
            label: "Jonathan",
            backgroundColor: 'rgba(30, 67, 99, 0)',
            borderColor: 'rgb(30, 67, 99)',
            data: [16, 25, 12, 44, 131, 70,
                95,	64,	82,	51,	74,	78],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [0, 0, 0, 0, 0, 0, 
                    22,	20,	39,	25,	71,	119],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [1, 16, 19, 13, 29, 14,
                20,	7,	8,	14,	2,	26],

        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [6,	14,	19,	13,	17,	16,
                10,	19,	10,	11,	19,	22


            ],
        }
        ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Code Enforcement Officers"
        }
    }
});

var ctx17 = document.getElementById('myChart17').getContext('2d');
var chart = new Chart(ctx17, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18"],
        datasets: [{
            label: "Jonathan",
            backgroundColor: 'rgba(30, 67, 99, 0)',
            borderColor: 'rgb(30, 67, 99)',
            data: [79,	37,	43,	42,	20,	18,
                70,	24,	47,	37,	44,	44],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [37, 38, 46, 28, 37, 2,
                18,	15,	17,	50,	53,	23],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [17,	22,	8,	10,	18,	5,
                23,	9,	6,	0, 0, 5],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [22, 17, 13, 10, 11, 4, 44, 85, 33, 26, 22, 19],
        }
        ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Code Enforcement Officers"
        }
    }
});

var ctx18 = document.getElementById('myChart18').getContext('2d');
var chart = new Chart(ctx18, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Jonathan",
            backgroundColor: 'rgba(30, 67, 99, 0)',
            borderColor: 'rgb(30, 67, 99)',
            data: [22, 32, 31, 37, 17],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [17, 23, 57, 200, 80],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [8, 10, 7, 17, 18],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [15, 17, 23, 9, 24],
        }
        ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Code Enforcement Officers"
        }
    }
});



$(document).ready(function () {
    $("#myChartAll").show();
    $("#myChart16").hide();
    $("#myChart17").hide();
    $("#myChart18").hide();   
    $(".optionAll").show();
    $(".option16").hide();
    $(".option17").hide();
    $(".option18").hide();
    $(".greetingOpener").show();
    $(".openAllInfo").show();
    $(".open16Info").hide();
    $(".open17Info").hide();
    $(".open18Info").hide();

});

$("#16drop").click(function(){
    $("#myChart17").hide();
    $("#greetings").hide();
    $("#myChart18").hide();
    $("#myChartAll").hide();
    $("#myChart16").show();
    $(".optionAll").hide();
    $(".option16").show();
    $(".option17").hide();
    $(".option18").hide();
    $(".greetingOpener").hide();
    $(".openAllInfo").hide();
    $(".open16Info").show();
    $(".open17Info").hide();
    $(".open18Info").hide();
});

$("#17drop").click(function(){
    $("#myChart17").show();
    $("#greetings").hide();
    $("#myChart18").hide();
    $("#myChartAll").hide();
    $("#myChart16").hide();
    $(".optionAll").hide();
    $(".option16").hide();
    $(".option17").show();
    $(".option18").hide();
    $(".greetingOpener").hide();
    $(".openAllInfo").hide();
    $(".open16Info").hide();
    $(".open17Info").show();
    $(".open18Info").hide();
});

$("#18drop").click(function(){
    $("#myChart17").hide();
    $("#greetings").hide();
    $("#myChart18").show();
    $("#myChartAll").hide();
    $("#myChart16").hide();
    $(".optionAll").hide();
    $(".option16").hide();
    $(".option17").hide();
    $(".option18").show();
    $(".greetingOpener").hide();
    $(".openAllInfo").hide();
    $(".open16Info").hide();
    $(".open17Info").hide();
    $(".open18Info").show();

});

$("#alldrop").click(function(){
    $("#myChart17").hide();
    $("#greetings").hide();
    $("#myChart18").hide();
    $("#myChartAll").show();
    $("#myChart16").hide();
    $(".optionAll").show();
    $(".option16").hide();
    $(".option17").hide();
    $(".option18").hide();
    $(".greetingOpener").hide();
    $(".openAllInfo").show();
    $(".open16Info").hide();
    $(".open17Info").hide();
    $(".open18Info").hide();
});

