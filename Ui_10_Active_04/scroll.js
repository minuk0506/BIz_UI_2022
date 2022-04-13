// DOMContentLoaded 현재 화면의 모든 요소들이 다 그려지면, 완성되면
// js 코드를 시작하겠다 라는 의미
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  //화면에 스크롤이 발생하면 실행하기
  document.addEventListener("scroll", () => {
    const windowTop = window.scrollY;
    // header 태그에  scroll 이라는 클래스 추가 제거
    // 제거되면 html에 있는 스타일 적용
    // 추가되면 scroll.css 에 있는 스타일 적용
    if (windowTop > 150) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
