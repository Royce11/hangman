function init() {
    var level=prompt("Enter Level (Easy/Hard)","Hard");
     document.getElementById("man").innerHTML="<img src='img/0.png'/>"
    nameArr=["NAGALAND/KOHIMA","MIZORAM/AIZAWL","RAJASTHAN/JAIPUR","TRIPURA/AGARTALA","MEGHALAYA/SHILLONG","ASSAM/DISPUR","MANIPUR/IMPHAL","CHHATISGARH/RAIPUR","MADHYAPRADESH/BHOPAL","SIKKIM/GANGTOK"];
    index=Math.floor((Math.random() * nameArr.length) + 0);
    origword=nameArr[index];
    word="";
    c=0;
    if(level==null) {
        alert("Please Enter valid input(easy/hard)");
            location.href="hangman.html";
    }
    else if(level.toUpperCase()=="EASY") {
        for(var i=0; i<nameArr[index].length; i++) {
            if((nameArr[index].charAt(i)=="A")||(nameArr[index].charAt(i)=="E")||(nameArr[index].charAt(i)=="I")||(nameArr[index].charAt(i)=="O")||(nameArr[index].charAt(i)=="U"))
                word+=nameArr[index].charAt(i);
            else if(nameArr[index].charAt(i)=="/")
                word+="/";
            else
                word+="_";
        }
        document.getElementById("a").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("o").disabled=true;
        document.getElementById("u").disabled=true;
        document.getElementById("a").style.background="#EB3838";
        document.getElementById("e").style.background="#EB3838";
        document.getElementById("i").style.background="#EB3838";
        document.getElementById("o").style.background="#EB3838";
        document.getElementById("u").style.background="#EB3838";
    }
    else if(level.toUpperCase()=="HARD") {
        for(var i=0; i<nameArr[index].length; i++) {
            if(nameArr[index].charAt(i)=="/")
                word+="/";
            else
                word+="_";
        }   
    }
    else{
        alert("Please Enter valid input(easy/hard)");
            location.href="hangman.html";
    }
        
    document.getElementById("word").innerHTML=word;
    console.log(word);
    
        console.log(nameArr[index]);
       }
function check(id) {
    var flag=0;
    console.log(word);
    console.log(origword);
    
	for(var i=0; i<word.length; i++) {
        
        if(origword.charAt(i)==id.toUpperCase()) {
               // console.log(origword.charAt(i));
            //    console.log(id);
                word=word.substr(0,i)+id.toUpperCase()+word.substr(i+1);
              //  console.log(word[i]);
                flag=1;
        }
    }
    if(origword.toUpperCase()==word.toUpperCase()){
            location.href="win.html"
	}
    imgArr=["1.png","2.png","3.png","4.png","5.png","6.png","7.png"];
    if(flag==0) {
        document.getElementById("man").innerHTML="<img src='img/"+imgArr[c]+"'/>"
        c++;   
        if(c==7)
            location.href="lost.html"
    }
    document.getElementById("word").innerHTML=word;
    document.getElementById(id).disabled=true;
    document.getElementById(id).style.background="#EB3838";
   // console.log(word);
}