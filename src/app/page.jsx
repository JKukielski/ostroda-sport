import AboutUsSection from '@/components/AboutUsSection';
import Contact from '@/components/Contact';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';

export default function Home() {
  return (
    <div className="">
      <LatestBlogPosts />
      <AboutUsSection />
      <Schedule />
      <Contact />
      <Sponsors />
    </div>
  );
}
