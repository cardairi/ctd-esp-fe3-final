import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFav = state.favs.some((fav) => fav.id === id);

  const handleFavClick = () => {
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: { id, name, username } });
      alert("Successfully removed");
    } else {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      alert("Successfully added");
    }
  };

  return (
    <div
      className="card"
      style={{
        background: state.theme.backgroundCard,
        color: state.theme.color,
      }}
    >
      <img src="./images/doctor.jpg" alt="" width={200} />

      <Link to={`/detail/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{username}</p>
      <button className="favButton" onClick={handleFavClick}>
        {isFav ? (
          <>
            <span>Remove </span>❌
          </>
        ) : (
          <>
            <span>Add </span>⭐
          </>
        )}
      </button>
    </div>
  );
};

export default Card;