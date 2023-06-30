status_song1="";
status_song2="";
score_left_wrist=0;
score_right_wrist=0;
var song1="";
var song2="";
left_wrist_x="";
left_wrist_y="";
right_wrist_x="";
right_wrist_y="";
 function preload(){
song1=loadSound("Believer(PagalWorld) (1).mp3")
song2=loadSound("videoplayback (1) (1).mp3")
 }

 function setup(){
canvas=createCanvas(600,500);
canvas.center()
video=createCapture(VIDEO)
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotpose);
}

function modelloaded(){
    console.log("model is loaded");
}

function draw(){
image(video,0,0,600,500)

fill("red")
stroke("red")
song1_name=song1.isPlaying()
song2_name=song2.isPlaying()
if(score_left_wrist>0.2){
    circle(left_wrist_x,left_wrist_y,20)
    song2.stop()
    if(song1_name==false){
        song1.play()
        document.getElementById("play_button").innerHTML="song1 is playing"
        }
}

    if(score_right_wrist>0.2){
        circle(right_wrist_x,right_wrist_y,20)
        song1.stop()
        if(song2_name==false){
            song2.play()
            document.getElementById("play_button").innerHTML="song2 is playing"
            }
    }
    
}

function gotpose(results){
    if(results.length>0){
    console.log(results);
    left_wrist_x=results[0].pose.leftWrist.x;
    left_wrist_y=results[0].pose.leftWrist.y;
    console.log(left_wrist_x);
    console.log(left_wrist_y);
    right_wrist_x=results[0].pose.rightWrist.x;
    right_wrist_y=results[0].pose.rightWrist.y;
    console.log(right_wrist_x);
    console.log(right_wrist_y);
    
    score_left_wrist=results[0].pose.keypoints[9].score;
console.log(score_left_wrist)
score_right_wrist=results[0].pose.keypoints[10].score;
console.log(score_right_wrist)
    }
}


