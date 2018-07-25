import '@/assets/css/main.css'
import '@/assets/css/demo/index.css'
const component = () => {
  let div = document.createElement('div')
  div.innerHTML = 'home'
  return div

}
// document.body.appendChild(component())
const showPage = (page) => {
  document.querySelector('.show').classList.add('hide')
  document.querySelector('.show').classList.remove('show')
  document.querySelector('.' + page).classList.remove('hide')
  document.querySelector('.' + page).classList.add('show')
  location.hash = '#' + page
}
if (location.hash) {
  showPage(location.hash.replace('#',''))
}
window.showPage = showPage
// window.addEventListener('scroll', () => {
//   console.log(document.getElementById('test').getBoundingClientRect())
//   console.log(document.getElementById('test').clientX)
// });