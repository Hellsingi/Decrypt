const inputArea = document.querySelector("#enterString");
const desciptButton = document.querySelector("#button");
const outputArea = document.querySelector("#result");

desciptButton.addEventListener("click", () => {
  outputArea.value = edwardDecrypt(inputArea.value);
});

const edwardDecrypt = (text) => {
  let length = text.length;
  if (length > 99999) {
    return "String too long";
  }
  let answer = "";
  let i = -1;
  while (i < length - 1) {
    i++;
    if (text[i] !== text[i + 1]) {
      answer += text[i];
    } else {
      i += 1;
    }
  }
  if (!answer) {
    return "Empty answer";
  }
  return answer;
};
