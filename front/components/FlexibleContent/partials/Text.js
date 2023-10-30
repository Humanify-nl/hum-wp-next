

const Text = ({ row }) => {

  return (
    row.text && (
      <p className="text-p">{row.text}</p>
    )
  );

}

export default Text;