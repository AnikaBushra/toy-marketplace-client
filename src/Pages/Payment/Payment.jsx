

const Payment = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 bg-blue-300 p-6 m-8">
            <div className="flex  items-center">
                <img className="w-28 h-28 rounded mx-4"
                    src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=740&t=st=1684845867~exp=1684846467~hmac=966542d82cc235bc217fe114121b0bb94ca8b03684c7f8ce7b1de44b01782c25" alt="" />
                <div>
                    <h3 className="text-xl"><i>Free shipping world wide</i></h3>
                    <p>On order over $180</p>
                </div>
            </div>
            <div className="flex  items-center">
                <img className="w-28 h-28 rounded mx-4" src="https://img.freepik.com/premium-vector/woman-paying-he-package-she-just-received_23-2148812885.jpg?w=740" alt="" />
                <div>
                    <h3 className="text-xl"><i>Cash On delivary</i></h3>
                    <p>100% money back guarantee</p>
                </div>
            </div>
            <div className="flex  items-center">
                <img className="w-28 h-28 rounded mx-4" src="https://img.freepik.com/free-vector/tech-support-concept_1284-14631.jpg?w=360&t=st=1684846031~exp=1684846631~hmac=40e753b062f9210c703f12d6f954445877d074ea6bec1667ae5b45163c227471" alt="" />
                <div>
                    <h3 className="text-xl"><i>24/7 customer service</i></h3>
                    <p>call us at +88888</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;