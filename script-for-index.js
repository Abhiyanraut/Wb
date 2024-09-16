let background = localStorage.getItem('background')
const Bswitch = document.getElementById('B')

const enableBackground = () => {
  document.body,classList.add('background')
  localStorage.setItem('background', 'active')
}

const disableBackground = () => {
  document.body,classList.add('background')
  localStorage.setItem('background', null)
}

if(background === "active") enableBackground()

Bswitch.addEventListener('click', () => {
  background = localStorage.getItem('background')
  backgrond !== "active" ? enablebackground() : disablebackground()
}
