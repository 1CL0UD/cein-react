interface Props {
  tabsList: string[];
}
const UnderlineTabs = ({ tabsList }: Props) => {
  return (
    <ul className="nav nav-underline justify-content-start">
      <li className="nav-item pe-3 border-3 border-black border-end">
        <a className="fw-bold" aria-current="page">
          Shop All
        </a>
      </li>
      {tabsList.map((item) => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UnderlineTabs;
