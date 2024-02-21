interface Props {
  children: string;
  subtext: string;
  smallSubText: boolean;
  bg: boolean;
}

const Quotes = ({ children, subtext, bg, smallSubText }: Props) => {
  return (
    <section
      className={`row d-flex text-center ${bg ? 'bg-snow-drift' : ''}  quotes`}
    >
      <h2 className="fs-2 mb-4">{children}</h2>
      <h4
        className={` ${
          smallSubText ? 'fs-5 fw-lighter' : 'fs-4 fw-bold text-uppercase'
        } `}
      >
        {subtext}
      </h4>
    </section>
  );
};

export default Quotes;
