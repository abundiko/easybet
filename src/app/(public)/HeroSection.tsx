export default function HeroSection() {
  return (
    <section className="h-[40vh] bg-[url(/images/hero-bg.png)]">
      <div className="w-full h-full bg-[#00000044] text-light flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-semibold text-2xl lg:text-3xl mb-3">Soccer</h1>
        <p className="">
          Choose any soccer team of your choice and place your bet
        </p>
      </div>
    </section>
  );
}
