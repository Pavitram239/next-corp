import Hero from '@/components/Hero';
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We Serve High Performance Application"
    />
  );
}
