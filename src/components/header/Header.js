import React, { useState, useEffect } from "react";
import "./header.css";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.css';
import Recipe from "../recipe/Recipe";
import BG from "../../assests/bg.jpg";
import { FaSearch } from "react-icons/fa";
import gif from "../../assests/gif.webp";
import gif3 from "../../assests/gif3.gif";
import img3 from "../../assests/delicious3.jpg";

const Header = () => {
  const APP_ID = "ee59d17f";
  const APP_KEY = "5eb484cc2c21dcb18b177cf4f1a1e128";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("ramen");
  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(response.data.hits);
    // console.log(response.data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
      <div className="nav">
        <h1>Recipe Finder</h1>
        <form onSubmit={updateQuery} className="recipe__search">
          <FaSearch className="search__icon" />
          <input
            type="text"
            value={search}
            onChange={updateSearch}
            className="recipe__input"
            placeholder="Search Recipes"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="header__div">
        <div>
          <img src={gif3} className="header__gif" />
          <p className="header__text">
            Hola Guys !! I'm JoJo. Are you a Sweet tooth too ..? Or do you like
            Spicy munchies. Go explore the dishes as per your cravings while I enjoy my
            burger.
          </p>
        </div>
      </div>

      <div className="recipe__content">
        {recipe.map((data) => {
          console.log("yudhsd", data.recipe.label);

          return (
            <Recipe
              key={data.recipe.label}
              title={data.recipe.label}
              calories={data.recipe.calories}
              image={data.recipe.image}
              ingredients={data.recipe.ingredients}
            />
          );
        })}
      </div>
    </>
  );
};

export default Header;
