import useUsdIdr from "../utils/currency/usdIdr";

function Price({ price, currency }) {
  const usdIdr = useUsdIdr();
  if (currency == "IDR") {
    return (
      <>
        IDR 
        {price
          .toString()
          .split(".")[0]
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </>
    );
  }

  if (currency == "USD") {
    const usd = (price / usdIdr).toFixed(2);
    return <>${usd.toFixed(2)}</>;
  }

  return null;
}

export default Price;
