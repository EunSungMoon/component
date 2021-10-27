/*
1. 모달
2. 네비게이션 바(드롭다운)
3. 다크모드
4. 로컬 저장, 불러오기
5. 클래스 이용한 예제
계속 추가해보장 
나는 하나 프로젝트를 하기보다.. 기능을 만들어보고싶거덩...

*/

export { sel }
import modal from './modal.js'

document.addEventListener('DOMContentLoaded', function() {
  modal.init()
})

let sel = {
  el: selector => document.querySelector(selector),
  elAll: selector => document.querySelectorAll(selector),
  createDom: dom => document.createElement(dom)
}