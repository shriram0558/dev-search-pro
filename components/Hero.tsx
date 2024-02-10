export default async function Hero() {
  return (
    <section className="flex flex-col gap-7 my-20 justify-center items-center w-full">
      <div className="bg-secondary-dark text-secondary text-xs rounded-2xl py-[0.35rem] px-3 font-medium">
        Over 2000+ jobs listed
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-primary font-bold text-5xl">
          Find your new Job in a
        </h2>
        <h2 className="text-secondary font-bold text-5xl">Few Clicks</h2>
      </div>
      <p className="w-[40%] text-tertiary-dark text-center font-semibold text-sm">
        DevSearchPro is a job board for developers which organises jobs from
        various career sites at a single place.
      </p>
    </section>
  );
}
