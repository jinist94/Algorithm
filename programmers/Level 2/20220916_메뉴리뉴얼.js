function solution(orders, numbers) {
  const answer = [];
  let tmp = [];

  const dfs = (level, str, s) => {
    let result = [];
    if (level === s) {
      return [tmp.join('')];
    } else {
      for (let i = 0; i < str.length; i++) {
        tmp[level] = str[i];
        const sliceStr = str.slice(i + 1);
        const combination = dfs(level + 1, sliceStr, s);
        if (combination.length > 0) {
          result.push(...combination);
        }
      }
    }
    return result;
  };

  numbers.forEach((number) => {
    const menus = new Map();
    orders.forEach((order) => {
      const combinations = dfs(0, order.split('').sort().join(''), number);
      console.log(combinations);
      combinations.forEach((comb) => {
        menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
      });
    });
    const max = Math.max(...menus.values());
    menus.forEach((count, menu, map) => {
      if (count === max && count >= 2) {
        answer.push(menu);
      }
    });
  });

  return answer.sort();
}

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
