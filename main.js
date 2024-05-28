

noseX = 0;
noseY = 0;

function preload(){;
    clown_nose = loadImage('https://i.postimg.cc/257FVSQV/IMG-5514.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet está inicializado");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 100;
        noseY = results[0].pose.nose.y - 120;
        console.log("posicion x = "+ results[0].pose.nose.x);
        console.log("posicion y = "+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY,195,195)
}

function take_snapshot(){
    save('MiFiltro.png');
}