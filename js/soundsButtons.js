export default function chillSoundsButtons({
  forestSoundButton,
  rainSoundButton,
  mallSoundButton,
  bonfireSoundButton,
}) {

function forestToggle() {
  forestSoundButton.classList.toggle('pause')
  forestSoundButton.classList.toggle('selected')
}

function rainToggle() {
  rainSoundButton.classList.toggle('pause')
  rainSoundButton.classList.toggle('selected')
}

function mallToggle() {
  mallSoundButton.classList.toggle('pause')
  mallSoundButton.classList.toggle('selected')
}

function bonfireToggle() {
  bonfireSoundButton.classList.toggle('pause')
  bonfireSoundButton.classList.toggle('selected')
}

return {
  forestToggle,
  rainToggle,
  mallToggle,
  bonfireToggle,
}

}