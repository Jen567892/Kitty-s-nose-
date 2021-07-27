noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/RZs65NQB/147-1478569-cat-whiskers-png.png") ;
}
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
image(video, 0,0,600,600)
image(clown_nose, noseX-112, noseY+10, 180,100)
}

function take_snapshot(){
  save("myFilterImg.png");
}

function modelLoaded(){
  console.log("modelLoaded");

}

function gotPoses(results){
if(results.length > 0){
  console.log(results);
  noseX=results[0].pose.nose.x
  noseY=results[0].pose.nose.y

  console.log(noseX);
  console.log(noseY);
}
}