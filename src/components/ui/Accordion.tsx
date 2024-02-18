const Accordion = () => {
  return (
    <div className="accordion px-5 py-4" id="accordionExample">
      <div className="accordion-item border-0 rounded-0 bg-snow-drift">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed bg-snow-drift rounded-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Benefiits
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="fs-6">
              Pure Micellar Cleansing Water: <br /> All in one: make-up removal,
              cleansing and toning <br />
              Ideal for removing make-up from eyelash extensions. Suitable for
              the delicate eye area <br /> Cleanses particularly gently, ideal
              also for sensitive skin <br />
              Has a toning and moisturizing effect <br />
              Ideal for quick and deep cleansing of male skin. <br />
              The multifunctional travel companion Hydrating Eye Cream: Gentle
              care for the sensitive eye area
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item border-0 rounded-0 bg-snow-drift">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed bg-snow-drift rounded-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How To Use
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="fs-6">
              Pure Micellar Cleansing Water: <br /> All in one: make-up removal,
              cleansing and toning <br />
              Ideal for removing make-up from eyelash extensions. Suitable for
              the delicate eye area <br /> Cleanses particularly gently, ideal
              also for sensitive skin <br />
              Has a toning and moisturizing effect <br />
              Ideal for quick and deep cleansing of male skin. <br />
              The multifunctional travel companion Hydrating Eye Cream: Gentle
              care for the sensitive eye area
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item border-0 rounded-0 bg-snow-drift">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed bg-snow-drift rounded-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Ingredient
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="fs-6">
              Pure Micellar Cleansing Water: <br /> All in one: make-up removal,
              cleansing and toning <br />
              Ideal for removing make-up from eyelash extensions. Suitable for
              the delicate eye area <br /> Cleanses particularly gently, ideal
              also for sensitive skin <br />
              Has a toning and moisturizing effect <br />
              Ideal for quick and deep cleansing of male skin. <br />
              The multifunctional travel companion Hydrating Eye Cream: Gentle
              care for the sensitive eye area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
