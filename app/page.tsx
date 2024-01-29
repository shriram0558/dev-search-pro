import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import JobListings from "@/components/JobListings";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Navbar pathname='/' />
      <Hero />
      <SearchForm />
      <JobListings />
    </main>
  );
}
