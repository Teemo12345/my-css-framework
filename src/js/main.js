import '@/assets/css/main.css'
const component = () => {
  let div = document.createElement('div')
  div.innerHTML = 'home'
  return div

}
document.body.appendChild(component())