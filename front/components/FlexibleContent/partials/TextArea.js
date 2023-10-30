

const TextArea = ({ row }) => {

  return (
    row.textarea && (
      <div className="text-p">{row.textarea}</div>
    )
  );

}

export default TextArea;