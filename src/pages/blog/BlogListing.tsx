import HeroWindow from '../../components/shared/HeroWindow';
import JournalCard from '../../components/ui/JournalCard';
import RootLayout from '../RootLayout';

const BlogListing = () => {
  const journal = Array.from({ length: 5 }, (_, index) => (
    <JournalCard key={index} />
  ));
  return (
    <RootLayout>
      <HeroWindow textStart={false} />
      <section className="container-fluid carousel">
        <p>Insights into Health and Well-being</p>
        <h1>Our Journal</h1>
        <div className="media-scroller snaps-inline">{journal}</div>
      </section>
    </RootLayout>
  );
};

export default BlogListing;
