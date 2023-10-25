import ClassName from 'models/classname';
import Container from 'components/Container';

const Header = ({ children, className }) => {

  const sectionClassName = new ClassName("py-16 border-b bg-slate-200");
  sectionClassName.addIf(className, className).toString();

  return (
    <header className={sectionClassName}>
      <Container>
        {children}
      </Container>
    </header>
  );

};

export default Header;