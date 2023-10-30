import TextArea from '../partials/TextArea'
import Title from '../partials/Title'
import TitleLabel from '../partials/TitleLabel'
import AcfImage from '../partials/AcfImage'

const ContentImage = ({ row }) => {

  return (
    <>
    <div className="flex flex-wrap md:flex-nowrap gap-16">
      <div className="flex flex-col gap-6 md:basis-1/2 ">
        <div className="flex flex-col gap-2">
          <TitleLabel row={row}/>
          <Title row={row}/>
        </div>
        <TextArea row={row}/>
      </div>
      <div className="flex md:basis-1/2">
        <AcfImage 
          row={row} 
          className="w-full rounded"
          width="568"
          height="426"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
    </div>
    </>
  );

}

export default ContentImage;