"use strict"

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secEl = document.querySelector(".sec")
const msEl = document.querySelector(".ms")

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')


let hours, minutes, seconds, count, active

const init = function() {
    hours = 0
    minutes = 0
    seconds = 0
    count = 0
    active = false
    hourEl.textContent = '00'
    minuteEl.textContent = '00'
    secEl.textContent = '00'
    msEl.textContent = '00'
}

init()

const stopwatch = function() {
    if (active===true) {
        count++
        msEl.textContent = String(count).length<2 ? `0${count}` : String(count)
        if (count>99) {
            count = 0
            seconds++
            secEl.textContent = String(seconds).length < 2 ? `0${seconds}` : String(seconds)
            
            if (seconds>59) {
                seconds = 0
                minutes++
                minuteEl.textContent = String(minutes).length<2 ? `0${minutes}` : String(minutes)
                if (minutes>59) {
                    minutes = 0
                    hours++
                    hourEl.textContent = String(hours).length<2 ? `0${hours}` : String(hours)
                }
            }
        }
        setTimeout("stopwatch()", 10)
    }
}

function startFn() {
    active = true
    stopwatch()
}

function stopFn() {
    active = false
}

function resetFn() {
    active = false
    init()
}

startButton.addEventListener('click', startFn)
stopButton.addEventListener('click', stopFn)
resetButton.addEventListener('click', resetFn)