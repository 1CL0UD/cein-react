import { useState } from 'react';

const QuantitySelector = () => {
  const [selectedQty, setSelectedQty] = useState(1);
  return (
    <div className="btn-group mb-3">
      <button
        type="button"
        className="btn btn-secondary text-dark rounded-0 bg-white dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedQty}
      </button>
      <ul className="dropdown-menu rounded-0">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => setSelectedQty(1)}
          >
            1
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => setSelectedQty(2)}
          >
            2
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => setSelectedQty(3)}
          >
            3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuantitySelector;
