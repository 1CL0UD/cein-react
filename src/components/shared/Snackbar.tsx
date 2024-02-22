interface Props {
  text: string;
  show: boolean;
}
const Snackbar = ({ text, show }: Props) => {
  return (
    <div className={`snackbar pt-4 px-md-4 ${show ? 'd-auto' : 'd-none'}`}>
      <p className="fs-6">{text}</p>
    </div>
  );
};

export default Snackbar;
