// 처음 작성한 코드
// 아스키 코드를 활용

function solution(s, n) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);

    if (c >= 65 && c <= 90) {
      c += n;
      if (c > 90) {
        c = c - 90 + 64;
      }
    }
    if (c >= 97 && c <= 122) {
      c += n;
      if (c > 122) {
        c = c - 122 + 96;
      }
    } else {
      c += " ";
    }
    answer += String.fromCharCode(c);
  }

  return answer;
}

console.log(solution("a B z", 4));

// 아스키코드를 활용했지만 변환될 알파벳을 명시하는 방법도 있었다.
// %을 사용하면 해당 숫자에서 얼마나 초과하는 지 알 수 있다.

function solution(s, n) {
  var answer = "";
  let l = "abcdefghijklmnopqrstuvwxyz";
  let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  s.split("").map((c, i) => {
    if (c === " ") return c;
    let code = c.charCodeAt(0);
    return code > 64 && code < 91 ? u[(code - 65 + n) % 26] : l[(code - 97 + n) % 26];
  });

  return answer;
}
