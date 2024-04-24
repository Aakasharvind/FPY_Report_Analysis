document.addEventListener('DOMContentLoaded', function() {
    var appointmentChart = document.getElementById('appointment-chart');

    // Sample appointment data (replace with actual data)
    var appointmentData = [
        { month: 'Jan', appointments: 5 },
        { month: 'Feb', appointments: 7 },
        { month: 'Mar', appointments: 10 },
        { month: 'Apr', appointments: 8 },
        { month: 'May', appointments: 6 },
        { month: 'Jun', appointments: 9 },
        { month: 'Jul', appointments: 12 },
        { month: 'Aug', appointments: 11 },
        { month: 'Sep', appointments: 8 },
        { month: 'Oct', appointments: 6 },
        { month: 'Nov', appointments: 7 },
        { month: 'Dec', appointments: 5 }
    ];

    // Create a bar chart for appointment schedule
    var appointmentChartHtml = '<h2>Appointment Schedule for Last 12 Months</h2>';
    appointmentChartHtml += '<div class="appointment-calendar">';
    for (var i = 0; i < appointmentData.length; i++) {
        appointmentChartHtml += '<div class="bar" style="height: ' + (appointmentData[i].appointments * 20) + 'px;">';
        appointmentChartHtml += '<span class="label">' + appointmentData[i].month + '</span>';
        appointmentChartHtml += '</div>';
    }
    appointmentChartHtml += '</div>';

    appointmentChart.innerHTML = appointmentChartHtml;
});
