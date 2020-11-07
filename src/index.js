import './common.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtnEl: document.querySelector('[data-action="start"]'),
  stopBtnEl: document.querySelector('[data-action="stop"]'),
};

class ColorSwitcher {
  constructor({ startBtn }) {
    this.intervalId = null;
    this.startBtn = startBtn;
  }

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    this.startBtn.disabled = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.startBtn.disabled = false;
  }
}

const myColorSwitcher = new ColorSwitcher({ startBtn: refs.startBtnEl });

refs.startBtnEl.addEventListener(
  'click',
  myColorSwitcher.start.bind(myColorSwitcher),
);
refs.stopBtnEl.addEventListener(
  'click',
  myColorSwitcher.stop.bind(myColorSwitcher),
);