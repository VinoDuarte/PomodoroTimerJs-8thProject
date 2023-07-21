import { Timer } from "./timer.js"
import chillSoundsButtons from "./soundsButtons.js"
import chillSounds from "./sounds.js"

const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop')
const addTimeButton = document.querySelector('.add')
const subtractTimeButton = document.querySelector('.subtract')

const forestSoundButton = document.querySelector('.forest')
const rainSoundButton = document.querySelector('.rain')
const mallSoundButton = document.querySelector('.mall')
const bonfireSoundButton = document.querySelector('.bonfire')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let audioForest = document.querySelector('.forestReference')
let audioRain = document.querySelector('.rainReference')
let audioMall = document.querySelector('.mallReference')
let audioBonfire = document.querySelector('.bonfireReference')

let minutes
let seconds
let counting

const soundButton = chillSoundsButtons({
  forestSoundButton,
  rainSoundButton,
  mallSoundButton,
  bonfireSoundButton,
})

const sound = chillSounds({
  forestSoundButton,
  audioForest,
  soundButton,
  rainSoundButton,
  audioRain,
  mallSoundButton,
  audioMall,
  bonfireSoundButton,
  audioBonfire,
})

const timing = Timer({ 
  minutesDisplay,
  playButton,
  secondsDisplay,
  clearTimeout,
  counting,
})

playButton.addEventListener('click', () => {timing.Counter()})

stopButton.addEventListener('click', () => {timing.stop()})

addTimeButton.addEventListener('click', () => {timing.add()})

subtractTimeButton.addEventListener('click', () => {timing.subtract()})

forestSoundButton.addEventListener('click', () => {sound.forest()})

rainSoundButton.addEventListener('click', () => {sound.rain()})

mallSoundButton.addEventListener('click', () => {sound.mall()})

bonfireSoundButton.addEventListener('click', () => {sound.bonfire()})