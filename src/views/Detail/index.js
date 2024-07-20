import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setDetail(json))
    }

    if (!detail) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    const { title, image, price, description } = detail;



    return (
        <div className="body">
            <div className="main flex gap-10 justify-around mt-10 items-center">

                <div className="thumbnail border w-1/3 bg-black flex justify-center items-center">
                    <img className="w-40" src={image} alt="Thumbnail" />
                </div>

                {/* <div className="imgLib">
                <FbImageLibrary images={images} />
                </div> */}

                <div className="details w-1/2 gap-y-10">
                    <div className="font-extrabold text-3xl price">
                        <h2>Rs {price}</h2>
                    </div>

                    <div className="detail text-3xl">
                        <p className="font-semibold">{title}</p>

                    </div>

                    <div className="description">
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Detail;
