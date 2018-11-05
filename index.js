/************************** DON'T ALTER **************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  el.style.pointerEvents = "none"
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}
/*****************************************************************/

function delayedFadeOut(div, range, min=0) {
  setTimeout(() => {
    fadeOut(div)
  }, Math.random() * range + min)
}

function delayedFadeIn(div, range, min=0) {
  setTimeout(() => {
    fadeIn(div)
  }, Math.random() * range + min)
}

function fadeAllOut(el, group) {
  group.forEach(div => {
    if (div !== el)
      delayedFadeOut(div, SHORTRANGE)
  })
  delayedFadeOut(el, LONGRANGE, MINDELAY)
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
