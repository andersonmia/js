window.onload = function() {
    document.querySelector("#compute").onclick=sentenceReverser;
    place = document.querySelector("#words");
};

let place,
filterCount=0;

function sentenceReverser() {
    place.innerHTML=""
    filterCount=0;
    let phrase=document.querySelector("#phrase").value,
    filter=document.querySelector("#filter").value,
    currentWord="";

    for(let i = phrase.length-1; i>=0; i--){
        if (phrase[i]==" ") {
            addWord(currentWord,filter);
            currentWord="";
        }
        else {
            currentWord=phrase[i]+currentWord;
            if (i==0) {
                addWord(currentWord,filter);
            }
        }       
    }
    document.querySelector("#count").innerHTML= filterCount
    ?`${filterCount} word(s) filtered out`
    :"";
    
    function addWord(word,filter) {
        if (filter==""|| !phrase.toLowerCase().includes(filter.toLowerCase())) {
            let span = document.createElement('span');
            span.className="word";
            span.innerHTML = word;
            place.appendChild(span);
        } else {
           filterCount++; 
        }
    }
}