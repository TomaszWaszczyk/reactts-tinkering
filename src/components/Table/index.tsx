import React from "react";
import FetchCurrencies from "../../services/api";

// Define the props for the component
interface TableProps {
  price: number;
  description?: string;
}

const Table: React.FC<TableProps> = ({ price, description }) => {
  return (
    <div>
      <h1>{price}</h1>
      <FetchCurrencies />
      {description && <p>{description}</p>}
    </div>
  );
};

export default Table;
