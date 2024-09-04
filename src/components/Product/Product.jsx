
import { useOutletContext, useParams } from "react-router-dom";
import "./Product.css";


const Product = () => {
    const { products } = useOutletContext();
    const { id } = useParams();

    const findProduct = products.find((p) => p.id === +id);

    return (

        <section className="content">
            <div className="container">
                {findProduct ? (

                    <div className="content_box">
                        <div className="content-product">
                            <div className="content-product__left">
                                <h2 className="content-product__title">{findProduct.title}</h2>

                                <img
                                    className="content-product__img"
                                    src={findProduct.img}
                                    alt="product-img"
                                />

                                <p className="content-product__text">
                                    {findProduct.description}
                                </p>
                            </div>

                            <div className="content-product__right">
                                <h2 className="content-product__price">{findProduct.price}</h2>

                                <button className="btn btn_advertisement btn_large">Contact </button>

                            </div>
                        </div>


                        <div className="content_side_footer">
                            <p className="content_side_footer_item">© ООО «Abito», 2011–2021</p>
                            <div className="content_side_footer_item">Privacy Policy</div>
                            <div className="content_side_footer_item">Data processing</div>
                        </div>
                    </div>
                   

                ) : (
                    <h2>This product does not exist</h2>
                )}
            </div >
        </section >
    );
};
export default Product