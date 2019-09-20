var ctx = document.getElementById('podcast_plays').getContext('2d');
var podcast_plays = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Bourgeoining Roses', 'Reimagine Music', 'Muhktar"s view', 'Snapback Sports', 'Lagos Gbedu', 'Moyi puts filler'],
        datasets: [{
            label: 'Podcast Plays',
            data: [127, 109, 57, 135, 202, 219],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var monthly = document.getElementById('monthly_usage').getContext('2d');
var myLineChart = new Chart(monthly, {
    type: 'line',
    data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
        datasets: [{
            label: 'Monthly Usage',
            data: [127, 109, 57, 135, 202, 219],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
                'rgba(0,0,0,1)'
            ],
            pointBackgroundColor: 'rgba(0,0,0,0.6)',
            borderWidth: 0
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0
            }
        }
    }
});

var playlistsAdded = document.getElementById('playlists_added').getContext('2d');
var myLineChart = new Chart(playlistsAdded, {
    type: 'line',
    data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
        datasets: [{
            label: 'Monthly Usage',
            data: [127, 109, 93, 82, 62, 65],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
                'rgba(0,0,0,1)'
            ],
            pointBackgroundColor: 'rgba(0,0,0,0.6)',
            borderWidth: 0
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0
            }
        }
    }
});

var radioChannels = document.getElementById('radio_stations').getContext('2d');
var myLineChart = new Chart(radioChannels, {
    type: 'bar',
    data: {
        labels: ['Mukhtar"s', 'Smooth Weekend', 'Sports Life', 'J & L'],
        datasets: [{
            label: 'Top Radio Stations',
            data: [127, 109, 93, 82],
            backgroundColor: [
                'rgba(209, 0, 0, 0.3)',
                'rgba(71, 209, 233, 0.3)',
                'rgba(81, 226, 24, 0.3)',
                'rgba(235, 42, 186, 0.3)'

            ],
            borderColor: [
                'rgba(0,0,0,1)'
            ],
            pointBackgroundColor: 'rgba(0,0,0,0.6)',
            borderWidth: 0
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0
            }
        }
    }
});