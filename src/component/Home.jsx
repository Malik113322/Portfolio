import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import Me from '../assets/logo.png';

const Home = () => {

   
    const animations = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0
            },
            whileInView: {
                x: '0',
                opacity: 1
            }

        },

        button: {
            initial: {
                y: '-100%',
                opacity: 0
            },
            whileInView: {
                y: '0',
                opacity: 1
            }

        }
    }

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Danish
                    </motion.h1>

                    <Typewriter options={{
                        strings: ['A Front End Developer'],
                        autoStart: true,
                        loop: true,
                        cursor: '',
                        wrapperClassName: 'typewriterpara'
                    }} />

                    <div>
                        <a href="mailto:danishyt96@gmail.com">
                            Hire Me
                        </a>

                        <a href="#work"> Projects <BsArrowUpRight /> </a>
                    </div>
                    

                    <aside>
                    
                   

                        <article>
                            <h1> <span>Contact Me 📧</span> </h1>
                            <p> <span>danishyt96@gmail.com </span>
                            </p>
                        </article>
                    </aside>

                </div>


            </section>

            <section>
                <img src={Me} alt="logo" />
            </section>

            <BsChevronDown />
        </div>
    )
}

export default Home;
