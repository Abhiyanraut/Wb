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

Bswitch.addEventListener('click', () => {
  backgrond !== "active" ? enablebackground() : disablebackground()
}
