import BookTour from "../components/BookTour";
import Header from "../components/Header";
import Main from "../components/Main";
import Rental from "../components/Rental";
import Fleet from "../components/Fleet";
import Ad from "../components/Ad";
import Faq from "../components/Faq";
import Speedboats from "../components/Speedboats";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Main />
      <BookTour />
      <Rental />
      <Fleet />
      <Ad />
      <Faq />
      <Speedboats />
      <Footer />
    </div>
  );
};

export default Homepage;
