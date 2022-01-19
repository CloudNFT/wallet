
async function cap(){
  const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const captureButton = document.getElementById('capture');

  const constraints = {
   video: {
    width: {
      min: 1280,   
      max: 2560,
      ideal: 1920
    },
    height: {
      min: 720,    
      max: 1440,
      ideal: 1080
    },
    facingMode: {
      exact: 'environment' //belakang
    }
  }
};

  captureButton.addEventListener('click', () => {
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
  });

  // Attach the video stream to the video element and autoplay.
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });

  
}

cap()
