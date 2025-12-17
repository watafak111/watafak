function calculateLinolium() {
    //Mainīgo vērtību paņemšana no HTML dokumenta
    let roomWidth = parseFloat(document.getElementById("roomWidth").value);
    let roomLenght = parseFloat(document.getElementById("roomLength").value);
    let linoliumWidth = parseFloat(document.getElementById("linoliumWidth").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);

    //pārbaude, vai visi lauki aizpildīti
    if (isNaN(roomWidth) || isNaN(roomLenght) || isNaN(linoliumWidth) || isNaN(linoliumPrice)) {
        alert("Lūdzu ievadiet visus datus pareizi!!!");
        return;
    }

    //Aprēķinu veikšana
    //šķērsām
    let stripsNeededCross = Math.ceil(roomLenght/linoliumWidth);
    let linoliumLenghtCross = stripsNeededCross * roomWidth;
    let linoliumAreaCross = linoliumLenghtCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrice;
    let wasteCross = linoliumAreaCross - (roomWidth*roomLenght);
    let wasteCostCross = wasteCross * linoliumPrice;
    //šķērsām
    let stripsNeededLong = Math.ceil(roomWidth/linoliumWidth);
    let linoliumLenghtLong = stripsNeededLong * roomLenght;
    let linoliumAreaLong = linoliumLenghtLong * linoliumWidth;
    let costLong = linoliumAreaLong * linoliumPrice;
    let wasteLong = linoliumAreaLong - (roomWidth*roomLenght);
    let wasteCostLong = wasteLong * linoliumPrice;

    //Izrēķināto vērtību ievietošana HTML dokumentā rezultātu sadaļā
    document.getElementById("lengthCross").value = linoliumLenghtCross.toFixed(2) + " m";
    document.getElementById("costCross").value = costCross.toFixed(2) + " EUR";
    document.getElementById("wasteCross").value = wasteCross.toFixed(2) + " m2";
    document.getElementById("wasteCostCross").value = wasteCostCross.toFixed(2) + " EUR";

    document.getElementById("lengthLong").value = linoliumLenghtLong.toFixed(2) + " m";
    document.getElementById("costLong").value = costLong.toFixed(2) + " EUR";
    document.getElementById("wasteLong").value = wasteLong.toFixed(2) + " m2";
    document.getElementById("wasteCostLong").value = wasteCostLong.toFixed(2) + " EUR";


}