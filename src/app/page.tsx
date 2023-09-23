// Component Imports
import EaysCargoSlider from "../components/eays-cargo-slider/Slider";
import OurServices from "../components/our-services/OurServices";
import MancoArt from "../components/manco-art/MancoArt";
import PersonSection from "../components/person-section/PersonSection";
import CustomerFeedBack from "../components/customer-feedback/CustomerFeedBack";
import MessageRequestSection from "../components/message-request-section/MessageRequestSection";
import FaqSection from "../components/faq-section/FaqSection";
import StartForm from "../components/start-form/StartForm";

const page = () => {
  return (
    <>
      <EaysCargoSlider />
      <OurServices />
      <MancoArt />
      <PersonSection />
      <CustomerFeedBack />
      <MessageRequestSection />
      <FaqSection />
      <StartForm />
    </>
  );
};

export default page;
