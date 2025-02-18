import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "SmartHarvest Client Engagement Web Portal",
    description:
      "A comprehensive rewards and loyalty platform using Django and React.js, serving 5,000+ active users. This project showcases advanced web development skills, integrating a robust backend with Django and a dynamic frontend using React.js. Key features include user authentication, personalized reward tracking, and real-time analytics for client engagement. The platform's scalability and performance optimizations allowed it to handle a large user base efficiently.",
    image: "/shbg.png",
    link: "https://github.com/maaazkashif/SmartHarvest",
    tags: ["Django", "React.js", "RESTful API", "PostgreSQL", "Redux"],
  },
  {
    title: "Auction Database Management System",
    description:
      "A sophisticated relational SQL database in Oracle SQL Server, optimizing data management for 10,000+ records. This project demonstrates proficiency in database design and management, featuring complex SQL queries, stored procedures, and triggers for efficient auction processes. The system includes modules for user management, item cataloging, bid tracking, and transaction processing, showcasing the ability to handle large-scale data operations.",
    image: "/adbms.png",
    link: "https://github.com/maaazkashif/Auction-Database-Management-System",
    tags: ["SQL", "Oracle", "Python", "Tkinter", "Database Design"],
  },
  {
    title: "Credit Card Financial Data Analysis",
    description:
      "Designed and implemented 5+ interactive Power BI dashboards to track spending patterns, fraud detection, and customer segmentation. This project highlights skills in data analysis and visualization, utilizing advanced Power BI features to transform raw financial data into actionable insights. The dashboards include predictive models for fraud detection, customer spending forecasts, and interactive filters for in-depth analysis of credit card usage trends.",
    image: "/cc.jpg",
    link: "https://github.com/maaazkashif/Credit-Card-Financial-Data-Analysis",
    tags: ["Power BI", "SQL", "Data Analysis", "Financial Modeling", "Data Visualization"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

