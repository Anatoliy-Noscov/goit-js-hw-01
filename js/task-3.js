function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const totalPadding = Number.parseFloat(padding) * 2;
  const totalBorder = Number.parseFloat(border) * 2;

  let totalWidth = contentWidth + totalPadding + totalBorder;
  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
