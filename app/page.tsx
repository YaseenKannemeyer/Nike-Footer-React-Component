import Footer from "../componenets/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Scroll test sections */}
      <main className="flex-1">
        <section className="h-screen bg-black flex items-center justify-center text-white text-4xl">
          Section 1
        </section>

        <section className="h-screen bg-neutral-900 flex items-center justify-center text-white text-4xl">
          Section 2
        </section>

        <section className="h-screen bg-black flex items-center justify-center text-white text-4xl">
          Section 3
        </section>
      </main>

      {/* Footer */}
      
        <Footer />
    
    </div>
  );
}
