interface Props {
  transparent: boolean;
  data: Content[];
  hrefContent: boolean;
  darkBg: boolean;
  showStores?: () => void;
}

interface Content {
  title: string;
  content: string | string[];
}
const Accordion = ({
  transparent,
  data,
  hrefContent,
  darkBg,
  showStores,
}: Props) => {
  return (
    <div className="accordion px-md-4 py-4 w-100" id="accordionComponent">
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
              } ${darkBg ? 'text-light' : 'text-dark'} rounded-0 fw-semibold`}
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
            className={`accordion-collapse collapse ${
              darkBg ? 'text-light' : 'text-dark'
            }`}
            data-bs-parent="#accordionComponent"
          >
            {hrefContent && item.content.length > 0 ? (
              <div className="accordion-body p-0 d-flex flex-column gap-2">
                <div className="accordion-body d-flex flex-column gap-2">
                  {Array.isArray(item.content) ? (
                    item.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>
                        {contentItem.toLowerCase() === 'stores' ? (
                          <button className="nav-link" onClick={showStores}>
                            {contentItem}
                          </button>
                        ) : (
                          <a
                            href={`/${contentItem.toLowerCase()}`}
                            className="nav-link"
                          >
                            {contentItem}
                          </a>
                        )}
                      </div>
                    ))
                  ) : (
                    <a href="#" className="nav-link">
                      {item.content}
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="accordion-body">
                <p className="fs-6">{item.content}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
