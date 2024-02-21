interface Props {
  href: string;
  dark: boolean;
  border: boolean;
  children: string;
}
const ButtonWithIcon = ({ children, dark, href, border }: Props) => {
  const darkStyle = dark ? 'text-light border-white' : 'text-dark border-black';

  return (
    <a
      href={href}
      className={`btn btn-outline-${
        dark ? 'dark' : 'light'
      } ${darkStyle} py-3 px-4 ${
        border ? '' : 'border-0 ps-1'
      } rounded-0 d-flex justify-content-between`}
    >
      {children}
      <i className="bi bi-chevron-right"></i>
    </a>
  );
};

export default ButtonWithIcon;
