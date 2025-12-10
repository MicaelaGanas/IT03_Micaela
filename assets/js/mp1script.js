// Problem 2
function searchWord(){
    let sentence = document.getElementById("txtSentence").value;
    let word = "JavaScript is easy easy";

    if (sentence.includes(word) && sentence.trim() === word) {
        document.getElementById("txtSearchResult").innerHTML = `"${word}" found in the sentence.`;
    } else {
        document.getElementById("txtSearchResult").innerHTML = `"${word}" not found in the sentence.`;
    }
}

// Problem 4
function countCharacters() {
    let txt = document.getElementById("txtChar").value;
    let trimmedSentence = txt.replace(/\s+/g, ' ').trim();
    let charCount = trimmedSentence.length;
    document.getElementById("txtCharResult").innerHTML = charCount;
}

/*
Author: Micaela Ganas
Description: This is a demo JS file for Part2A by Micaela Ysabel Ganas.
*/










