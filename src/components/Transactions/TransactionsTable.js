import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
import { getAllPayments } from "../../data/DataFunctions";

const TransactionsTable = () => {

    const payments = getAllPayments();
    console.log(payments);

    const allCountries = payments.map(payment => payment.country);
    console.log(allCountries);   

    const uniqueCountries = allCountries.filter(
        (country,index) => allCountries.indexOf(country) === index);
    
     console.log(uniqueCountries);
    


return (
    <div>
        <select name="countries" id="countries">
            {uniqueCountries.map((country, index) =>             
            <option key={index}>{country} </option>)}
        </select>
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
                                return <TransactionsRow key={index} id={payment.id} date={payment.date}
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