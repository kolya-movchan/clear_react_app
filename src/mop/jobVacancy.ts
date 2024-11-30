export interface JobVacancy {
  title: string;
  salary: string;
  companyName: string;
  location: string;
  description: string;
}

export const mockJobVacancies: JobVacancy[] = [
  {
    title: "Senior Software Engineer",
    salary: "$120,000 - $150,000",
    companyName: "Tech Solutions Inc",
    location: "San Francisco, CA",
    description:
      "Looking for an experienced software engineer to join our growing team...",
  },
  {
    title: "Frontend Developer",
    salary: "$90,000 - $110,000",
    companyName: "WebDev Co",
    location: "New York, NY",
    description:
      "Seeking a frontend developer with React experience to build modern web applications...",
  },
  {
    title: "Full Stack Developer",
    salary: "$100,000 - $130,000",
    companyName: "Digital Innovations",
    location: "Austin, TX",
    description:
      "Join our team to work on exciting full stack projects using modern technologies...",
  },
];
