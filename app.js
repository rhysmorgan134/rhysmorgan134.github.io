var cpu = 60
var engine = 15

buttonPress = function(name, event) {
    var k = name
    var col = rgb2hex(document.getElementById(k).style.backgroundColor)
    console.log(col)
    console.log(document.getElementById(name).style.backgroundColor)
    if(col === '#ff9933') {
        document.getElementById(k).style.backgroundColor =  '#161625'
    } else {
        document.getElementById(k).style.backgroundColor =  '#FF9933' 
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

buttonRel = function(name, event) {
    console.log("released")
}

var tempReached = 0

setInterval(() => {
    cpu = getRandomInt(cpu - 2, cpu + 2)
    if(cpu < 50) {cpu = 55}
    if(cpu > 90) {cpu = 75}
    document.getElementById('cpu').innerHTML = cpu + "&#x2103"
    if(cpu > 65) {
        document.getElementById('temp').style.color = "#b22222"
    } else {
        document.getElementById('temp').style.color = "#e1e1ff"
    }
    
    if(engine < 84) {
        engine = engine + 1
    } else {
        engine = getRandomInt(engine -1, engine + 3)
        if (engine<85) {
            engine = 85
            document.getElementById('eTemp').src = "./img/engineTemp.png"
        } else if (engine > 100) {
            document.getElementById('eTemp').src = "./img/engineTempRed.png"
            if(engine > 105) {
                engine = 105
            }
        }
    }
    document.getElementById('eTempText').innerHTML = engine + "&#x2103"

}, 500)



function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
   }