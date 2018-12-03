//CLOSED CHARTS

var ctxAll = document.getElementById('closedmyChartAll').getContext('2d');
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
            data: [12,	18,	14,	35,	117,	69,
                83,	94,	71,	37,	72,	80,	77,	32,	45,	42,	23,	9,
                35,	38,	40,	34,	38,	37,	33,	34,	35,	30,	34
],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [0, 0, 0, 0, 0, 0, 
                1,	12,	30,	25,	78,	121,	30,	40,	41,	46,	28,	8,
                9,	5,	15,	38,	50,	21,	12,	15,	62,	187,	104
            ],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [6,	9,	28,	15,	25,	11,
                23,	6,	10,	14,	10,	17,	6,	5,	7,	21,	10,	4,
                19,	9,	18,	4,	4,	3,	0,	6,	4,	11,	5
            ],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [4,	10,	9,	5,	11,	15,
                16,	17,	22,	11,	26,	19,	11,	14,	12,	21,	9,	4,
                4,	41,	72,	24,	10,	22,	4,	21,	30,	13,	13
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

var ctx16 = document.getElementById('closedmyChart16').getContext('2d');
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
            data: [12,	18,	14,	35,	117,	69,
                83,	94,	71,	37,	72,	80],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [0, 0, 0, 0, 0, 0, 
                1,	12,	30,	25,	78,	121],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [6,	9,	28,	15,	25,	11,
                23,	6,	10,	14,	10,	17],

        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [4,	10,	9,	5,	11,	15,
                16,	17,	22,	11,	26,	19
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

var ctx17 = document.getElementById('closedmyChart17').getContext('2d');
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
            data: [	77,	32,	45,	42,	23,	9,
                35,	38,	40,	34,	38,	37],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [30,	40,	41,	46,	28,	8,
                9,	5,	15,	38,	50,	21],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [6,	5,	7,	21,	10,	4,
                19,	9,	18,	4,	4,	3],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [11,	14,	12,	21,	9,	4,
                4,	41,	72,	24,	10,	22],
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

var ctx18 = document.getElementById('closedmyChart18').getContext('2d');
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
            data: [33,	34,	35,	30,	34],
        }, {
            label: "Kevin",
            backgroundColor: 'rgba(188, 45, 25, 0)',
            borderColor: 'rgb(121, 182, 218)',
            data: [12,	15,	62,	187,	104],
        },
        {
            label: "Kristen",
            backgroundColor: 'rgba(255, 176, 13, 0)',
            borderColor: 'rgb(255, 176, 13)',
            data: [0,	6,	4,	11,	5],
        }, {
            label: "Stephen",
            backgroundColor: 'rgba(255, 137, 38, 0)',
            borderColor: 'rgb(255, 137, 38)',
            data: [4,	21,	30,	13,	13],
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


//Closed Charts

$(document).ready(function () {
    $("#closedmyChartAll").show();
    $("#closedmyChart16").hide();
    $("#closedmyChart17").hide();
    $("#closedmyChart18").hide();   
    $(".closedoptionAll").show();
    $(".closedoption16").hide();
    $(".closedoption17").hide();
    $(".closedoption18").hide();
    $(".greetingClosed").hide();
    $(".closedAllInfo").show();
    $(".closed16Info").hide();
    $(".closed17Info").hide();
    $(".closed18Info").hide();

});

$("#16drop").click(function(){
    $("#closedmyChart17").hide();
    $("#greetings").hide();
    $("#closedmyChart18").hide();
    $("#closedmyChartAll").hide();
    $("#closedmyChart16").show();
    $(".closedoptionAll").hide();
    $(".closedoption16").show();
    $(".closedoption17").hide();
    $(".closedoption18").hide();
    $(".greetingClosed").hide();
    $(".closedAllInfo").hide();
    $(".closed16Info").show();
    $(".closed17Info").hide();
    $(".closed18Info").hide();
});

$("#17drop").click(function(){
    $("#closedmyChart17").show();
    $("#greetings").hide();
    $("#closedmyChart18").hide();
    $("#closedmyChartAll").hide();
    $("#closedmyChart16").hide();
    $(".closedoptionAll").hide();
    $(".closedoption16").hide();
    $(".closedoption17").show();
    $(".closedoption18").hide();
    $(".greetingClosed").hide();
    $(".closedAllInfo").hide();
    $(".closed16Info").hide();
    $(".closed17Info").show();
    $(".closed18Info").hide();
});

$("#18drop").click(function(){
    $("#closedmyChart17").hide();
    $("#greetings").hide();
    $("#closedmyChart18").show();
    $("#closedmyChartAll").hide();
    $("#closedmyChart16").hide();
    $(".closedoptionAll").hide();
    $(".closedoption16").hide();
    $(".closedoption17").hide();
    $(".closedoption18").show();
    $(".greetingClosed").hide();
    $(".closedAllInfo").hide();
    $(".closed16Info").hide();
    $(".closed17Info").hide();
    $(".closed18Info").show();

});

$("#alldrop").click(function(){
    $("#closedmyChart17").hide();
    $("#greetings").hide();
    $("#closedmyChart18").hide();
    $("#closedmyChartAll").show();
    $("#closedmyChart16").hide();
    $(".closedoptionAll").show();
    $(".closedoption16").hide();
    $(".closedoption17").hide();
    $(".closedoption18").hide();
    $(".greetingClosed").hide();
    $(".closedAllInfo").show();
    $(".closed16Info").hide();
    $(".closed17Info").hide();
    $(".closed18Info").hide();
});
