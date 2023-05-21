

const CategoryCard = ({ item }) => {
    const { picture, name, price, rating } = item;
    return (
        <div>
            <div className="card w-96 bg-sky-100 shadow-xl">
                <figure><img src={picture} alt="cars" className="h-60 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">
                            Price: ${price}</div>
                        <div className="badge badge-outline">Rating:{rating}</div>
                    </div>
                    <button className="btn btn-[rgb(33,33,33)]   mt-6">view details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;