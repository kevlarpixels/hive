//CLOSED CHARTS

var ctxAll = document.getElementById('vsmyChartAll').getContext('2d');
var chart = new Chart(ctxAll, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Close",
            backgroundColor: 'rgba(30, 67, 99, 0.3)',
            borderColor: 'rgb(30, 67, 99)',
            data: [22, 37, 51, 55, 153, 95,
                123, 129, 133, 87, 186, 237, 124, 91, 105, 130, 70, 25,
                67, 93, 145, 100, 102, 83, 49, 76, 131, 241, 156
            ],
        }, {
            label: "Open",
            backgroundColor: 'rgba(188, 45, 25, 0.3)',
            borderColor: 'rgb(121, 182, 218)',
            data: [23,	55,	50,	70,	177,	100,
                147,	110,	139,	101,	166,	245,	155,	114,	110,	90,	86,	29,
                155,	133,	103,	113,	119,	91,	62,	82,	118,	263,	165

            ],
        },]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Department's Case"
        }
    }
});

var ctx16 = document.getElementById('vsmyChart16').getContext('2d');
var chart = new Chart(ctx16, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Close",
            backgroundColor: 'rgba(30, 67, 99, 0.3)',
            borderColor: 'rgb(30, 67, 99)',
            data: [12,	18,	14,	35,	117,	69,
                83,	94,	71,	37,	72,	80,	77,	32,	45,	42,	23,	9,
                35,	38,	40,	34,	38,	37,	33,	34,	35,	30,	34

            ],
        }, {
            label: "Open",
            backgroundColor: 'rgba(188, 45, 25, 0.3)',
            borderColor: 'rgb(121, 182, 218)',
            data: [16,	25,	12,	44,	131,	70,
                95,	64,	82,	51,	74,	78,	79,	37,	43,	42,	20,	18,
                70,	24,	47,	37,	44,	44,	22,	32,	31,	37,	27

            ],
        },]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Jonathan"
        }
    }
});

var ctx17 = document.getElementById('vsmyChart17').getContext('2d');
var chart = new Chart(ctx17, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Close",
            backgroundColor: 'rgba(30, 67, 99, 0.3)',
            borderColor: 'rgb(30, 67, 99)',
            data: [1,	12,	30,	25,	78,	121,	30,	40,	41,	46,	28,	8,
                9,	5,	15,	38,	50,	21,	12,	15,	62,	187,	104

            ],
        }, {
            label: "Open",
            backgroundColor: 'rgba(188, 45, 25, 0.3)',
            borderColor: 'rgb(121, 182, 218)',
            data: [22,	20,	39,	25,	71,	119,	37,	38,	46,	28,	37,	2,
                18,	15,	17,	50,	53,	23,	17,	23,	57,	200,	88

            ],
        },]
    },
    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Kevin"
        }
    }
});

var ctx18 = document.getElementById('vsmyChart18').getContext('2d');
var chart = new Chart(ctx18, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Close",
            backgroundColor: 'rgba(30, 67, 99, 0.3)',
            borderColor: 'rgb(30, 67, 99)',
            data: [6,	9,	28,	15,	25,	11,
                23,	6,	10,	14,	10,	17,	6,	5,	7,	21,	10,	4,
                19,	9,	18,	4,	4,	3,		6,	4,	11,	5
            ],
        }, {
            label: "Open",
            backgroundColor: 'rgba(188, 45, 25, 0.3)',
            borderColor: 'rgb(121, 182, 218)',
            data: [1,	16,	19,	13,	29,
                20,	7,	8,	14,	2,	26,	17,	22,	8,	10,	18,	5,
                23,	9,	6,	0,	0,	5,	8,	10,	7,	17,	24

            ],
        },]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Kristen"
        }
    }
});

var ctx18 = document.getElementById('vsmyChart19').getContext('2d');
var chart = new Chart(ctx18, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["July 16", "August 16", "September 16", "October 16", "November 16", "December 16",
            "January 17", "February 17", "March 17", "April 17", "May 17", "June 17", "July 17", "August 17", "September 17", "October 17", "November 17", "December 17",
            "January 18", "February 18", "March 18", "April 18", "May 18", "June 18", "July 18", "August 18", "September 18", "October 18", "November 18"],
        datasets: [{
            label: "Close",
            backgroundColor: 'rgba(30, 67, 99, 0.3)',
            borderColor: 'rgb(30, 67, 99)',
            data: [4,	10,	9,	5,	11,	15,
                16,	17,	22,	11,	26,	19,	11,	14,	12,	21,	9,	4,
                4,	41,	72,	24,	10,	22,	4,	21,	30,	13,	13

            ],
        }, {
            label: "Open",
            backgroundColor: 'rgba(188, 45, 25, 0.3)',
            borderColor: 'rgb(121, 182, 218)',
            data: [6,	14,	19,	13,	17,	16,
                10,	19,	10,	11,	19,	22,	22,	17,	13,	10,	11,	4,
                44,	85,	33,	26,	22,	19,	15,	17,	23,	9,	26

            ],
        },]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Stephen"
        }
    }
});


