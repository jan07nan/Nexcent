import HomeContent from "./HomeContent";
import Navbar from "./Navbar";
import Clients from "../Clients/Clients";
import Community from "../Community/Community";
import Pixelgrade from "../Pixelgrade/Pixelgrade";
import Members from "../Members/Members";
import Described from "../Decript2/Described";
import CustomerReview from "../CustomersReview/CustomerReview";
import Marketing from "../Marketing/Marketing";
import Terminals from "../Terminals/Terminals";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className=" ">
      <div className="flex m-auto">
        <Navbar />
      </div>
      <div>
        <HomeContent />
      </div>
      <div id="clients" className="section">
        <Clients />
      </div>
      <div id="community" className="section">
        <Community />
      </div>
      <div id="pixelgrade" className="section">
        <Pixelgrade />
      </div>
      <div id="members" className="section">
        <Members />
      </div>
      <div id="described" className="section">
        <Described />
      </div>
      <div id="customer-review" className="section">
        <CustomerReview />
      </div>
      <div id="marketing" className="section">
        <Marketing />
      </div>
      <div id="terminals" className="section">
        <Terminals />
      </div>
      <div id="footer" className="section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
