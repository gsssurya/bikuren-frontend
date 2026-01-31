import axios from "axios";

function getUsdIdr() {
  const usdIdr = localStorage.getItem('usdIdr');

  if(!usdIdr){
    return axios
      .get(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=214383814e3c4fa1be20475788fb5cd6"
      )
      .then(res => {
        const rate = Number(res.data.rates.IDR);
        localStorage.setItem("usdIdr", rate);
      })
      .catch(err => {
        console.error("Gagal ambil kurs", err);
      });
  }
  return;
}

export default getUsdIdr;
