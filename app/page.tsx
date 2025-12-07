import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import RolesSection from '@/components/RolesSection';
import ROISection from '@/components/ROISection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-deep-slate pt-16">
      <Hero />
      <div id="problem" className="w-full">
        <ProblemSection />
      </div>
      <div id="solution" className="w-full">
        <SolutionSection />
      </div>
      <div id="roles" className="w-full">
        <RolesSection />
      </div>
      <div id="roi" className="w-full">
        <ROISection />
      </div>
    </main>
  );
}
