import React, { Component } from "react";
import sl1 from "../images/sl1.jpg";
import sl2 from "../images/sl2.png";
import sl3 from "../images/sl3.png";
export default class Slider extends Component {
  state = 
   {
  slider:[
    {
      id: 1,
      image: sl1,
      titre: "Jardins Sur-Mesure",
      sousTitre:
        "Transformer votre espace extérieur en un paradis floral unique",
      class: "carousel-item active",
    },
    {
      id: 2,
      image: sl2,
      titre: "Mariages Élégants",
      sousTitre: "Sublimez votre mariage avec des fleurs exceptionnelles",
      class: "carousel-item",
    },
    {
      id: 3,
      image: sl3,
      titre: "Cadeaux Fleuris",
      sousTitre:
        "Cadeaux Fleurs : Témoignage d'Affection en Bouquets et Paniers",
      class: "carousel-item",
    },
  ]};
  render() {
    return (
      <>
        <div className="row ">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {this.state.slider.map((slide) => (
                <div key={slide.id}>
                  <div className={slide.class} data-bs-interval="2000">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                      <img src={slide.image} className="img-fluid " alt="..." />
                    </div>
                    <div className="carousel-caption  d-md-block">
                      <h2>{slide.titre}</h2>
                      <p className="lead fst-italic soustitre">
                        {slide.sousTitre}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
