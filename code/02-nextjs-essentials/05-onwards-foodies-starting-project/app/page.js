import Link from 'next/link';
import CommunityPage from './community/page';
import MealsPage from './meals/page';

export default function Home() {
  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Foodies</div>
        <div>
          <Link href='/meals'>Meals</Link>
          <Link href='/community'>Community</Link>
        </div>
      </nav>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Foodies Community</h1>
    </main>
  );
}
