function bigger() {
    document.getElementById("inputBox").style.fontSize = "24pt";
}

function changed(){
    if (document.getElementById("fancyBtn").checked){
        document.getElementById("inputBox").style.fontWeight = "bold";
        document.getElementById("inputBox").style.color = "blue";
        document.getElementById("inputBox").style.textDecoration = "underline";
    }
    else {
        document.getElementById("inputBox").style.fontWeight = "normal";
        document.getElementById("inputBox").style.color = "black";
        document.getElementById("inputBox").style.textDecoration = "none";
    }
}

function moo() {
    const text = document.getElementById("inputBox").value.toUpperCase();
    const words = text.split(" ");
    for (let i=0; i<words.length; i++){
        if(words[i].includes(".")){
            const word = words[i].slice(0, -1);
            const newWord = word + "Moo.";
            words[i] = newWord;
        }
    }
    var str = words.join(" ");
    document.getElementById("inputBox").value = str;
}
