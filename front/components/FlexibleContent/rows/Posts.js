import TextArea from '../partials/TextArea'
import Title from '../partials/Title'
import TitleLabel from '../partials/TitleLabel'

const Posts = ({ row }) => {

  return (
    <>
      <div className="flex flex-col gap-1">
        <TitleLabel row={row}/>
        <Title row={row}/>
        <TextArea row={row}/>
      </div>
    </>
  );

}

export default Posts;