import { useState } from 'react';
import TechHeader from '../components/TechnologyComponents/Header';
import './index.scss';

function Technolgy() {
    const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false)


    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "40%",
            position: "relative",
            border: "1px solid #773693",
            borderRadius: "5px"
        },
    };

    return (
        <section className="home">
            <div className="home-head">
                <h1>Click the buttons below to modify the Technolgy page content.</h1>
            </div>
            <div className="btns">
                <button onClick={() => setHeaderModalIsOpen(true)}>Change header text</button>
            </div>

            {/* Header Modal */}
            <TechHeader Props={{ headerModalIsOpen, setHeaderModalIsOpen, customStyles }} />
        </section>
    )
}

export default Technolgy