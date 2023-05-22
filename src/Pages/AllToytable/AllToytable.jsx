import { Link } from "react-router-dom";


const AllToytable = ({ data }) => {

    const { name, subCategory, sellerName, price, quantity, _id } = data
    return (
        <>
            <tr>
                <th>1</th>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><Link to={`/details/${_id}`}><button className="btn btn-outline btn-error">View Details Button</button></Link></td>
            </tr>
        </>
    );
};

export default AllToytable;