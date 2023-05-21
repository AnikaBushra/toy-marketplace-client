import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddAToys = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content w-full">

                    <div className="card w-full shadow-2xl bg-gray-300">
                        <div className="card-body">
                            <form>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image Url</span>
                                            </label>
                                            <input type="text" placeholder="Image Url" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Seller Name</span>
                                            </label>
                                            <input type="text" placeholder="Seller Name" className="input input-bordered"
                                                defaultValue={user?.displayName} />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered"
                                                defaultValue={user?.email} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Sub Category</span>
                                            </label>
                                            <input type="text" placeholder="Sub Category" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="text" placeholder="Price" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="text" placeholder="Rating" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="text" placeholder="Quantity" className="input input-bordered" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mx-auto">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" className="input input-bordered" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToys;