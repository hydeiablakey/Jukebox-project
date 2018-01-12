function Jukebox() {
    this.song = new Audio();
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

    this.choice1 = function(x){

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


 var jb = new Jukebox();//creating the object

// EVENT LISTENERS (RESPONSE BUTTON ACTIONS)

// When Song same is clicked

function playSong() {
    jb.play();
}
function pauseSong() {
    jb.pause();
}
function stopSong() {
    jb.pause();
    jb.stopCurrentSong();
}

function choice(x)
{
    console.log("value of bool: " + jb.isPlaying);
    if(jb.isPlaying == true){
        console.log("song already playing");
        jb.stopCurrentSong();
        jb.isPlaying = false;
        console.log("..now play new selection");
    }
    jb.choice1(x);
 }