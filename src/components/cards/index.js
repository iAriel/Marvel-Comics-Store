import { React, useEffect, useState } from 'react';

import axios from 'axios';
import md5 from 'md5';
import Aos from 'aos'
import 'aos/dist/aos.css'

import './index.css'

export default function Cards() {
    const privateKey = 'b9136e2436aa981138e7bebc2c7e63322b7b032f';
    const publicKey = '65269432a6daacf9b3958ee9ba55663e';

    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);

    const [comics, setComics] = useState([])
    const [comicDetails, setComicDetails] = useState({})

    useEffect(() => {
        Aos.init({
            duration: 400,
            useClassNames: true,
            initClassName: false,
            animatedClassName: 'animated',
            once: "true"
        });
    }, [])

    useEffect(() => {
        axios(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`).then((response) => {
            setComics(response.data.data.results)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function setInfoModal(comic) {
        setComicDetails(comic)
    }
    return (
        <div>
            <h1 className="titleContent">OUR COMICS</h1>
            <div className="cards" >
                {comics.map((comic, index) => (
                    <div key={index} >
                        <div data-aos="zoom-in" className="products">
                            <img
                                key={comic.id}
                                src={comic.thumbnail.path + "/portrait_xlarge.jpg"}
                                alt={comic.title}
                            />
                            <p>{comic.title}</p>
                            <button className="buy">Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
            )
        </div>

    )
}