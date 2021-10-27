/*
여기는 스토리 없는 프로젝트
즉, 내가 해보고싶은 기능들이 들어가있는 프로젝트임
1. 모달
2. 네비게이션 바(드롭다운)
3. 다크모드
4. 로컬 저장, 불러오기
5. 클래스 이용한 예제
6. 날씨 api
7. 영화예매 사이트
8. 커피주문 
9. 슬라이드
*/

export { sel }
import modal from './modal.js'
import nav from './nav.js'

document.addEventListener('DOMContentLoaded', function() {
  modal.init()
  nav.init()
})

let sel = {
  el: selector => document.querySelector(selector),
  elAll: selector => document.querySelectorAll(selector),
  createDom: dom => document.createElement(dom)
}