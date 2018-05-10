"use strict";

export function addParagraph(parentNode, innerHtml) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = innerHtml;
  parentNode.appendChild(newParagraph);
  return newParagraph;
}
