import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import { cardArray } from './Json'
import { sideArray } from './Json'
import ContentSide from '../components/Content Side/ContentSide'
const Home = () => {
    return (
        <>
            <Header />
            <div>
                <section className="search">
                    <div className="container">
                        <div className="search_box">
                            <input type="text" />
                            <button className="btn btn_advertisement search_btn">

                                <img className="search_btn_icon" src="./images/search.svg" alt="search" />
                                <span className="search_btn_text">Search</span>
                            </button>
                        </div>
                    </div>
                </section>

                <div className="content">
                    <div className="container">
                        <div className="content_box">
                            <div className="content_main">
                                <h2 className="content_main_title">Recommendations for you</h2>
                                <div className="content_main_list">
                                    {
                                        cardArray && cardArray.length > 0 ? (
                                            cardArray.map(card => (
                                                <Card
                                                    key={card.id}
                                                    title={card.title}
                                                    price={card.price}
                                                    address={card.address}
                                                    date={card.date}
                                                    img={card.img}
                                                />
                                            ))
                                        ) : (
                                            <p>No cards available</p>
                                        )
                                    }


                                </div>
                            </div>

                            <div className="content_side">

                                <h3 className="content_side_title">Services and facilities</h3>
                                <div className="content_side_box">
                                    <div className="content_side_list">

                                        {
                                            sideArray.map(side => (
                                                <ContentSide
                                                    key={side.id}
                                                    title={side.title}
                                                    img={side.img}
                                                    text={side.text}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="content_side_footer">
                                        <p className="content_side_footer_item">© ООО «Abito», 2011–2021</p>
                                        <a href="#!" className="content_side_footer_item">Privacy Policy</a>
                                        <a href="#!" className="content_side_footer_item">Data processing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home