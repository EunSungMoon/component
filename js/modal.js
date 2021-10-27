import { sel } from "./app.js";

const tag = '[modal]'
export default {
  init() {
    this.createModal();
    this.click();
    this.xClick();
    this.escClickEvt()
  },

  createModal() {
    let $container = sel.el('.container');
    let modalContent = `
      <div class = "modal" >
        <div class = "modalHead line">
          <h1 class ="h1">모달입니다.</h1>
          <button class = "xBtn">X</button>
        </div>
        
        <div class= "modalBody">
          <span>모달이죠 모달입니다.</span>
        </div>
      </div>
    `
    $container.insertAdjacentHTML('afterbegin', modalContent)
  },

  click(btn) {
    let $container = sel.el('.container');
    let $clickBtn = sel.el('.clickBtn');
    $clickBtn.addEventListener('click', function (e) {
      $container.style.display = 'flex'
    })
  },

  xClick(btn) {
    let $xBtn = sel.el('.xBtn');
    let $container = sel.el('.container');
    $xBtn.addEventListener('click', function () {
      $container.style.display = 'none'
    })
  },

  escClickEvt() {
    let $container = sel.el('.container');
    window.addEventListener('keyup', function (e) {
      if ($container.style.display === 'flex' && e.key === 'Escape') {
        $container.style.display = 'none'
      }
    })
  }
}
