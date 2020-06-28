function getSchedule (idCanvas, percentages) {
    let canvas = document.getElementById(idCanvas);
    let context = canvas.getContext("2d");
    let circlePercentage = (Math.PI * 2) / 100;
    
    let startRound = circlePercentage / 2;
    
    percentages.forEach(percentage => {
        for (let key in percentage) {
            context.beginPath();
            context.arc(60, 60, 58, startRound, startRound + circlePercentage * (parseInt(key) - 1));
            context.lineWidth = 4;
            let gradient = context.createLinearGradient(60, 0, 60, 120);
            gradient.addColorStop(0, percentage[key][0]);
            gradient.addColorStop(1, percentage[key][1]);
            context.strokeStyle = gradient;
            context.stroke();
            context.closePath();
            startRound += circlePercentage * parseInt(key);
        }    
    });
    
}

// let orange = ["#FFE39C", "#FFBA9C"];
// let green = ["#6FCF97", "#66D2EA"];
// let violet = ["#BC9CFF", "#8BA4F9"];

// getSchedule("circle-schedule", [{25: green}, {50: orange}, {25: violet}]);

export {getSchedule};