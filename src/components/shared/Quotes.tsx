interface Props {
  children: string;
  subtext: string;
  bg: boolean;
}

const Quotes = ({ children, subtext, bg }: Props) => {
  return (
    <section
      className={`row d-flex text-center ${bg ? 'bg-snow-drift' : ''} quotes`}
    >
      <h2 className="fs-2 mb-4">{children}</h2>
      <h4 className="fs-4 fw-bold text-uppercase">{subtext}</h4>
    </section>
  );
};

export default Quotes;
