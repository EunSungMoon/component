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
    let $modal = sel.el('.modal');
    let $clickBtn = sel.el('.clickBtn');
    $clickBtn.addEventListener('click', function (e) {
      $modal.style.display = 'flex'
    })
  },

  xClick(btn) {
    let $xBtn = sel.el('.xBtn');
    let $modal = sel.el('.modal');
    $xBtn.addEventListener('click', function () {
      $modal.style.display = 'none'
    })
  },

  escClickEvt() {
    let $modal = sel.el('.modal');
    window.addEventListener('keyup', function (e) {
      if ($modal.style.display === 'flex' && e.key === 'Escape') {
        $modal.style.display = 'none'
      }
    })
  }
}
