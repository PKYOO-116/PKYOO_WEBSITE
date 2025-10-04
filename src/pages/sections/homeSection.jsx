import { profileImg } from "../../assets";
import ContactList from "../../components/ContactList";

export default function HomeSection() {
  return (
    <section className="homeSec">
      <div className="container">
        <div className="grid grid-5">
          <div className="home__grid">
            <div className="home__left">
              <img src={profileImg} alt="Paul K. Yoo" className="home__photo" />
            </div>
            <div className="home__right">
              <h1 className="home__title">Paul K. Yoo</h1>
              <p className="home__subtitle">Tech + Business</p>
              <p className="home__tagline">Inter-disciplinary professional</p>
              <ul className="home__roles">
                <li>Data Scientist</li>
                <li>Data Analyst</li>
                <li>Tech Project Manager</li>
              </ul>

              <div className="home__contacts mobile tablet">
                <ContactList />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-8">
          <div className="home__contacts laptop desktop">
            <ContactList />
          </div>
        </div>
      </div>
    </section>
  );
}