import "./Expenses.css";
import ExpenseItem from "../ExpenseItem";

export default function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className='expenses'>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            money={expense.money}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}
