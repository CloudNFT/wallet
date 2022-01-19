
async function Devices() {
   document.getElementById('dev').innerHTML = JSON.stringify(await navigator.mediaDevices.enumerateDevices())
}

 Devices()
