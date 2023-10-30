import ClassName from 'models/classname';
import Container from 'components/Container';

const Section = ({ children, className }) => {

  const sectionClassName = new ClassName("py-24 md:py-32");
  sectionClassName.addIf(className, className).toString();

  return (
    <section className={sectionClassName}>
      <Container>
        {children}
      </Container>
    </section>
  );

};

export default Section;