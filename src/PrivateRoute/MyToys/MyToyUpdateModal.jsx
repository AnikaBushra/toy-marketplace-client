import Swal from "sweetalert2";


const MyToyUpdateModal = ({ singleData, setSingleData }) => {

    const { description, price, quantity, _id } = singleData;

    const updateProduct = (e) => {
        e.preventDefault()
        const form = e.target;

        const price = form.price?.value

        const quantity = form.quantity?.value
        const description = form.description?.value
        console.log(price, quantity, description);
        form.reset()
        const updatedProduct = {
            price, quantity, description
        }
        fetch(`http://localhost:5000/addAToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Producet Updated Successfully',
                        icon: 'success',

                    })
                    setSingleData(data)
                }
            })


    }
    return (
        <>
            {/* The button to open modal */}

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">X</label>
                    </div>
                    {/* modal form  */}
                    <div className="card-body p-2">
                        <h3 className="text-2xl">Update here</h3>
                        <form onSubmit={updateProduct}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Priceeeeeee" className="input input-bordered"
                                    name="price"
                                    defaultValue={price} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" className="input input-bordered"
                                    name="quantity"
                                    defaultValue={quantity} />
                            </div>


                            <div className="form-control mx-auto">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Description" className="input input-bordered"
                                    name="description"
                                    defaultValue={description} />
                            </div>

                            <div className="modal-action">
                                <label htmlFor="my-modal">
                                    <input type="submit" value="Update" className="btn btn-block" />
                                </label>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default MyToyUpdateModal;