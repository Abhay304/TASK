//BarGraph
let mybarChart = document.getElementById('myBarChart').getContext('2d');
let barChart = new Chart(mybarChart, {
    type: 'bar',
    data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m', 'n', 'o','p','q','r'],
        datasets: [{
            barThickness: 8,
            data: [210,180,34,67,45,65,76,35,37,89,178,199,68,86,45,33,164,67],
            backgroundColor: ['#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1','#64e0e1','#66a3fb','#64e0e1','#66a3fb','#64e0e1']
        }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
            position: 'bottom'
        }
    },
});

//HorizontalGraph

let myhorizontalChart = document.getElementById('myhorzChart').getContext('2d');
let horzChart = new Chart(myhorizontalChart, {
    type: 'horizontalBar',
    data: {
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 4,
        minBarLength: 2,
        labels: ['New users', 'Page Views', 'Page Sessions', 'Bounce Rate'],
        datasets: [{
            data: [
            65,
            45,
            20,
            85
            ],
            backgroundColor: [
            '#f87eb9',
            '#7fbcff',
            '#7ee5e4',
            '#fcbd88'
            ],
        }]
    },
    options: {

        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
            position: 'bottom'
        }
    }
})

//PieChart
let myPieChart = document.getElementById('myPieChart').getContext('2d');
let Piechart = new Chart(myPieChart, {
    type: 'pie',
    data: {
        labels: ['EMAIL ', 'ORGANIC SEARCH', 'REFFERAL', 'SOCILA MEDIA'],
        weight: 0,
        datasets: [{
            data: [25,
            20,
            30,
            25
            ],
            backgroundColor: [
            '#f87eb9',
            '#7fbcff',
            '#7ee5e4',
            '#fcbd88'
            ]
        }],

    },
    options: {
        title: {
            display: false,
            text: 'Sessions By Channel',
            fontSize: 10

        },
        legend: {
            display: true,
            position: 'bottom'
        }
    }
});