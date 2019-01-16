var element = document.getElementById("log");
element.innerHTML += "- API de Cordova cargada.<br/>";

function devInfo(){
    let devInfo=document.getElementById("devInfoList");
    devInfo.innerHTML+="<li> PhoneGap Version: "+device.cordova+"</li>"+
    "<li> Modelo: "+device.model+"</li>"+
    "<li> Plataforma: "+device.platform+"</li>"+
    "<li> UUID: "+device.uuid+"</li>"+
    "<li> Version: "+device.version+"</li>"+
    "<li> Tipo de Conexion: "+checkConnection()+"</li>"+
    "<li> Orientacion:"+navigator.compass.getCurrentHeading(onSuccess, onError)+"</li>"+
    "<li> Aceleracion X: "+"</li>"+
    "<li> Aceleracion y: "+"</li>"+
    "<li> Aceleracion z: "+"</li>";

}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Tipo de conexión desconocida';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = 'Cell 2G';
    states[Connection.CELL_3G]  = 'Cell 3G';
    states[Connection.CELL_4G]  = 'Cell 4G';
    states[Connection.CELL]     = 'Cell generic';
    states[Connection.NONE]     = 'Sin conexión';

   return (states[networkState]);
}

function onSuccess(heading) {
    return (heading.magneticHeading);
};

function onError(error) {
    return ('Compass Error: ' + error.code);
};
function onOnline() {
    // Se ha conectado a la red
    element.innerHTML += "- Conexion Online.<br/>"
}

function onOffline() {
    // Se ha perdido la conexión a la red
    element.innerHTML += "- Conexion Offline.<br/>"
}

function onVolumeDownKeyDown() {
    // Se ha producido el evento "volumedownbutton"!
    element.innerHTML += "- Evento volumedownbutton.<br/>"
}

function onVolumeUpKeyDown() {
    // Se ha producido el evento "volumeupbutton"!
    element.innerHTML += "- Evento volumeupbutton.<br/>"
}

function onMenuKeyDown() {
    // Se ha producido el evento "menubutton"!
    element.innerHTML += "- Evento menubutton.<br/>"
 }

 function onBackKeyDown() {
    element.innerHTML += "- Evento backbutton.<br/>"
 }

 function onPause() {
    element.innerHTML += "- Evento pause.<br/>"
}

function onResume() {
    element.innerHTML += "- Evento resume.<br/>"
}