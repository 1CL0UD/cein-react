import Accordion from '../ui/Accordion';

interface Props {
  showMobileNav: boolean;
  toggleStores: () => void;
}
const MobileNav = ({ showMobileNav, toggleStores }: Props) => {
  const navItems = [
    {
      title: 'Products',
      content: [
        'Cleanse',
        'Exfoliate',
        'Treate & Masque',
        'Tone',
        'Hydrate',
        'Eyes & Lips',
        'Sun Care',
        'Shave',
      ],
    },
    { title: 'About Us', content: ['News', 'Vision', 'Q&A'] },
    {
      title: 'Journal',
      content: ['About Concierge', 'Online Consultation', 'Market'],
    },
    { title: 'Stores', content: ['Stores'] },
  ];
  return (
    <div
      className={`position-absolute border-top border-2 border-secondary bg-white z-3 container-fluid ${
        showMobileNav ? 'd-auto' : 'd-none'
      }`}
    >
      <div
        className="d-flex flex-column align-items-start justify-content-start"
        style={{ height: '91.5vh' }}
      >
        <div className="w-100">
          <Accordion
            transparent={true}
            data={navItems}
            hrefContent={true}
            darkBg={false}
            showStores={toggleStores}
          />
        </div>
        <div className="d-flex flex-column gap-2 px-3">
          <a href="/login" className="fs-5 text-secondary">
            Log in
          </a>
          <a href="" className="fs-5 text-secondary">
            Customer Support
          </a>
          <a href="" className="fs-5 text-secondary">
            Language
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
