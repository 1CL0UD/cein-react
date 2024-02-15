interface Props {
  text: string;
}
const Snackbar = ({ text }: Props) => {
  return (
    <div className="snackbar pt-4">
      <p>{text}</p>
    </div>
  );
};

export default Snackbar;
