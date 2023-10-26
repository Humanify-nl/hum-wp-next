import ClassName from 'models/classname';
import Container from 'components/Container';

const Header = ({ children, className }) => {

  const headerClassName = new ClassName("py-16 border-b bg-slate-200");
  headerClassName.addIf(className, className).toString();

  return (
    <header className={headerClassName}>
      <Container>
        {children}
      </Container>
    </header>
  );

};

export default Header;