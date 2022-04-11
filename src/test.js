function calculateDayBetweenToDates(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
    
}

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
function getValueFromXml(xml, tag) {
    var value = xml.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
    return value;
}