import { useState } from "react";
import Modal from 'react-modal';
import FourBox from "../../components/FourBox";
import HeaderModal from "../../components/HeaderModal";
import "./index.scss";
import OurDepartment from "../../components/OurDepartment";
import DepartmentCards from "../../components/DepartmentCards";
import HowWeWork from "../../components/HowWeWork";
import HowWeWorkWay from "../../components/HowWeWorkWay";
import MeetOurDoctors from "../../components/MeetOurDoctors";
Modal.setAppElement('#root');

function Home() {
    const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false);
    const [fourBoxIsOpen, setFourBoxIsOpen] = useState(false);
    const [ourDepartmentModalIsOpen, setOurDepartmentModalIsOpen] = useState(false)
    const [departmentCardsIsOpen, setDepartmentCardsIsOpen] = useState(false)
    const [howWorkModalIsOpen, setHowWorkModalIsOpen] = useState(false)
    const [howWeWorkWayIsOpen, setHowWeWorkWayIsOpen] = useState(false)
    const [meetDoctorsModalIsOpen, setMeetDoctorsModalIsOpen] = useState(false)


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
                <h1>Click the buttons below to modify the home page content.</h1>
            </div>
            <div className="btns">
                <button onClick={() => setHeaderModalIsOpen(true)}>Change header text</button>
                <button onClick={() => setFourBoxIsOpen(true)}>Change four box text</button>
                <button onClick={() => setOurDepartmentModalIsOpen(true)}>ChangeOur Department text</button>
                <button onClick={() => setDepartmentCardsIsOpen(true)}>Change Department Card text</button>
                <button onClick={() => setHowWorkModalIsOpen(true)}>Change How We Work text</button>
                <button onClick={() => setHowWeWorkWayIsOpen(true)}>Change How We Work Way text</button>
                <button onClick={() => setMeetDoctorsModalIsOpen(true)}>Change Meet Our Doctor text</button>
            </div>

            {/* Header Modal */}
            <HeaderModal Props={{ headerModalIsOpen, setHeaderModalIsOpen, customStyles }} />

            {/* Four Box Modal */}
            <FourBox Props={{ fourBoxIsOpen, setFourBoxIsOpen, customStyles }} />

            {/* Our Department Modal */}
            <OurDepartment Props={{ ourDepartmentModalIsOpen, setOurDepartmentModalIsOpen, customStyles }} />

            {/* Department Cards */}
            <DepartmentCards Props={{ departmentCardsIsOpen, setDepartmentCardsIsOpen, customStyles }} />

            {/* How we work Modal */}
            <HowWeWork Props={{ howWorkModalIsOpen, setHowWorkModalIsOpen, customStyles }} />

            {/* How we work way Modal */}
            <HowWeWorkWay Props={{ howWeWorkWayIsOpen, setHowWeWorkWayIsOpen, customStyles }} />

            {/* Meet our doctors Modal */}
            <MeetOurDoctors Props={{ meetDoctorsModalIsOpen, setMeetDoctorsModalIsOpen, customStyles }} />
        </section>
    );
}

export default Home;
