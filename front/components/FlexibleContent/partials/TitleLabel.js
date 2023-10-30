

const Title = ({ row }) => {

  return (
    row.title_label && (
      <p className="uppercase">{row.title_label}</p>
    )
  );

}

export default Title;