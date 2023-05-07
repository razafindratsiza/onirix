import { useLazyQuery } from '@apollo/client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { GET_PREDILECTION } from '../hooks/schema';
import doctorImg from '../assets/doctor.jpg'
const Chat = (props) => {
    const [value, setValue] = React.useState('')
    const [responses, setResponses] = React.useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const [Predilect, { called, loading, data, errors }] = useLazyQuery(GET_PREDILECTION, {
        onCompleted: (queryResult) => {
            setResponses(queryResult.RunPredilect.responses)
            setValue("");
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        Predilect();
    }

    // Show error message if lazy query fails
    if (errors) return console.log(errors)


    return (
        <section className="banner_part">
            <div className="container">

                <div className="row align-items-center justify-content-between">

                    <div className="col-xl-12 col-md-12">
                        <div className='banner-title' onClick={() => props.onClick('landing')}>Onirix</div>
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h2>
                                    Alors de quoi as tu rever aujourd'hui?
                                </h2>
                                <div className='search-bar'>
                                    <form method='post' onSubmit={handleSubmit}>
                                        <input type='text' value={value} onChange={handleChange} className='Lg-bar-chat' placeholder='Dis-moi, tu as rever de quoi?' />
                                    </form>
                                </div>
                                {responses ?
                                    <div className='response-text'>
                                        <Typewriter
                                            options={{
                                                onComplete: () => { },
                                                strings: [responses],
                                                autoStart: true,
                                            }}
                                        />
                                    </div>
                                    :
                                    <div className='before-search-text'>
                                        <Typewriter
                                            options={{
                                                strings: ['Je suis une intelligence artificielle créer spécialement pour prédire l\'avenir graçe au rêve.', "alors décris-mois de quoi as-tu rever et je te dirait de quoi il fait reference pour ton l'avenir"],
                                                autoStart: true,
                                            }}
                                        />
                                    </div>
                                }
                                {called && loading && <p>loading...</p>}
                                <div style={{
                                    marginTop: 100,
                                    display: "flex",
                                    flexDirection: 'column',
                                    justifyContent:"center",
                                    alignItems:'center',
                                    marginBottom: 40 
                                }}>
                                    <div className='add'>Consulter un medecin si vous ne vous sentez pas bien ou si vous faites des cauchemars.</div>
                                    <a href='https://www.my-doctor.com' className='add-link' target='_blank'>
                                        <img src={doctorImg} className='addsimage' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chat;
