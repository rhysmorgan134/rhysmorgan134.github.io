var cpu = 60
var engine = 15
var dTemp = 20.5
var pTemp = 20.5
var min = 16.0
var max = 27.0
var coe = max - min


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

buttonPressT = function(name, event) {
    if(name === "driverUp") {
        if(dTemp > max) {
            setGauge(100, "driverTempText")
            document.getElementById('driverTempText').innerHTML = 'MAX'
        } else {
            dTemp = dTemp + 0.5
            setGauge(((dTemp - min)/coe) * 100, "driverTempText") 
            document.getElementById('driverTempText').innerHTML = parseFloat(dTemp) + "&#x2103"      
        }
    } else if(name === "driverDown") {
        if(dTemp < min) {
            setGauge(0, "driverTempText")
        } else {
            dTemp = dTemp - 0.5
            setGauge(((dTemp - min)/coe) * 100, "driverTempText")
            document.getElementById('driverTempText').innerHTML = parseFloat(dTemp) + "&#x2103"       
        }
    }else if(name === "passUp") {
        if(pTemp > max) {
            setGauge(100, "passTempText")
            document.getElementById('passTempText').innerHTML = 'MAX'
        } else {
            pTemp = pTemp + 0.5
            setGauge(((pTemp - min)/coe) * 100, "passTempText") 
            document.getElementById('passTempText').innerHTML = parseFloat(pTemp) + "&#x2103"      
        }
    } else if(name === "passDown") {
        if(pTemp < min) {
            setGauge(0, "passTempText")
        } else {
            pTemp = pTemp - 0.5
            setGauge(((pTemp - min)/coe) * 100, "passTempText")
            document.getElementById('passTempText').innerHTML = parseFloat(pTemp) + "&#x2103"       
        }
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
var colour = 0
var red = 145
var green = 152
var blue = 229
var r = 145
var g = 152
var b = 229
var up = 1

setGauge  = function(val, id) {
    
        r = red + Math.round((85 / 100) * val)
        g = green - Math.round((52/100) * val)
        b = blue - Math.round((128/100) * val)
        console.log(val)
        console.log("rgb is: " + "rgb(" + r + "," + g + "," + b + ")")
        document.getElementById(id).style.borderColor = "rgb(" + r + "," + g + "," + b + ")"
 

}

setGauge(((dTemp - min)/coe) * 100, "driverTempText") 
document.getElementById('driverTempText').innerHTML = parseFloat(dTemp) + "&#x2103"

setGauge(((pTemp - min)/coe) * 100, "passTempText") 
document.getElementById('passTempText').innerHTML = parseFloat(pTemp) + "&#x2103"