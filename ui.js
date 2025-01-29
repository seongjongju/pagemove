const wrap = document.getElementById("wrap");
  const pageMoves = document.querySelectorAll(".page_move");

  pageMoves.forEach((pageMove) => {
      pageMove.addEventListener("click", (event) => {
          event.preventDefault(); // 기본 이동 방지

          const url = pageMove.getAttribute("href"); // href 값 가져오기
          if (url === "#") return; // 페이지 이동 없는 경우 무시

          wrap.classList.add("on"); // 페이드 아웃 효과 적용

          setTimeout(() => {
              window.location.href = url; // 0.8초 후 페이지 이동
          }, 800);
      });
  });

  window.addEventListener("load", () => {
      wrap.classList.remove("on"); // 페이지 로드 시 페이드 인
  });