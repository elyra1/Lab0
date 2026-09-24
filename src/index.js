const f = (x) => x * x - x + 1;

function trapezoidalRule(func, a, b, n = 1000) {
  const h = (b - a) / n;
  let sum = (func(a) + func(b)) / 2;
  for (let i = 1; i < n; i += 1) sum += func(a + i * h);
  return sum * h;
}

function ask(question, defaultValue) {
  const answer = prompt(question, defaultValue);
  return answer === null ? NaN : Number(answer.replace(',', '.'));
}

function main() {
  let a = ask('Начало интервала a:', '0');
  let b = ask('Конец интервала b:', '2');
  const n = ask('Число разбиений n:', '1000') || 1000; // пусто или 0 -> 1000

  if ([a, b, n].some(Number.isNaN)) {
    document.body.innerHTML = '<pre>Ввод отменён или содержит не число.</pre>';
    return;
  }

  if (a > b) [a, b] = [b, a]; // границы ввели наоборот — разворачиваем

  const text = [
    f,
    `Интервал: [${a}; ${b}], n = ${n}`,
    `Результат: ${trapezoidalRule(f, a, b, n).toFixed(6)}`,
  ].join('\n');

  console.log(text);
  document.body.innerHTML = `<pre>${text}</pre>`;
}

main();
