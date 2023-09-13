let elements = ['install', 'surge-one', 'cname', 'surge-two']
let copied = false

const copy = (element) => {
  let box = document.getElementById(element)
  let boxHidden = box.querySelector('.copy')
  let boxImg = box.querySelector('img')
  navigator.clipboard.writeText(box.querySelector('code').innerText)
  boxImg.setAttribute('src', './images/check.png')
  copied = true
  setTimeout(() => {
    copied = false
    boxHidden.style.opacity = 0
    boxImg.setAttribute('src', './images/copy.png')
  }, 2000)
}

const hover = (element, action) => {
  let box = document.getElementById(element)
  let boxHidden = box.querySelector('.copy')
  if (action === 'over') {
    boxHidden.style.opacity = 1
  } else if (action === 'out' && !copied) {
    boxHidden.style.opacity = 0
  }
}

elements.forEach((element) => {
  let el = document.querySelector(`#${element}`)
  el.addEventListener('mouseover', () => hover(element, 'over'))
  el.addEventListener('mouseout', () => hover(element, 'out'))
  let box = el.querySelector('.copy')
  box.addEventListener('click', () => copy(element))
})
