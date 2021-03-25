document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    loadStudents();
    $("#camera-btn").click(getPicutre);
    $("#addPicture").click(sendPictureRequest);
}
