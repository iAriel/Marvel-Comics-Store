import { React, useEffect, useState } from 'react';

import { TitleContent, Card,ButtonModal } from './styles';
import Pagination from '../pagination';
import Modal from '../modal';

import axios from 'axios';
import md5 from 'md5';
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Cards() {
    const privateKey = 'b9136e2436aa981138e7bebc2c7e63322b7b032f';
    const publicKey = '65269432a6daacf9b3958ee9ba55663e';

    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);

    const [comics, setComics] = useState([])
    const [comicDetails, setComicDetails] = useState({})
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(12);
    const [showModal, setShowModal] = useState(false);
    const pages = Math.ceil(comics.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = comics.slice(startIndex, endIndex);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

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
        axios(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`).then((response) => {
            setComics(response.data.data.results)

        }).catch(err => {
            console.log(err)
        })
    }, [])

    function setInfoModal(comic) {
        setComicDetails(comic)
        openModal();
    }
    return (
        <div>
            
            
            
            <TitleContent>QUADRINHOS</TitleContent>
            <Card>
                {currentPosts.map((comic, index) => (
                    <div key={index} >
                        <ButtonModal data-cy={"modal-button"+index} data-aos="zoom-in" onClick={() => setInfoModal(comic)}>
                            <span>Raro</span>
                                    <img
                                        key={comic.id}
                                        src={comic.thumbnail.path + "/portrait_xlarge.jpg"}
                                        alt={comic.title}
                                    />
                                <div>
                                    <p>{comic.title}</p>
                                    <p>R$: {comic.prices[0].price}</p>
                                </div>
                        </ButtonModal>
                    </div>
                ))}
            </Card>
            <Modal showModal={showModal} setShowModal={setShowModal}comicDetails={comicDetails}/>
            <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>

    )
}