import TextArea from '../partials/TextArea'
import Title from '../partials/Title'
import TitleLabel from '../partials/TitleLabel'

const Content = ({ row }) => {

  return (
    <>
      <div className="flex flex-col gap-1">
        <TitleLabel row={row}/>
        <Title row={row}/>
      </div>
      <TextArea row={row}/>
    </>
  );

}

export default Content;