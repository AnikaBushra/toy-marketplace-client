import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-sky-100 text-black-content ">
                <div>
                    <p className="font-bold">
                        <img className="h-14 mx-auto" src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=740&t=st=1684429807~exp=1684430407~hmac=8db30de4bfe90822aca583c4c456f54d2a39c042f4fa55f7034bfd9730a2064f" alt="" />
                        Kids Zone Ltd. <br />Providing reliable toys since 1992
                    </p>
                    <p>Bonani , Dhaka</p>
                    <p>contact us : +88888888</p>
                </div>

                <div className="grid grid-flow-col gap-4 text-2xl ">
                    <Link to='https://twitter.com/'><GrYoutube></GrYoutube></Link>
                    <Link to='https://www.youtube.com/'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.facebook.com/'> <FaFacebook></FaFacebook></Link>
                </div>

                <p>Copyright © 2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;