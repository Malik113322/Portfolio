import React from 'react';
import Me2 from '../assets/Me2.png';

import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={Me2} alt="Founder" />

                <h2>Danish</h2>
                <p>Motivation is temporary, but discipline last forever</p>
            </div>


            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://www.instagram.com">
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.facebook.com">
                        <AiFillFacebook />
                    </a>
                    <a href="https://www.twitter.com">
                        <AiFillTwitterSquare />
                    </a>
                </article>
            </aside>

            <a href="#home"> <AiOutlineArrowUp /> </a>

        </footer>
    )
}

export default Footer;
