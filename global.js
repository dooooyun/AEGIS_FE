window.onload = () => {
  const header = document.getElementsByTagName("header")[0];
  if (header) {
    header.innerHTML = `
      <button class="header_left" onclick="location.href = '/'">
        <img src="/header/logo.png" alt="" />
        <h1>ÆGIS</h1>
      </button>
      <div class="header_right">
        <button onclick="location.href='/'">문의</button>
        <button onclick="location.href='/account/login'">로그인</button>
        <button onclick="location.href='/'">
          <img
            class="start"
            src="/header/start.jpeg"
            alt="START"
          />
        </button>
      </div>
    `;
    header.insertAdjacentHTML(
      "afterend",
      `<hr class="header_hr" size="1" color="aliceblue" />`
    );
  }
};
