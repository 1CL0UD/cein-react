const Comments = () => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className="bi bi-star-fill me-2"></i>);
  }
  return (
    <div className="container py-4">
      {stars} <p className="fs-6">25 MAY 2024</p>
      <p className="fs-6 pb-2">
        Great starter kit. The eye cream in particular is great. Absorbs quickly
        and leaves a nourishing feeling without | being too tense.
      </p>
      <div className="mt-4 bg-secondary w-100" style={{ height: '1px' }}></div>
    </div>
  );
};

export default Comments;
