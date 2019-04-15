const showPwdBtns = 'icon_show-pwd';

/**
 * Initializes show password buttons and maybe other stuff in the future
 */
export default function initInputs() {
  const buttons = document.getElementsByClassName(showPwdBtns);
  for (const btn of buttons) {
    btn.onclick = (e) => {
      const elt = e.target || e.srcElement;
      const target = document.getElementById(elt.dataset.pwdFor);
      if (target.type === 'password') {
        target.setAttribute('type', 'text');
      } else {
        target.setAttribute('type', 'password');
      }
    };
  }
}
