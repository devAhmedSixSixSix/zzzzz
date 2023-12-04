import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const navigationBar = ({ setUserLang }) => {
  // Load the selected language from local storage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setUserLang(storedLanguage);
    }
  }, [setUserLang]);
  const handleLanguageSelect = (eventKey) => {
    // Handle the selected language here
    setUserLang(eventKey);

    // Save the selected language in local storage
    localStorage.setItem("selectedLanguage", eventKey);
  };
  return (
    <div>
      <Navbar key={"lg"} expand={"lg"} className="bg-white">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-primary">
            Kurier Link
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                Kurier Link
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/aboutus">
                  About Us
                </Nav.Link>
                <Nav.Link href="#action2">Services</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                <NavDropdown
                  title="Language"
                  id="basic-nav-dropdown"
                  onSelect={handleLanguageSelect}
                >
                  <NavDropdown.Item eventKey="gr">German</NavDropdown.Item>
                  <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="d-flex align-items-center">
                <Button
                  variant="primary"
                  className="px-4"
                  as={Link}
                  to="/signup"
                >
                  Register
                </Button>
                <h6 className="mb-0 mx-3">+401-235-2356</h6>
                <div>
                  <p
                    className="mb-0 d-flex align-items-center"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    1 Person <br /> Available
                    <BsChatText className="ms-2" size={18} />
                  </p>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigationBar;
