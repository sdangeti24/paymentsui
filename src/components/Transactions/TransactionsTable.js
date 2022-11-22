import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPayments } from "../../data/DataFunctions";
import { useState } from "react";

const TransactionsTable = () => {

    const payments = getAllPayments();
    console.log(payments);

    const allCountries = payments.map(payment => payment.country);
    console.log(allCountries);   

    const uniqueCountries = allCountries.filter(
        (country,index) => allCountries.indexOf(country) === index);
    
     console.log(uniqueCountries);
    
        const [selectedCountry, setSlectedCountry] = useState(uniqueCountries[0]);

        const changeCountry = (event) => {
            const option = event.target.options.selectedIndex;
            setSlectedCountry(uniqueCountries[option]);
        }

return (
    <div>
         <div className="transactionsCountrySelector">
        <label>Select country:</label> <select onChange={changeCountry}>
            {uniqueCountries.map (country => <option key={country} value={country}>{country}</option>)}
        </select>
        </div>
    <table className="transactionsTable" id="transactionTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {payments.map(
                            (payment, index) => 
                            {
                                return payment.country === selectedCountry && <TransactionsRow key={index} id={payment.id} date={payment.date}
                                country = {payment.country} currency ={payment.currency} amount={payment.amount}   />
                            }
            )
                        }
        </tbody>
    </table>
  </div>
)
}


export default TransactionsTable;