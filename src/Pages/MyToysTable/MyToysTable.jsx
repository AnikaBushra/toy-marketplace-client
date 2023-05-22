

const MyToysTable = ({ data, handleDelete }) => {
    const { name, category, sellerName, price, quantity, _id } = data
    return (
        <>
            <tr>
                <th>1</th>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-outline btn-error">Update</button></td>
                <td><button className="btn btn-circle btn-outline"
                    onClick={() => handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></td>
            </tr>
        </>
    );
};

export default MyToysTable;