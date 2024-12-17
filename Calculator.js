let display = document.getElementById("display");

display.style.fontSize = "30px";
let num1 = document.getElementsByClassName("num");

num1[0].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[0].value);
  },
  false
);
num1[1].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[1].value);
  },
  false
);
num1[2].addEventListener(
  "click",
  () => {
    display.value = display.value = display.value.concat(num1[2].value);
  },
  false
);
num1[3].addEventListener(
  "click",
  () => {
    let window = location.reload();
  },
  false
);

num1[4].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[4].value);
  },
  false
);
num1[5].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[5].value);
  },
  false
);
num1[6].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[6].value);
  },
  false
);
num1[7].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[7].value);
  },
  false
);
num1[8].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[8].value);
  },
  false
);
num1[9].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[9].value);
  },
  false
);
num1[10].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[10].value);
  },
  false
);
num1[11].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[11].value);
  },
  false
);
num1[12].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[12].value);
  },
  false
);

num1[13].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[13].value);
  },
  false
);
num1[14].addEventListener(
  "click",
  () => {
    display.value = display.value.concat(num1[14].value);
  },
  false
);

num1[15].addEventListener(
  "click",
  () => {
    let s = display.value;
    let arr = [];
    let v = "";
    for (i = 0; i < s.length; i++) {
      if (s[i] == "+" || s[i] == "/" || s[i] == "*" || s[i] == "-") {
        arr.push(Number(v));
        v = "";
        arr.push(s[i]);
      } else {
        v += s[i];
      }
    }

    arr.push(Number(v));

    for (i = 0; i < arr.length; i++) {
      if (arr[i] == "*" || arr[i] == "/") {
        let result;

        if (arr[i] == "*") {
          result = arr[i - 1] * arr[i + 1];
        } else if (arr[i] == "/") {
          result = arr[i - 1] / arr[i + 1];
        }

        arr.splice(i - 1, 3, result);
        i--;
      }
    }

    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] == "+") {
        result += arr[i + 1];
      } else if (arr[i] == "-") {
        result -= arr[i + 1];
      }
    }

    display.value = result;
  },
  false
);
