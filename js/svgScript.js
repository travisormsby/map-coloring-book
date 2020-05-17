// color elements if it should be the selected color
function color (id, colorClass) {
  if (window.parent.colorChoice === colorClass) {
    document
      .getElementById (id)
      .setAttribute ('fill', window.parent.colorMap[colorClass]);
  }
}
