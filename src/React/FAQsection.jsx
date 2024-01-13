import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6"
import { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import '../CSS/faq.css'
import '../MediaQuery/faq-media.css'


const FAQ = (props) => {

/*-----tez-tez sorusulan suallarin oldugu boxlarin acilib baglanmasi ucun olan hisse-----*/ 
/*-----suallari JSON faylindan cekmisem-----*/
    const FaqCard = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleFaqClick = () => {
            setIsOpen(!isOpen);
        };
        return (
           <div className="faq" onClick={handleFaqClick}>
             <div className="faq-cards">
                <p>{question}</p>
                {isOpen ? <FaTimes /> : <FaPlus/>}
            </div>
            {isOpen && <p className='answer'>{answer}</p>}
           </div>
        )
    }

    const FaqSection = () => {
        return (
            <div className="faq-general">
                <div className="faq-links">
                    <Link to="/">
                        Ana səhifə<FaAngleRight className="filter-icon" />
                    </Link>
                    <a className='faq-link' href="#">Tez-tez verilən suallar</a>
                </div>
                <div className="faq-boxes">
                    <h3>Tez-tez verilən suallar</h3>
                    <FaqCard question={props.first} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                    <FaqCard question={props.other} answer={props.content} />
                </div>
            </div>
        );
    };
    return <FaqSection />

}
export default FAQ