interface Props {
  children: string;
  subtext: string;
}

const Quotes = ({ children, subtext }: Props) => {
  return (
    <section className="container-fluid quotes">
      <h2 className="fs-2 mb-4">{children}</h2>
      <h4 className="fs-4 fw-bold text-uppercase">{subtext}</h4>
    </section>
  );
};

export default Quotes;
