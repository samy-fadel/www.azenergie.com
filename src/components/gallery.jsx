import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/01-small.jpg", title: "Nous nous engageons à n'utiliser que des équipements de haute qualité, testés et éprouvés. Nos partenariats avec les principaux fabricants nous permettent de vous offrir des panneaux solaires durables et performants, accompagnés de garanties solides." },
    { thumb: "img/portfolio/02-small.jpg", title: "De la conception initiale à l'installation et à la maintenance continue,nous nous occupons de tout le processus. Notre équipe prend en charge toutes les démarches administratives et veille à ce que votre système solaire fonctionne de manière optimale." },
    { thumb: "img/portfolio/03-small.jpg", title: "Nous comprenons que chaque maison et chaque entreprise est unique. C'est pourquoi nous concevons des systèmes solaires personnalisés pour répondre à vos besoins énergétiques spécifiques. Nous maximisons l'efficacité de votre installation en tenant compte de votre emplacement, de votre consommation et de votre budget." }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Pourquoi choisir AZ ENERGIE ?</h2>
          <p>mettre ici une petite story de la boite creation data ou valeurs ; entreprise a taille humaine / familiale ?</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h6>{title}</h6>
                    </div>
                    <img src={thumb} className="img-responsive imagesize" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
