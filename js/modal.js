import { sel } from "./app.js";

export default {
  init() {
    this.modalTemplate()
    this.event()
  },

  event() {
    this.btnEvent('.openBtn', this.addClass)
    this.btnEvent('.closeBtn', this.removeClass)
    this.btnEvent('.checkBtn', this.removeClass)
  },

  modalTemplate() {
    let content = `
      <article class = "modalForm modal-bg">
        <div class = "modalContent">
          <header>
            <h1>title</h1>
            <button type = "button" class = "closeBtn">X</button>
          </header>
          <main>modal Content</main>
          <footer>
            <button type = "button" class = "checkBtn">check</button>
          </footer>
        </div>
      </article>
    `
    sel.el('#modal').insertAdjacentHTML('afterbegin', content);
  },

  addClass() {
    sel.el('.modalForm').classList.add('open');
  },

  removeClass() {
    sel.el('.modalForm').classList.remove('open')

  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  }
}
