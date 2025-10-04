import ContactList from "../components/ContactList";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contacts">
          <ContactList useInFooter />
        </div>

        <div className="footer__name">Paul K. Yoo</div>
      </div>
    </footer>
  );
}