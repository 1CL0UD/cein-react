interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return <button className="atc-button w-100 px-4">{children}</button>;
};

export default Button;
