import { sel } from "./app.js";

const tag = '[nav]'
export default {
  init() {
    this.navbar()
  },

  navbar() {
    let $nav = sel.el('.nav')
    let navContent = `
      <nav>
        <div class = "logo">
          <h1>The Nav</h1>
        </div>
        <ul class= "nav-links">
          <li>
            <a href = "#">Home</a>
          </li>
          <li>
            <a href = "#">About</a>
          </li>
          <li>
            <a href = "#">Works</a>
          </li>
          <li>
            <a href = "#">Projects</a>
          </li>
        </ul>
        <div class = "burger">
          <div class = "line1"></div>
          <div class = "line2"></div>
          <div class = "line3"></div>
        </div>
      </nav>
    `

    $nav.insertAdjacentHTML('afterbegin', navContent)
  },

  navEvent() {

  }

}