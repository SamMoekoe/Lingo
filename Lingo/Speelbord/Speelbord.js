var attempts = 0;
var input = [];
var answer = [];


function start() {
    answer = Array.from(words[getRandom(0, words.length)].toUpperCase());
    attempts = 0;

    for (var row = 0; row < 5; row++) {
        for (var col = 0; col < 5; col++) {
            document.getElementById(row + "-" + col).innerHTML = "";
            document.getElementById(row + "-" + col).className = "letter";
        }
    }

    firstLetter();
}

function check() {
    input = Array.from(document.getElementById("input-box").value.toUpperCase());

    // maakt een temporary varuable aan
    var tempAnswer = [answer[0], answer[1], answer[2], answer[3], answer[4]];

    if (input.length == 5) {

        if (input.toString() == answer.toString()) {
            alert("U Heeft het woord geraden!");
        }

        for (var i = 0; i < 5; i++) {
            // checkt letter voor letter of een letter op de goede plaats staat
            if (tempAnswer[i] == input[i]) {
                // ID div
                var id = attempts + "-" + i;
                // veranderd letter naar groen
                document.getElementById(id).className += " green";
                // veranderd letter naar een streepje zodat deze straks niet dubbel gechekt wordt
                tempAnswer[i] = "-"; 
                
            }
        }

        // letters die geel moeten zijn
        for (var i = 0; i < 5; i++) {
            // kijkt of tempAnswer de i'ste letter bevat
            if (tempAnswer.includes(input[i])) {
                // kijkt of dat de letter die hij gevonden heeft niet al een keer gepakt is
                if (tempAnswer[i] != "-") {
                    //
                var id = attempts + "-" + i;
                document.getElementById(id).className += " yellow";
                //
                // pakt de positie van de (input[i]) letter
                // en vervangt de letter met een streepje
                var a = tempAnswer.indexOf(input[i]);
                tempAnswer[a] = "-";
            }
        }
            else if (tempAnswer[i] != "-") {
                var id = attempts + "-" + i;
                document.getElementById(id).className = "letter";
                // console.log(i + " zit er niet in, " + tempAnswer);
            }
        }
        console.log("tempAnswer after: "+ tempAnswer);
        
        writeLetter(input);
        if (attempts == 4) {
            alert("Helaas je hebt het word niet geraden. Het woord is:" + answer)
        }
        attempts++;

    } else {
        alert("Input is te klein of te groot. Het moet altijd 5 letters zijn.")
    }
}
function writeLetter(putin) {
    for (var i = 0; i < 5; i++) {
        var id = attempts + "-" + i;
        document.getElementById(id).innerHTML = putin[i];
    }

}

function firstLetter() {
    document.getElementById("0-0").innerHTML = answer[0];
    document.getElementById("0-0").className += " green";
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}