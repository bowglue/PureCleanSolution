import Layout from "../../layout/Layout";
import Landing from "./sections/landing/Landing";
import Process from "./sections/process/Process";
import Service from "./sections/service/Service";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Process />
      <Service />
      <Process />
      <section>Testimonial</section>
      <section>FAQ</section>
      <section>Contact</section>
    </Layout>
  );
};

export default Home;
