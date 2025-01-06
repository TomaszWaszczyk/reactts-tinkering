import React from 'react';
import axios from 'axios';

// Define the props for the component
interface TableProps {
    price: number;
    description?: string;
}

const Table: React.FC<TableProps> = ({ price, description }) => {
    return (
        <div>
            <h1>{price}</h1>
            {description && <p>{description}</p>}
        </div>
    );
};

export default Table;
