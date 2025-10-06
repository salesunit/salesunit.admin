export function formatPrice(
  num: number | string,
  minBreakpoint = 1000000,
  decimals = 2
) {
  function addCommas(numStr: string) {
    // Split the number into integer and decimal parts
    const parts = numStr.split(".");

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join the parts back together
    return parts.join(".");
  }

  const price = Number(num);

  // Return the number as it is if it's less than the minimum breakpoint
  if (Math.abs(price) < minBreakpoint) {
    return addCommas(price.toFixed(decimals));
  }

  // Define the abbreviations and their corresponding values
  const abbreviations = [
    { value: 1e12, symbol: "T" }, // Trillion
    { value: 1e9, symbol: "B" }, // Billion
    { value: 1e6, symbol: "M" }, // Million
    { value: 1e3, symbol: "K" }, // Thousand
  ];

  // Find the appropriate abbreviation
  for (const abbreviation of abbreviations) {
    if (Math.abs(price) >= abbreviation.value) {
      // Format the number with the abbreviation
      const formatNum = (price / abbreviation.value).toFixed(decimals);
      return addCommas(formatNum) + abbreviation.symbol;
    }
  }

  // If no abbreviation is applied (shouldn't happen due to the initial check)
  return addCommas(price.toFixed(2));
}
