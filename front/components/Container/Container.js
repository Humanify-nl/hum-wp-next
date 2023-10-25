import ClassName from 'models/classname';

const Container = ({ children, className }) => {

  const containerClassName = new ClassName("container mx-auto max-w-6xl flex flex-col gap-text-1");
  containerClassName.addIf(className, className).toString();

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );

};

export default Container;