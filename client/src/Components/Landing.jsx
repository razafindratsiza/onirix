import React from 'react';
import bannerImg from '../assets/artificial-intelligence-concept.jpg'
import Inr from '../assets/Inr.jpg'
const Landing = (props) => {
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
                                            Suite a notre découverte réçente, l'institut de recherche pour le rêve a créer ce plateforme pour mieux vous aider a prédire la signification de vos rêves.

                                        </div>
                                        <a href="#" className="btn_1" onClick={() => props.onClick('chat')}> Commencer</a>
                                    </div>
                                    <div className="d-flex product-banner-img ">
                                        <div className="banner_bg ">
                                            <img src={bannerImg} className='banner-img1' alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{marginBottom: 20}}>
                            <div className='img col-md-6'>
                                <img className='about-image' src={Inr} />
                            </div>
                            <div className='AboutColumn'>
                                <h1>institut de recherche pour les rêves</h1>
                                <div className='product-description-text'>
                                    Nous faisons de recherche pour vous prédire l'avenir
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
