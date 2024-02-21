const JournalCard = () => {
  return (
    <div className="media-element journal">
      <img src="/img/journal/journal-1.png" alt="product-2" />
      <p className="fs-6 text-uppercase">Skin Concierge</p>
      <h5 className="fs-5 fw-semibold">
        Distinguishing Mineral Sunscreens from Chemical Sunscreens
      </h5>
      <a className="read-more-btn" href="/blog/post">
        Read More
        <i className="bi bi-chevron-right"></i>
      </a>
    </div>
  );
};

export default JournalCard;
