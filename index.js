/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
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

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/
function delayedFadeOut(div, range) {
  setTimeout(() => {
      fadeOut(div);
  }, range)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {
      fadeIn(div);
  }, range)
}

function fadeAllOut(el, group) {
  let newArray = group.filter(function(element){
    return element!=el;
  });
  delayedFadeOut(el, LONGRANGE);
  newArray.forEach(div => {
    const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
    }
    delayedFadeOut(div, randomNumber(MINDELAY, SHORTRANGE));
  });
}

function fadeAllIn(group) {
  group.forEach(div => {
    const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
    }
    delayedFadeIn(div, randomNumber(MINDELAY, SHORTRANGE));
  });
}
