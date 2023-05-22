import { useContext, useState } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProvider";
import MyToysTable from "../../Pages/MyToysTable/MyToysTable";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [datas, setDatas] = useState([])
    useState(() => {
        fetch(`http://localhost:5000/addAToy?email=${user.email}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, []);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addAToy/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // remaining data 
                            const remaining = datas.filter(data => data._id !== id)
                            setDatas(remaining)

                        }
                    })

            }
        })
        console.log(id);

    }


    return (
        <div>
            <h3 className="text-4xl text-center my-6">My Products</h3>
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
                            datas.map(data => <MyToysTable
                                key={data._id}
                                handleDelete={handleDelete}
                                data={data}
                            ></MyToysTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;