import ClassName from 'models/classname';
import Container from 'components/Container';

const Footer = ({ children, className }) => {

  const footerClassName = new ClassName("py-10");
  footerClassName.addIf(className, className).toString();

  return (
    <footer className={footerClassName}>
      <Container>
        {children}
      </Container>
    </footer>
  );

};

export default Footer;