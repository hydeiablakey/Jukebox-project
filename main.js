function Jukebox() {
    this.song = null;
    this.isPlaying = false;

    this.play = function() {
        song.play();
        this.isPlaying = true;
    }

    this.pause= function(){
        song.pause();
        this.isPlaying = false;
    }
    this.stopCurrentSong= function(){
        song.pause();
        this.isPlaying = false;
        song.currentTime = 0;
    }

    this.choice1 = function( x ){
        if(x==1){
            document.getElementById('aP').src= "album/naked.jpg";
            song=new Audio ("audio/James_Arthur_Naked.mp3");
            this.play();
        }
        else if(x==2){
            document.getElementById('aP').src= "album/newrules.jpg";
            song=new Audio ("audio/New_Rules.mp3");
            this.play();
        }
        else if(x==3) {
            document.getElementById('aP').src= "album/prettyhurts.jpg";
            song=new Audio ("audio/Pretty_Hurts.mp3");
            this.play();
        }
        else if(x==4) {
            document.getElementById('aP').src= "album/darte.jpg";
            song=new Audio ("audio/Darte_un_Beso.mp3");
            this.play();
        }
        else if(x==5) {
            document.getElementById('aP').src= "album/latch.png";
            song=new Audio ("audio/Latch.mp3");
            this.play();
        }
        else if (x==6) {
            document.getElementById('aP').src= "album/figures.jpg";
            song= new Audio ("audio/Figures.mp3");
            this.play();
        }
    }
}

// ------------ Spinning Record ----------
var spinControl;        // controls timer (stops when cleared)
var degrees = 1;        // Keeps track of records current degree
var isSpinning = false;
// Starts the timed function to rotate record div
function spinTheRecord(){
    var record = document.getElementById("record");
    console.log("Begin spinning");
    if(!isSpinning)  // remove if for funny effect   :) *tap play alot*
        spinControl = setInterval(rotateFunction, 10, record);
    isSpinning = true;
}

// Called every 10milliseconds to rotate div 1 degree
function rotateFunction(recordElem){
    console.log("Currently spinning");
    recordElem.style.transform = "rotate(" +degrees+ "deg)";
    degrees++;
    degrees = degrees%360;
}

// Stops the record div from spinning
function stopTheRecord(){
    console.log("Stop spinning");
    clearInterval(spinControl); // timer control is stopped
    isSpinning = false;
}

// Sets record to 0degree rotation (for new record effect)
function resetRecord(){
    var record = document.getElementById("record");
    degrees=0;
    record.style.transform = "rotate("+degrees+"deg)";
}

// ============================================

// Create a Jukebox instance
 var jb = new Jukebox();



// ====== EVENT LISTENERS (RESPONSE BUTTON ACTIONS) =======

// When Play Button is clicked
function playSong() {
    jb.play();
    spinTheRecord();
}

//When Pause Button is clicked
function pauseSong() {
    jb.pause();
    stopTheRecord();
}

// When Stop Button is clicked
function stopSong() {
    jb.pause();
    jb.stopCurrentSong();
    resetRecord();
    stopTheRecord();
}

// When Song same is clicked
function choice(x)
{
    if(jb.isPlaying == true){
        jb.stopCurrentSong();
        jb.isPlaying = false;
        stopTheRecord();
        resetRecord();
    }
    jb.choice1(x);
    spinTheRecord();
 }
