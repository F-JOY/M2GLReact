import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import Tooltip from "@mui/material/Tooltip";
import BqFlowres from "./BqFlowres";
import { likeStaticBouquet } from "../fetchFunc/fetchBouquet";
import { Link } from "react-router-dom";
const Bouquet = (props) => {
  const [B, setB] = useState(props.bouquet);
  const [like, setlike] = useState(false);
  const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
  const isBouquetInCart = existingCart.some((item) => item.nom === B.nom);
  const [added, setAdded] = useState(isBouquetInCart);
  useEffect(() => {}, [B, added,like]);

  const handleLike = () => {
    console.log("handle like called");
    setlike(!like)
    //likeStaticBouquet(B.id).then((newBouquet) => setB(newBouquet));
  };
  const handleAdd2Cart = () => {
    const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    const isBouquetInCart = existingCart.some((item) => item.nom === B.nom);

    if (!isBouquetInCart) {
      const Cart = [...existingCart, B];
      localStorage.setItem("ShoppingCart", JSON.stringify(Cart));
      localStorage.setItem(
        "nombre",
        JSON.parse(localStorage.getItem("ShoppingCart"))?.length
      );
      setAdded(!added);
    }
  };
  const handleRemove4mCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    const isBouquetInCart = existingCart.some((item) => item.nom === B.nom);
    if (isBouquetInCart) {
      const updatedCart = existingCart.filter((item) => item.nom !== B.nom);
      localStorage.setItem("ShoppingCart", JSON.stringify(updatedCart));
      localStorage.setItem(
        "nombre",
        JSON.parse(localStorage.getItem("ShoppingCart"))?.length
      );
      setAdded(!added);
    }
  };
  return (
    <>
      <div className="card cardform">
      
         <img src={props.bouquet.image} className="card-image" alt="..."/>
        
       
        <Tooltip
          title={<BqFlowres Fleurs={props.bouquet.Fleurs}/>}
          placement="right-end"
          arrow
          enterDelay={200}
          leaveDelay={500}
        >
          <IconButton style={{ position: "absolute", top: 0, right: 0 }}>
            <LocalFloristRoundedIcon />
          </IconButton>
        </Tooltip>
        <div className="card-body">
          <h5 className="card-title">{props.bouquet.nom}</h5>
          <p className="card-text">{props.bouquet.LikesCount} likes</p>
          <div className="d-flex justify-content-between align-items-end">
            <h5 className="col-md-6">prix: {props.bouquet.prix}</h5>

            <div className="ml-2">
              {!added ? (
                <IconButton onClick={handleAdd2Cart}>
                  <AddShoppingCartIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleRemove4mCart}>
                  <ShoppingCartIcon className="itemAdded" />
                </IconButton>
              )}

              <IconButton onClick={handleLike}>
                {like ? (   
                      <FavoriteIcon className="likedIcon" />
                  
                ) : (
                  <FavoriteBorderIcon className="likeIcon" />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bouquet;
