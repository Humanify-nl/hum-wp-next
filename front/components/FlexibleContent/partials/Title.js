

const Title = ({ row }) => {

  return (
    row.title && (
      <h2 className="text-h2">{row.title}</h2>
    )
  );

}

export default Title;