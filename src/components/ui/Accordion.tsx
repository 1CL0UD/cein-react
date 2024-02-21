interface Props {
  transparent: boolean;
  data: Content[];
}

interface Content {
  title: string;
  content: string;
}
const Accordion = ({ transparent, data }: Props) => {
  return (
    <div className="accordion px-4 py-4" id="accordionComponent">
      {data.map((item, index) => (
        <div
          className={`accordion-item border-0 rounded-0 ${
            transparent ? 'bg-transparent' : 'bg-snow-drift'
          } `}
          key={index}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                transparent ? 'bg-transparent' : 'bg-snow-drift'
              } rounded-0`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionComponent"
          >
            <div className="accordion-body">
              <p className="fs-6">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
