export default function sounds({
  forestSoundButton,
  audioForest,
  soundButton,
  rainSoundButton,
  audioRain,
  mallSoundButton,
  audioMall,
  bonfireSoundButton,
  audioBonfire,
}) {

function forest() {
  if(forestSoundButton.classList.contains('pause')) {
    audioForest.play()
    audioForest.loop = true
    soundButton.forestToggle()
  } else {
    audioForest.pause()
    soundButton.forestToggle()
  }
}

function rain() {
  if(rainSoundButton.classList.contains('pause')) {
    audioRain.play()
    audioRain.loop = true
    soundButton.rainToggle()
  } else {
    audioRain.pause()
    soundButton.rainToggle()
  }
}

function mall() {
  if(mallSoundButton.classList.contains('pause')) {
    audioMall.play()
    audioMall.loop = true
    soundButton.mallToggle()
  } else {
    audioMall.pause()
    soundButton.mallToggle()
  }
}

function bonfire() {
  if(bonfireSoundButton.classList.contains('pause')) {
  audioBonfire.play()
  audioBonfire.loop = true
  soundButton.bonfireToggle()
  } else {
  audioBonfire.pause()
  soundButton.bonfireToggle()
  }
}

return {
  forest,
  rain,
  mall,
  bonfire,
}

}