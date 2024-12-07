export function convertVNDToUSD(vndAmount, exchangeRate = 24000) {
  if (typeof vndAmount !== "number" || vndAmount < 0) {
    throw new Error("Số tiền phải là một số dương.");
  }

  const usdAmount = (vndAmount / exchangeRate).toFixed(2);
  return `${vndAmount.toLocaleString("vi-VN")} VNĐ (${usdAmount} USD)`;
}

export function convertVNDToUSDForPay(vndAmount, exchangeRate = 24000) {
  if (typeof vndAmount !== "number" || vndAmount < 0) {
    throw new Error("Số tiền phải là một số dương.");
  }

  const usdAmount = (vndAmount / exchangeRate).toFixed(2);
  return usdAmount;
}
