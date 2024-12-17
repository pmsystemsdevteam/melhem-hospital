import { useState } from 'react';
import Header from '../components/AboutComponents/Header';
import './index.scss'
import MeetSpecialists from '../components/AboutComponents/MeetSpecialists';
import Video from '../components/AboutComponents/Video';
import OurDevices from '../components/AboutComponents/OurDevices';

function About() {
    const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false)
    const [specialists, setSpecialists] = useState(false)
    const [videoSectionModalIsOpen, setVideoSectionModalIsOpen] = useState(false)
    const [ourDevicesModalIsOpen, setOurDevicesModalIsOpen] = useState(false)


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
                <h1>Click the buttons below to modify the about page content.</h1>
            </div>
            <div className="btns">
                <button onClick={() => setHeaderModalIsOpen(true)}>Change header text</button>
                <button onClick={() => setSpecialists(true)}>Change Meet Our Specialists text</button>
                <button onClick={() => setOurDevicesModalIsOpen(true)}>Change Our Devices text</button>
                <button onClick={() => setVideoSectionModalIsOpen(true)}>Change Video Section text</button>
            </div>

            {/* Header Modal */}
            <Header Props={{ headerModalIsOpen, setHeaderModalIsOpen, customStyles }} />

            {/* Meet Our Specialists Modal */}
            <MeetSpecialists Props={{ specialists, setSpecialists, customStyles }} />

            {/* Video Section Modal */}
            <Video Props={{ videoSectionModalIsOpen, setVideoSectionModalIsOpen, customStyles }} />

            {/* Our Devices Modal */}
            <OurDevices Props={{ ourDevicesModalIsOpen, setOurDevicesModalIsOpen, customStyles }} />
        </section>
    )
}

export default About