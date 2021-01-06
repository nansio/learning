/*
 * @description: 
 * @version: 
 * @Author: ya`nan
 * @Date: 2021-01-06 14:58:35
 * @LastEditors: ya`nan
 * @LastEditTime: 2021-01-06 15:28:20
 */
class UserCard extends HTMLElement {
  constructor() {
    super()
    // // 创建 容器div
    // let container = document.createElement('div')
    // container.classList.add('container')

    // // 创建 头像图片 img
    // let image = document.createElement('img')
    // image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png'
    // image.classList.add('image')

    // // 创建用户名称 p
    // let username = document.createElement('p')
    // username.classList.add('username')
    // username.innerText = 'Woohoo'

    // let email = document.createElement('p')
    // email.classList.add('email')
    // email.innerText = 'super@me.com'

    // let button = document.createElement('button')
    // button.classList.add('button')
    // button.innerText = 'Follow'

    // container.append(username, email, button)
    // this.append(image, container)
    const shadow = this.attachShadow({mode: 'closed'})

    const templateEle = document.querySelector('#userCardTemplate')
    const content = templateEle.content.cloneNode(true)
    content.querySelector('img').setAttribute('src', this.getAttribute('image'))
    content.querySelector('.container>.name').innerText = this.getAttribute('name')
    content.querySelector('.container>.email').innerText = this.getAttribute('email')
    shadow.appendChild(content)

    // 添加监听事件
    this.$button = shadow.querySelector('button')
    this.$button.addEventListener('click', () => {
      alert('Do not click me!')
    })
  }
}

window.customElements.define('user-card', UserCard)