//Closed Charts

$(document).ready(function () {
    $("#vsmyChartAll").show();
    $("#vsmyChart16").hide();
    $("#vsmyChart17").hide();
    $("#vsmyChart18").hide();
    $("#vsmyChart19").hide();
    $(".vsoptionAll").show();
    $(".vsoption16").hide();
    $(".vsoption17").hide();
    $(".vsoption18").hide();
    $(".greetingvs").hide();
    $(".vsAllInfo").show();
    $(".vs16Info").hide();
    $(".vs17Info").hide();
    $(".vs18Info").hide();
    $(".vs19Info").hide();

});

$("#vsJonathandrop").click(function () {
    $("#vsmyChart17").hide();
    $("#greetings").hide();
    $("#vsmyChart18").hide();
    $("#vsmyChartAll").hide();
    $("#vsmyChart16").show();
    $("#vsmyChart19").hide();
    $(".vsoptionAll").hide();
    $(".vsoption16").show();
    $(".vsoption17").hide();
    $(".vsoption18").hide();
    $(".greetingvs").hide();
    $(".vsAllInfo").hide();
    $(".vs16Info").show();
    $(".vs17Info").hide();
    $(".vs18Info").hide();
    $(".vs19Info").hide();
});

$("#vsKevindrop").click(function () {
    $("#vsmyChart17").show();
    $("#greetings").hide();
    $("#vsmyChart18").hide();
    $("#vsmyChartAll").hide();
    $("#vsmyChart16").hide();
    $("#vsmyChart19").hide();
    $(".vsoptionAll").hide();
    $(".vsoption16").hide();
    $(".vsoption17").show();
    $(".vsoption18").hide();
    $(".greetingvs").hide();
    $(".vsAllInfo").hide();
    $(".vs16Info").hide();
    $(".vs17Info").show();
    $(".vs18Info").hide();
    $(".vs19Info").hide();

});

$("#vsKristendrop").click(function () {
    $("#vsmyChart17").hide();
    $("#greetings").hide();
    $("#vsmyChart18").show();
    $("#vsmyChartAll").hide();
    $("#vsmyChart16").hide();
    $("#vsmyChart19").hide();
    $(".vsoptionAll").hide();
    $(".vsoption16").hide();
    $(".vsoption17").hide();
    $(".vsoption18").show();
    $(".greetingvs").hide();
    $(".vsAllInfo").hide();
    $(".vs16Info").hide();
    $(".vs17Info").hide();
    $(".vs18Info").show();
    $(".vs19Info").hide();


});

$("#vsalldrop").click(function () {
    $("#vsmyChart17").hide();
    $("#greetings").hide();
    $("#vsmyChart18").hide();
    $("#vsmyChartAll").show();
    $("#vsmyChart16").hide();
    $("#vsmyChart19").hide();
    $(".vsoptionAll").show();
    $(".vsoption16").hide();
    $(".vsoption17").hide();
    $(".vsoption18").hide();
    $(".greetingvs").hide();
    $(".vsAllInfo").show();
    $(".vs16Info").hide();
    $(".vs17Info").hide();
    $(".vs18Info").hide();
    $(".vs19Info").hide();

});

$("#vsStephendrop").click(function () {
    $("#vsmyChart17").hide();
    $("#greetings").hide();
    $("#vsmyChart18").hide();
    $("#vsmyChartAll").hide();
    $("#vsmyChart16").hide();
    $("#vsmyChart19").show();
    $(".vsoptionAll").hide();
    $(".vsoption16").hide();
    $(".vsoption17").hide();
    $(".vsoption18").hide();
    $(".greetingvs").hide();
    $(".vsAllInfo").hide();
    $(".vs16Info").hide();
    $(".vs17Info").hide();
    $(".vs19Info").show();
    $(".vs18Info").hide();
});
