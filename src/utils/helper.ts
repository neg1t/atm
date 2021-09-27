const initialBills = {
  "5000": 10,
  "2000": 10,
  "1000": 10,
  "500": 10,
  "200": 10,
  "100": 10,
  "50": 10
};

const getMax = (obj: { [key: string]: number }) => {
  const key = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  return { bill: Number(key), count: obj[key] };
}

const maxValidValue = (money: number, bills: { [key: string]: number }) => {
  const max = getMax(bills);
  const arrBills = Object.entries(bills);
  const exclude = [0];

  if (money % max.bill === 0 && max.count > 0) {
    return max;
  } else {
    exclude.push(max.bill);
    max.count = 0;
    for (const val of arrBills) {
      if (
        !exclude.includes(Number(val[0])) &&
        money % Number(val[0]) === 0 &&
        val[1] > max.count
      ) {
        max.bill = Number(val[0]);
        max.count = Number(val[1]);
      }
    }
  }
  return max;
}
export const giveMoney = (value: number, bills: { [key: string]: number }) => {
  const currentBills = { ...bills };

  let atmSumm = Object.entries(currentBills)
    .map((arr) => Number(arr[0]) * Number(arr[1]))
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  let outputMoney = 0;
  let leftValue = value;
  const excludeBills = [0];

  if (atmSumm >= value) {
    while (atmSumm >= 50 && leftValue !== 0) {
      const max = getMax(currentBills);

      if (
        !(
          excludeBills.reduce((previous, current) => previous + current) ===
          Object.keys(currentBills)
            .map((item) => Number(item))
            .reduce((previous, current) => previous + current)
        )
      ) {
        if (leftValue % max.bill === 0 && currentBills[String(max.bill)] > 0) {
          outputMoney += max.bill;
          leftValue -= max.bill;
          atmSumm -= max.bill;
          currentBills[String(max.bill)] -= 1;
        } else {
          let necessaryValue = maxValidValue(leftValue, currentBills);
          if (necessaryValue.count !== 0) {
            if (currentBills[String(necessaryValue.bill)] > 0) {
              outputMoney += necessaryValue.bill;
              leftValue -= necessaryValue.bill;
              atmSumm -= necessaryValue.bill;
              currentBills[String(necessaryValue.bill)] -= 1;
            } else {
              excludeBills.push(necessaryValue.bill);
              continue;
            }
          } else {
            break;
          }
        }
      } else {
        return "Невозможно выдать данную сумму :(";
      }
    }
  } else {
    return "В банкомате нет такой суммы :(";
  }

  if (outputMoney === value) {
    return { money: outputMoney, currentBills, currentSumm: atmSumm };
  } else {
    return "Невозможно выдать данную сумму :(";
  }
}