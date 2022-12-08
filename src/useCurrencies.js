import { useState, useEffect } from "react"
import axios from "axios"

export const useCurrencies = () => {
   const [ratesData, setRatesData] = useState({
      date: null,
      rates: null,
      status: "loading",
   });

   useEffect(() => {
      const dataApi = async () => {
         try {
            const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
            setRatesData({
               data: response.data.date,
               rates: response.data.rates,
               status: "success",
            });
         } catch (error) {
            setRatesData({
               status: "error"
            });
         };
      };
      setTimeout(dataApi, 2000);
   }, [])

   return ratesData;
};



