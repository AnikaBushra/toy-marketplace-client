import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToys = () => {
    useTitle('AddaToy')
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const imageUrl = form.imageUrl.value
        const name = form.name.value
        const sellerName = form.sellerName.value
        const email = form.email.value
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value
        console.log(imageUrl, name, sellerName, email, subCategory, price, rating, quantity, description);
        form.reset()
        const items = {
            imageUrl, name, sellerName, email, subCategory, price, rating, quantity, description
        }

        fetch(`http://localhost:5000/addAToy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product information has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h2 className="text-4xl my-8 text-center">Please add a toy </h2>
            <div className="hero min-h-screen bg-base-200  ">

                <div className="hero-content w-full">

                    <div className="card w-full shadow-2xl bg-gray-300">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image Url</span>
                                            </label>
                                            <input type="text" placeholder="Image Url" className="input input-bordered"
                                                name="imageUrl" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered"
                                                name="name" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Seller Name</span>
                                            </label>
                                            <input type="text" placeholder="Seller Name" className="input input-bordered"
                                                defaultValue={user?.displayName}
                                                name="sellerName" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered"
                                                defaultValue={user?.email}
                                                name="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Sub Category</span>
                                            </label>
                                            <input type="text" placeholder="Sub Category" className="input input-bordered"
                                                name="subCategory" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="text" placeholder="Price" className="input input-bordered"
                                                name="price" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="text" placeholder="Rating" className="input input-bordered"
                                                name="rating" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="text" placeholder="Quantity" className="input input-bordered"
                                                name="quantity" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mx-auto">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" className="input input-bordered"
                                        name="description" />
                                </div>
                                <button className="btn btn-primar
                               items-center px-10 my-6">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToys;