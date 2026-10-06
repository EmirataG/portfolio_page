const root = document.documentElement
const lightSwitch = document.querySelector<HTMLButtonElement>('#switch')!

function setLamp(on: boolean) {
  if (on) delete root.dataset.lamp
  else root.dataset.lamp = 'off'
  lightSwitch.setAttribute('aria-checked', String(on))
}

setLamp(root.dataset.lamp !== 'off')

lightSwitch.addEventListener('click', () => {
  const on = root.dataset.lamp === 'off'
  setLamp(on)
  try {
    localStorage.setItem('lamp', on ? 'on' : 'off')
  } catch {
    // storage unavailable; the choice just won't persist
  }
})
