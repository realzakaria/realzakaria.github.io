
//let aantalWorpen = leesGeheelGetal("Geef het aantal keer dat uw hebt gegooit met twee dobbelstenen (minimum 50, maximum 100)");
let resultaten;

//let dobbelstenenResultaat = initialiseer2DArray(aantalWorpen, 2);


function willekeurigGetal(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function schrijf(waarde) {
    document.writeln(waarde + "<br>");
}

function initialiseer2DArray(rijen, kolommen) {
    let arrReturn = new Array();
    for (let i = 0; i < rijen; i++) {
        let arrRow = new Array();
        for (let j = 0; j < kolommen; j++) {
            arrRow.push(willekeurigGetal(1, 6));
        }
        arrReturn.push(arrRow);
    }
    return arrReturn;
}


function tradeResultsArray() {
    let initialInvest= 10000
    let percentage =0;
    let maxStr=0,minStr=0,strP =0,strN = 0,p=0,n=0;
    let arrReturn = new Array();
    for (let i = 0; i < 1440; i++) {
        if(i%240==0)
        document.write("<h1> year: "+i/240+" losses: "+n+" wins: "+p +" percentage: "+ Math.round((percentage/i)*100) +"% p: "+maxStr+" n: "+minStr +" revenue: "+Math.round(initialInvest)+ "</h1>");

        let arrRow = new Array()
        let tradeResult = willekeurigGetal(1, 10000)>4999?1:0;
            arrRow.push(tradeResult);
             if(tradeResult==0){
                n++
                strP=0;
                initialInvest =initialInvest*0.98;
                strN++;
                if(strN>minStr){
                    minStr=strN;
                }

                /* strN=0;
             initialInvest =initialInvest*1.015
             percentage++;
             strP++;
             if(strP>maxStr){
                maxStr=strP;
            }*/
             
             }
            else {
                p++
                strN=0;
             initialInvest =initialInvest*1.04
             percentage++;
             strP++;
             if(strP>maxStr){
                maxStr=strP;
             }

               /* strP=0;
                initialInvest =initialInvest*0.99;
                strN++;
                if(strN>minStr){
                    minStr=strN;
                }*/
            }
            arrRow.push(initialInvest);
        
        arrReturn.push(arrRow);
    }
    document.write("<h1> year 6:  losses: "+n+" wins: "+p +" percentage: "+ Math.round((percentage/1440)*100) +"% p: "+maxStr+" n: "+minStr +" revenue: "+Math.round(initialInvest)+ "</h1>");
    return arrReturn;
}

function tradeResults(rijen)
{
    let arrReturn = new Array();
    for (let i = 0; i < rijen; i++) {
        arrRow.push(willekeurigGetal(1, 10)>4?1:0)

    }
    return arrReturn;

}

function leesGeheelGetal(tekst) {
    return parseInt(prompt(tekst))
}

function toon2DArray(arrTeTonen, titel = "") {
    document.write("<h1>" + titel + "</h1>");

    // tabel starten
    document.write("<table border=1 style=\"border-collapse:collapse;\">");

    for (let i = 0; i < arrTeTonen.length; i++) { // aantal rijen
        // hier begint rij
        document.write("<tr>");
        document.write("<td style=\"text-align:center;\">" + (i+1) + "</td>");
        for (let j = 0; j < arrTeTonen[i].length; j++) { // aantal kolommen
            document.write("<td style=\"text-align:center;\">" + arrTeTonen[i][j] + "</td>");
            if(j==1 && (i+1)%20==0)document.write("<td style=\"text-align:center;\">" + (arrTeTonen[i-19][j]/arrTeTonen[i][j])*100 + "</td>");

        }
        // hier eindigt rij
        document.write("</tr>");
    }
    document.write("</table>");
}

//console.log(dobbelstenenResultaat);



console.log(resultaten)

function resultatenTonen(resultaten){

    schrijf("Aantal keer gegooid: "+aantalWorpen)
    for (let i = 0; i < resultaten.length; i++) {
        if(i==0)
            schrijf("Aantal verschillend: "+resultaten[0])
        else
            schrijf("Aantal dubbel "+i+": "+resultaten[i]);
    }
}

function percentageTonen(resultaten){
    
    schrijf("In procenten uitgedrukt: ")
    for (let i = 0; i < resultaten.length; i++) {
        if(i==0)
            schrijf(" Verschillende gooien: "+(resultaten[i]/aantalWorpen)*100)
        else
            schrijf(i+": "+(resultaten[i]/aantalWorpen)*100);
    }
}


function vergelijkGooien(dobbelStenenArray){

     let resultaten = new Array(7);
    for(let i=0; i<resultaten.length;i++)
        resultaten[i]=0;
   console.log(resultaten);

    for (let i = 0; i < dobbelStenenArray.length; i++) { // aantal rijen
        // hier begint rij
        if(dobbelStenenArray[i][0] != dobbelStenenArray[i][1])
            resultaten[0]++;
            for(let j=1;j<7;j++)
             if (dobbelStenenArray[i][0]===j && dobbelStenenArray[i][1]===j)
             resultaten[j]++;
    }
return resultaten;

}

/*while (aantalWorpen < 50 || aantalWorpen > 100) {
    alert("Fout: geen geldig aantal .")
    aantalWorpen= leesGeheelGetal("Geef het aantal keer dat uw hebt gegooit met twee dobbelstenen (minimum 50, maximum 100)");
}*/
resultaten = tradeResultsArray();
toon2DArray(resultaten, titel = "trades")

//resultaten = vergelijkGooien(dobbelstenenResultaat, resultaten);
//resultatenTonen(resultaten);
//percentageTonen(resultaten);
///
