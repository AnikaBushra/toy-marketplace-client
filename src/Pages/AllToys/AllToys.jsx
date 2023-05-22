

import { useLoaderData } from "react-router-dom";
import AllToytable from "../AllToytable/AllToytable";

const AllToys = () => {
    const datas = useLoaderData()

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            datas.map(data => <AllToytable
                                key={data._id}
                                data={data}
                            ></AllToytable>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllToys;