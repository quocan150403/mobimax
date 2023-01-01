$(document).ready(() => {
  {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab-item');
    const panes = $$('.tab-pane');

    const tabActive = $('.tab-item.active');
    const line = $('.tabs .line');

    if (line) {
      if (window.innerWidth > 739) {
        requestIdleCallback(function () {
          line.style.left = tabActive.offsetLeft + 'px';
          line.style.width = tabActive.offsetWidth + 'px';
        });
      } else {
        requestIdleCallback(function () {
          line.style.left = tabActive.offsetLeft + 'px';
          line.style.width = tabActive.offsetWidth + 'px';
          line.style.top = tabActive.offsetTop + 'px';
        });
      }
    }

    if (tabs) {
      tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
          $('.tab-item.active').classList.remove('active');
          $('.tab-pane.active').classList.remove('active');

          if (window.innerWidth > 740) {
            line.style.left = this.offsetLeft + 'px';
            line.style.width = this.offsetWidth + 'px';
          } else {
            line.style.left = this.offsetLeft + 'px';
            line.style.top = this.offsetTop + 'px';
            line.style.width = this.offsetWidth + 'px';
          }

          this.classList.add('active');
          pane.classList.add('active');
        };
      });
    }
  }
});
