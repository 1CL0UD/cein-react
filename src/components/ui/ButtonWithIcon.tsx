interface Props {
  dark: boolean;
  children: string;
}
const ButtonWithIcon = ({ children, dark }: Props) => {
  const darkStyle = dark ? 'text-light border-white' : 'text-dark border-black';

  return (
    <button
      className={`btn btn-outline-${
        dark ? 'dark' : 'light'
      } ${darkStyle} py-3 px-4 rounded-0 d-flex justify-content-between`}
    >
      {children}
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};

export default ButtonWithIcon;
