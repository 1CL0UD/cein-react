interface Props {
  showNumber: boolean;
  progress: number;
}
const ProgressBar = ({ showNumber, progress }: Props) => {
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;
  const fill = progress / 100;
  return (
    <div className="d-flex flex-row flex-fill align-items-center justify-content-between">
      <div className="d-flex flex-fill border border-1 border-black me-2">
        <div
          className={`d-flex  ${fill > 0 ? 'bg-dark' : ''} `}
          style={{ height: '1rem', flex: `${fill} 1 auto` }}
        ></div>
      </div>

      {showNumber ? <p className="fs-6 mb-0">{progress}%</p> : ''}
    </div>
  );
};

export default ProgressBar;
