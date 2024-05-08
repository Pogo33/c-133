img="";
status="";
objects="";

function preload(){
    img=loadImage('bed.jpeg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){

console.log("Model loaded!");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if (error){
    console.log(error);
}
 console.log(results);
 objects=results;
}

function draw(){
    image(img,0,0,640,420);
   


    if (status!=""){
        for (var i=0 ; i <objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("black");
            
            noFill();
            stroke("#FF000");
            rect(objects[i].x, objects[i].y, objects[i].width+400, objects[i].height+250 );
            percent= floor(objects[i].confidence*100);
            text(objects[i].label+" " +percent +" % ", objects[i].x+15, objects[i].y+15);
        }

        }

}
