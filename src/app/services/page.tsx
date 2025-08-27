import Pageheader2 from '@/components/Pageheader2';
import Services1 from '@/components/Services1';
import Pricing from '@/components/Pricing';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader2 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Services1 />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Pricing />
      </section>
    </main>
  );
}