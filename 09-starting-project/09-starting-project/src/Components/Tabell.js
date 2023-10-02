import "../index.css";

export default function Tabell(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((element) => {
          return (
            <tr key={element.year}>
              <td>{element.year}</td>
              <td>{element.savingsEndOfYear}</td>
              <td>{element.yearlyInterest}</td>
              <td>{element.savingsEndOfYear - props.initial - element.yearlyContribution * element.year}</td>
              <td>{props.initial + element.yearlyContribution * element.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
