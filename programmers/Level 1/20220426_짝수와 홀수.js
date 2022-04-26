function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 정규식 사용하여 풀기
// phone_number.replace(/\d(?=\d{4})/g, "*");
