import { useLoaderData } from "react-router-dom";


const Details = () => {
    const products = useLoaderData();
    const { name, subCategory, sellerName, price, quantity, _id, imageUrl, description, email, rating } = products
    console.log(name, subCategory, sellerName, price, quantity, _id);
    console.log(products);
    return (
        <>
            <h2 className="text-3xl text-center my-4">Product Details</h2>
            <div className="flex justify-center m-6">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={imageUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p>Seller:{sellerName}</p>
                        <p>Email:{email}</p>
                        <p>Price:{price}</p>


                        <div className="card-actions justify-around">
                            <div className="badge badge-outline">rating:{rating}</div>
                            <div className="badge badge-outline">Quantity{quantity}</div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div></>
    );
};

export default Details;