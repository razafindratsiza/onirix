import React from 'react';
import bannerImg from '../assets/artificial-intelligence-concept.jpg'
const Landing = () => {
    return (
        <section className="banner_part">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-12 col-md-12">
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h2>
                                    Bienvenue dans le futur.
                                    <span className='style-color'> Onirix </span>
                                    vous prédit l'avenir
                                </h2>
                                <div className='d-flex'>
                                    <div className='product-description'>
                                        <div className='product-description-text'>
                                            Suite a notre découverte récente, l'institut de recherche pour le rêve a créer ce plateforme pour mieux vous aider a prédire la signification de vos rêves.
                                            
                                        </div>
                                        <a href="#" className="btn_1">Commencer</a>
                                    </div>
                                    <div className="d-flex product-banner-img ">
                                        <div className="banner_bg ">
                                            <img src={bannerImg} className='banner-img1' alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-app-1 custom-animation"><img src="img/animate_icon/icon_1.png" alt="" /></div>
            <div className="hero-app-5 custom-animation2"><img src="img/animate_icon/icon_3.png" alt="" /></div>
            <div className="hero-app-7 custom-animation3"><img src="img/animate_icon/icon_2.png" alt="" /></div>
            <div className="hero-app-8 custom-animation"><img src="img/animate_icon/icon_4.png" alt="" /></div>
        </section>
    );
}

export default Landing;
