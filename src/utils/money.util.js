function formatMoney(price, currency) {
    if(currency == 'IDR'){
        return (
          `
          IDR 
          ${ price
              .toString()
              .split(".")[0]
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          }
          `
        )
    } else if (currency == 'USD'){
        function formatTwoDigit(value) {
            return value.toString().padStart(2, "0");
        }
        const priceNow = JSON.parse(localStorage.getItem('usdIdr'));
        const calculateUsdPrice = Number(price) / priceNow;
        const [int, dec] = calculateUsdPrice.toFixed(2).split(".");
        const formatted = `${formatTwoDigit(int)}.${dec}`;
        return (
            `
            $
            ${ formatted }
            `
        )
    }
}

export default formatMoney;