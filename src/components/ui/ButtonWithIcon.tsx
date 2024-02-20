interface Props {
  href: string;
  dark: boolean;
  children: string;
}
const ButtonWithIcon = ({ children, dark, href }: Props) => {
  const darkStyle = dark ? 'text-light border-white' : 'text-dark border-black';

  return (
    <a
      href={href}
      className={`btn btn-outline-${
        dark ? 'dark' : 'light'
      } ${darkStyle} py-3 px-4 rounded-0 d-flex justify-content-between`}
    >
      {children}
      <i className="bi bi-chevron-right"></i>
    </a>
  );
};

export default ButtonWithIcon;
