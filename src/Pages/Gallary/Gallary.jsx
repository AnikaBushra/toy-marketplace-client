

const Gallary = () => {
    return (
        <div>
            <h2 className="text-5xl text-center m-10">Our Gallery</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96 mx-6">
                <img src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=740&t=st=1684594507~exp=1684595107~hmac=60e7678b57048ab92bab35e91198a885e2b827dc91e69580bd3304c6dbcfad82" alt="" />
                <img src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684594539~exp=1684595139~hmac=01ba335fcb25a48254b515c3ea699ee6eb85437fd75416280c115cd484d77ba4" alt="" />

                <img src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?w=740&t=st=1684594593~exp=1684595193~hmac=15624231d23f8690bad35b96fa4f04946aeb18c4bc436ee63c4c331a972b1661" alt="" />
            </div>
        </div>
    );
};

export default Gallary;