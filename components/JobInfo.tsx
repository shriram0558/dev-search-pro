import Image from "next/image";

const companyIconMap = new Map([
 [ 'Google', 'https://cdn-icons-png.flaticon.com/512/281/281764.png' ],
]);

type JobInfoProps = {
  company: string;
  jobTitle: string;
  location: string;
  jobMode: string;
  jobType: string;
  salary: string;
  description: string;
}

export default function JobInfo({ company, jobTitle, location, jobMode, jobType, salary, description }: JobInfoProps) {
  return (
    <li className="px-4 py-5 flex flex-col bg-secondary-dark rounded-xl text-primary gap-5">
      <div className="flex justify-between">
        <Image src={`${companyIconMap.get(company)}`} width={24} height={24} alt="company-icon" />
        <div className="text-[0.6rem] flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#707172">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
          </svg>
          <p className="text-[#707172] font-bold">
            8 hours ago
          </p>
        </div>
      </div>
      <div>
        <div className="font-semibold text-lg">{jobTitle}</div>
        <p className="text-[#707172] text-sm font-medium">{company}, {location}</p>
      </div>
      <div className="flex gap-3">
        <p className="text-xs py-1 px-2 rounded-2xl bg-[#413f37] text-[#ddccb3] font-semibold">{jobMode}</p>
        <p className="text-xs py-1 px-2 rounded-2xl bg-[#493b43] text-[#cea9c4] font-semibold">{jobType}</p>
      </div>
      <div className="text-primary flex items-center gap-2 text-sm">
        <span className="material-symbols-outlined">payments</span>
        <p>
          {salary}
        </p>
      </div>
      <p className="text-xs text-[#707172] font-medium">{description}</p>
      <button className="bg-secondary rounded-lg text-background font-bold py-2 text-md">
        Apply
      </button>
    </li>
  )
}