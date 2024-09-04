 import { Outlet } from "react-router-dom";
import  Header  from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from '../pages/Json'

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) =>
          //  p.title.includes(searchText) || p.price.includes(searchText)
  p.title.toLowerCase().includes(searchText.toLowerCase()) || 
          p.price.toString().includes(searchText) 
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);
 


  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search_box">
              <input type="text" value={searchText} onChange={handleSearch} />
              <button
                className="btn btn_advertisement search_btn"
                onClick={handleSearchArray}
              >
                <img
                  className="search_btn_icon"
                  src="./images/search.svg"
                  alt="search"
                />
                <span className="search_btn_text">Search</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};