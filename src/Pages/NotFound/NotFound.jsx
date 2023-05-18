import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mt-28 h-96" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=360&t=st=1684425278~exp=1684425878~hmac=b181d54e78d5990fea369a277724fea46fc30c157e1353d04f14484a175fca1a" alt="" />

            <button className="btn btn-outline btn-success mt-6 "><Link to='/'>Back to Home</Link></button>
        </div>
    );
};

export default NotFound;