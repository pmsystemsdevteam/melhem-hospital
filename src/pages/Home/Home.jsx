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
import OurBlog from "../../components/OurBlog";
import WhyChooseUs from "../../components/WhyChooseUs";
import Appointment from "../../components/Appointment";
import FaqHead from "../../components/FaqHead";
import Faq from "../../components/Faq";
import WhyChooseUsBox from "../../components/WhyChooseUsBox";
import TestimonialsHead from "../../components/TestimonialsHead";
import Testimonials from "../../components/Testimonials";
Modal.setAppElement('#root');

function Home() {
    const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false);
    const [fourBoxIsOpen, setFourBoxIsOpen] = useState(false);
    const [ourDepartmentModalIsOpen, setOurDepartmentModalIsOpen] = useState(false)
    const [departmentCardsIsOpen, setDepartmentCardsIsOpen] = useState(false)
    const [howWorkModalIsOpen, setHowWorkModalIsOpen] = useState(false)
    const [howWeWorkWayIsOpen, setHowWeWorkWayIsOpen] = useState(false)
    const [meetDoctorsModalIsOpen, setMeetDoctorsModalIsOpen] = useState(false)
    const [ourBlogModalIsOpen, setOurBlogModalIsOpen] = useState(false)
    const [whyChooseUsModalIsOpen, setWhyChooseUsModalIsOpen] = useState(false)
    const [whyChooseUsBoxModalIsOpen, setWhyChooseUsBoxModalIsOpen] = useState(false)
    const [testimonailsHeadModalIsOpen, settestimonailsHeadModalIsOpen] = useState(false)
    const [testimonailsModalIsOpen, setTestimonailsModalIsOpen] = useState(false)
    const [faqHeadModalIsOpen, setFaqHeadModalIsOpen] = useState(false)
    const [faqModalIsOpen, setFaqModalIsOpen] = useState(false)
    const [appointmentModalIsOpen, setAppointmentModalIsOpen] = useState(false)

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
                <button onClick={() => setOurBlogModalIsOpen(true)}>Change Our Blog text</button>
                <button onClick={() => setWhyChooseUsModalIsOpen(true)}>Change Why Choose Us Head text</button>
                <button onClick={() => setWhyChooseUsBoxModalIsOpen(true)}>Change Why Choose Us Cards text</button>
                <button onClick={() => settestimonailsHeadModalIsOpen(true)}>Change Testimonials Head text</button>
                <button onClick={() => setTestimonailsModalIsOpen(true)}>Change Testimonials text</button>
                <button onClick={() => setFaqHeadModalIsOpen(true)}>Change FAQ Head text</button>
                <button onClick={() => setFaqModalIsOpen(true)}>Change FAQ text</button>
                <button onClick={() => setAppointmentModalIsOpen(true)}>Change Appointment text</button>
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

            {/* Our Blog Modal */}
            <OurBlog Props={{ ourBlogModalIsOpen, setOurBlogModalIsOpen, customStyles }} />

            {/* Why Choose Us Modal */}
            <WhyChooseUs Props={{ whyChooseUsModalIsOpen, setWhyChooseUsModalIsOpen, customStyles }} />

            {/* Why Choose Us Modal */}
            <WhyChooseUsBox Props={{ whyChooseUsBoxModalIsOpen, setWhyChooseUsBoxModalIsOpen, customStyles }} />

            {/* testimonailsHeadModal Modal */}
            <TestimonialsHead Props={{ settestimonailsHeadModalIsOpen, testimonailsHeadModalIsOpen, customStyles }} />

            {/* testimonails Modal */}
            <Testimonials Props={{ testimonailsModalIsOpen, setTestimonailsModalIsOpen, customStyles }} />

            {/* Faq Modal */}
            <Faq Props={{ faqModalIsOpen, setFaqModalIsOpen, customStyles }} />

            {/* Faq Head Modal */}
            <FaqHead Props={{ faqHeadModalIsOpen, setFaqHeadModalIsOpen, customStyles }} />

            {/* Appointment Modal */}
            <Appointment Props={{ appointmentModalIsOpen, setAppointmentModalIsOpen, customStyles }} />
        </section>
    );
}

export default Home;
