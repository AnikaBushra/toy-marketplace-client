

const AllToytable = ({ data }) => {

    const { name, category, sellerName, price, quantity } = data
    return (
        <>
            <tr>
                <th>1</th>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-outline btn-error">View Details Button</button></td>
            </tr>
        </>
    );
};

export default AllToytable;