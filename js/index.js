function clickElement(element, clickCount) {
  let clickCounter = 0;
  function performClick() {
    element.click();
    clickCounter++;

    if (clickCounter < clickCount) {
      const delay = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
      setTimeout(performClick, delay);
    }
  }
  performClick();
}
