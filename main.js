
nose_x = 0;
nose_y = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posenet initialise');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = leftWrist - rightWrist;
}
function draw() {
    background('#969897');
    textSize(difference);
    text('Anvi', nose_x, nose_y);
    fill(0, 102, 153);
}