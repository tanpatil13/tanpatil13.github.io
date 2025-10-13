import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Menu, X } from 'lucide-react';

// Types
interface Skill {
  name: string;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
  githubUrl?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  grade?: string;
  coursework?: string;
}

interface Project {
  title: string;
  description: string;
  responsibilities?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Volunteer {
  title: string;
  organization: string;
  period: string;
  location?: string;
  subsections?: {
    title: string;
    responsibilities: string[];
  }[];
  responsibilities?: string[];
}

interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

// Data
const personalInfo = {
  first_name: "Tanishq",
  last_name: "Patil",
  title: "AI/ML Engineer | Healthcare & Biomedicine",
  // place a profile image in `public/profile.jpg` or set this to an external URL
  photo: "/profile.jpg",
  bio: "AI/ML Engineer specializing in Healthcare and Biomedicine, with a strong background in software engineering. I develop impactful, scalable, and robust machine learning solutions. My expertise includes applying AI to complex oncological care challenges, spanning biomedical imaging and large-scale clinical data.",
  bio2: "My thesis research focused on advancing prostate cancer characterization through ultra-strong gradient diffusion-weighted MRI. In collaboration with UCL CAMI and Cardiff CUBRIC, I developed self-supervised learning approaches to fit advanced biophysical models like VERDICT, leveraging data from next-generation microstructural super-scanners.",
  bio3: "Before transitioning to Healthcare AI, I served as a Senior Member of Technical Staff at Oracle Cloud Infrastructure (OCI), where I focused on their Logging Analytics service. My work involved developing and testing software solutions that significantly improved the performance, usability, and scalability of cloud services, including key contributions to the Testing Framework, Data Collection Pipeline, and Log Configuration Engine. This experience established my expertise in distributed systems, Java, Linux, Docker, and large-scale cloud architecture."
};

const skills: Skill[] = [
  { name: "Artificial Intelligence", category: "AI/ML" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "Scikit-Learn", category: "AI/ML" },
  { name: "LLMs", category: "AI/ML" },
  { name: "Hugging Face Transformers", category: "AI/ML" },
  { name: "Git/GitHub", category: "Software Development" },
  { name: "Microservices", category: "Software Development" },
  { name: "REST APIs", category: "Software Development" },
  { name: "Docker", category: "Software Development" },
  { name: "Oracle Cloud Infrastructure (OCI)", category: "Software Development" },
  { name: "CI/CD", category: "Software Development" },
  { name: "Agile", category: "Software Development" },
  { name: "Automation", category: "Software Development" },
  { name: "Python", category: "Programming Tools" },
  { name: "Java", category: "Programming Tools" },
  { name: "C++", category: "Programming Tools" },
  { name: "C", category: "Programming Tools" },
  { name: "MATLAB", category: "Programming Tools" },
  { name: "Shell", category: "Programming Tools" },
  { name: "SQL", category: "Programming Tools" },
  { name: "Linux", category: "Operating Systems" },
  { name: "Unix", category: "Operating Systems" },
  { name: "Windows", category: "Operating Systems" }
];

const experiences: Experience[] = [
  {
    title: "Research Intern (MSc Thesis Project)",
    company: "CAMI, UCL Hawkes Institute",
    period: "June 2025 - Present",
    location: "London, UK",
    responsibilities: [
      "Pioneered the first study applying ultra-strong gradient diffusion MRI for non-invasive prostate cancer characterization through PINN-based self-supervised VERDICT, in collaboration with Cardiff University Brain Research Imaging Centre (CUBRIC)",
      "Designed and evaluated multiple deep learning autoencoder architectures (U-Net, DNN) for prostate diffusion MRI parameter estimation using PyTorch",
      "Demonstrated that ultra-strong gradients improve tumour microstructural characterization and malignant-benign tissue discrimination in vivo beyond current clinical systems, supporting the vision of reducing unnecessary biopsies"
    ],
    githubUrl: "https://github.com/tanpatil13/ssVERDICT_strongGradient"
  },
  {
    title: "Senior Member of Technical Staff",
    company: "Oracle Corporation",
    period: "September 2023 - September 2024",
    location: "Bengaluru, India",
    responsibilities: [
      "Built automated test infrastructure (integration, contract, end-to-end) for data collection pipeline and log configuration engine, and maintained CI/CD pipelines for OCI Logging Analytics, improving stability and reducing regressions",
      "Contributed over 210 commits and 62 Pull Requests across 7 microservices, handling 406 Jira tickets as part of development, testing and maintenance efforts",
      "Actively managed customer-reported issues for OCI Marketplace solutions and Log Data Collection by triaging, analyzing, and prioritizing incidents, while collaborating with cross-functional teams to ensure swift resolution"
    ]
  },
  {
    title: "Member of Technical Staff",
    company: "Oracle Corporation",
    period: "July 2021 - August 2023",
    location: "Bengaluru, India",
    responsibilities: [
      "Independently led the automation and validation of OCI Marketplace integrations with Autonomous DB, IDCS, EBS, and CloudGuard, streamlining complex customer workflows and showcasing strong ownership",
      "Presented the integration architecture to 200+ stakeholders, promoting broader adoption across OCI teams and highlighting cross-functional collaboration",
      "Spearheaded Logging Analytics enhancements to align with US DoD's JWCC contract standards, including accessibility and globalization requirements"
    ]
  },
  {
    title: "Product Development Intern",
    company: "Oracle Corporation",
    period: "May 2020 - June 2020",
    location: "Bengaluru, India",
    responsibilities: [
      "Analyzed monolithic architecture and installation flow to reduce monitoring delays by introducing Pre-Downtime and Downtime Metadata Registries to isolate time-sensitive components",
      "Delivered a compliance patch within 12 days, reducing monitoring downtime by over 50% by enabling pre-deployment of most artifacts and limiting downtime to unalterable components",
      "Awarded a Pre-Placement Offer (PPO) to join for full time as a Member Technical Staff in the Summer of 2021"
    ]
  }
];

const education: Education[] = [
  {
    degree: "Master of Science (MSc) in Artificial Intelligence for Biomedicine and Healthcare",
    institution: "University College London (UCL)",
    period: "September 2024 - September 2025",
    coursework: "Relevant coursework: Deep Representations and Learning, Artificial Intelligence for Biomedicine and Healthcare, Computational Modelling for Biomedical Imaging, Statistical Natural Language Processing, Applied Artificial Intelligence"
  },
  {
    degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
    institution: "Indian Institute of Technology, Kanpur (IITK)",
    period: "July 2017 - June 2021",
    grade: "Grade: Distinction",
    coursework: "Relevant coursework: Data Mining and Knowledge Discovery, Data Structures and Algorithms, Probability and Statistics, Numerical Methods, Calculus, Linear Algebra"
  }
];

const projects: Project[] = [
  {
    title: "FrugalML: Cost-Effective LLM Adaptation in Financial Q&A",
    description: "An empirical study to provide cost-performance analysis of large language models (LLMs) in financial question answering tasks.",
    responsibilities: [
      "Fine-tuned LLaMA-3.1-8B-Instruct on FinQA dataset using LoRA, adapters, prefix-tuning, and programmatic distillation, benchmarking the efficiency and accuracy trade-offs",
      "Conducted a cost-performance analysis by tracking GPU, CPU, and Memory usage and computing floating-point operations (FLOs) to assess the training efficiency",
      "Improved model efficiency by achieving 40% higher accuracy at 1/100th FLOs with prefix-tuning and 15% higher accuracy at 1/10th FLOs with LoRA, outperforming adapter-based approaches"
    ],
    technologies: ["Python", "PyTorch", "LLMs", "Hugging Face Transformers"],
    githubUrl: "https://github.com/EmpiriNLP/FrugalML"
  },
  {
    title: "Identifying Pneumonia using Deep Learning on Chest X-Rays",
    description: "A project focused on developing a CNN-based deep learning model to identify pneumonia in chest X-ray images.",
    responsibilities: [
      "Designed and trained a deep learning model for pneumonia detection from Chest X-rays using CNN and applying data augmentation, class-weighted loss, batch norm, and dropout to address class imbalance and improve generalization",
      "Achieved 94.88% test accuracy, 0.956 F1 score, 0.98 ROC AUC, and 0.99 Precision-Recall AUC and improved minority class accuracy from 74.68% to 96.84% and reduced prediction loss by 46.6% over baseline"
    ],
    technologies: ["Python", "PyTorch", "Convolutional Neural Networks", "PIL"],
    githubUrl: "https://github.com/tanpatil13/ai-ml-projects/tree/main/Deep%20Learning%20and%20Representations/Chest%20X-Ray%20Pneumonia"
  },
  {
    title: "User Happiness Prediction using Sentiment Analysis",
    description: "A sentiment analysis project to predict user happiness from text reviews using NLP techniques across the spectrum of web browsers and digital devices.",
    responsibilities: [
      "Applied the sentiment analysis on review texts using TextBlob and VADER methods",
      "Performed an empirical analysis with 9 different machine learning models including but not limited to Logistic Regression, Support Vector Machines, XGBoost Classifier and Deep Neural Networks",
      "Achieved an accuracy of 84% and ROC Score of 0.791 with XGBoost Classifier on the test set within 1.465 seconds"
    ],
    technologies: ["Python", "Scikit-Learn", "NLP", "XGBoost", "TensorFlow"],
    githubUrl: "https://github.com/tanpatil13/ai-ml-projects/tree/main/Data%20Mining%20and%20Knowledge%20Discovery"
  },
  {
    title: "Ferroelectric Loop Tracer and the Negative Capacitance in Ferroelectric Capacitors",
    description: "A study to develop a prototype of a black box containing ferroelectric capacitor (FEC) taking sinusoidal & triangular voltage waves as input and yielding coefficients of Landau free energy equation as output.",
    responsibilities: [
      "Analysed the hysteresis behaviour of the Polarization-Electric Field curve for a Ferroelectric (FE) Capacitor",
      "Implemented the Sawyer-Tower Circuit and the R-FEC Circuit using the ferroelectric capacitors for comparative analysis",
      "Studied the Landau equation and obtained its coefficients to verify the negative capacitance in FE capacitors",
      "Employed distinct combinations of resistances and FE capacitances across varying frequencies to obtain Zero-Slope regions in FE Hysteresis Loop, indicating steady-state negative capacitance"
    ],
    technologies: ["MATLAB", "Circuit Design", "Micro-Cap Simulation", "Data Analysis"],
  }
];

const volunteers: Volunteer[] = [
  {
    title: "UG Coordinator | Core Team Operations | Student Guide",
    organization: "Institute Counselling Service, IIT Kanpur",
    period: "May 2018 - April 2021",
    location: "Indian Institute of Technology, Kanpur (IITK)",
    subsections: [
      {
        title: "Leadership",
        responsibilities: [
          "Led a 3-tier team of 350+ student volunteers over 2 years to conduct an 8-day long Orientation Program for over 1,200 incoming students annually, featuring sessions on Mental Health and Social Awareness",
          "Worked in tandem with 5 counselors, 2 psychiatrists and numerous faculty members to develop mental awareness as well as provide academic, financial and emotional assistance to the students in the campus",
          "Entrusted with responsibility of co-managing an annual budget of INR 1,500,000 allotted to the Counselling Service"
        ]
      },
      {
        title: "Initiatives",
        responsibilities: [
          "Planned 10+ sessions to sensitize freshmen on anti-ragging, substance abuse in Orientation Program 2019",
          "Expanded the scope of academic wing by on-boarding 150+ senior mentors for 2nd and 3rd year academic courses",
          "Launched a playlist of 50 videos on YouTube guiding students for internships, garnering over 14,000 views"
        ]
      },
      {
        title: "Mentoring",
        responsibilities: [
          "Offered individualized social, emotional and academic support to 5 students on Academic Probation or Warning",
          "Served as a Student Guide to 7 freshmen, assisting them in settling comfortably into campus life"
        ]
      },
      {
        title: "Impact",
        responsibilities: [
          "Efficient planning and smooth execution led to an average increment of 14% in rating for 8 out of 9 Orientation sessions",
          "Two-fold increase in students visiting de-addiction clinic implying positive impact of campaign against addiction",
          "Refining the guidance system led to a 16.5% rise in the number of students improving their academic status"
        ]
      }
    ]
  }
];

const contactInfo: ContactInfo = {
  email: "tanishqpatil.iitk@gmail.com",
  github: "github.com/tanpatil13",
  linkedin: "linkedin.com/in/tanishq-patil-69a9171a5/",
  location: "London, UK"
};

// Components
const Header: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Education', 'Projects', 'Volunteer', 'Contact'];

  return (
    <>
      <header className="bg-gradient-to-r from-teal-950 to-cyan-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2">{personalInfo.first_name + " " + personalInfo.last_name}</h1>
          <p className="text-xl opacity-90">{personalInfo.title}</p>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="hidden md:flex space-x-8 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-cyan-700 hover:text-cyan-900 font-semibold transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              className="md:hidden ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-cyan-700 hover:bg-cyan-50 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = !!personalInfo.photo && !imgError;

  return (
    <section id="about" className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex justify-center items-start">
          {hasPhoto ? (
            <img
              src={personalInfo.photo}
              alt={`${personalInfo.first_name} ${personalInfo.last_name} photo`}
              className="w-48 h-48 rounded-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-900 to-cyan-600 flex items-center justify-center text-white text-6xl font-bold">
              {personalInfo.first_name.charAt(0)+personalInfo.last_name.charAt(0)}
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-700 mb-4">{personalInfo.bio}</p>
          <p className="text-gray-700 mb-4">{personalInfo.bio2}</p>
          <p className="text-gray-700 mb-6">{personalInfo.bio3}</p>
          
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="bg-gradient-to-r from-teal-900 to-cyan-700 text-white px-4 py-2 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => (
  <section id="experience" className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
      Experience
    </h2>
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-4 border-cyan-800 pl-6">
          <h3 className="text-xl font-semibold text-gray-800 inline-flex items-center gap-2">
            <span>{exp.title}</span>
            {exp.githubUrl && (
              <a
                href={exp.githubUrl}
                className="inline-flex items-center group"
                aria-label={`View thesis work on GitHub`}
                title={`View thesis work on GitHub`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-150 group-hover:bg-cyan-700">
                  <Github className="text-cyan-700 group-hover:text-white transition-colors duration-150" size={16} />
                </span>
              </a>
            )}
          </h3>
          <p className="text-cyan-700 font-medium">{exp.company}</p>
          <p className="text-gray-500 italic text-sm">{exp.period}</p>
          {exp.location && (<p className="text-gray-500 text-sm mb-3">{exp.location}</p>)}
          {!exp.location && <div className="mb-3" />}
          {exp.description && <p className="text-gray-700 mb-2">{exp.description}</p>}
          {exp.responsibilities && (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

const Education: React.FC = () => (
  <section id="education" className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
      Education
    </h2>
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="border-l-4 border-cyan-800 pl-6">
          <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
          <p className="text-cyan-700 font-medium">{edu.institution}</p>
          <p className="text-gray-500 italic text-sm mb-2">{edu.period}</p>
          {edu.grade && <p className="text-gray-700">{edu.grade}</p>}
          {edu.coursework && <p className="text-gray-700">{edu.coursework}</p>}
        </div>
      ))}
    </div>
  </section>
);

const Projects: React.FC = () => (
  <section id="projects" className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <h3 className="text-xl font-semibold text-cyan-700 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-3">{project.description}</p>
          {project.responsibilities && (
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1 bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Volunteer: React.FC = () => (
  <section id="volunteer" className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
      Volunteer & Positions of Responsibility
    </h2>
    <div className="space-y-6">
      {volunteers.map((vol, index) => (
        <div key={index} className="border-l-4 border-cyan-800 pl-6">
          <h3 className="text-xl font-semibold text-gray-800">{vol.title}</h3>
          <p className="text-cyan-700 font-medium">{vol.organization}</p>
          <p className="text-gray-500 italic text-sm">{vol.period}</p>
          {vol.location && (
            <p className="text-gray-500 text-sm mb-3">{vol.location}</p>
          )}
          {!vol.location && <div className="mb-3" />}
          
          {vol.subsections ? (
            <div className="space-y-4">
              {vol.subsections.map((subsection, subIndex) => (
                <div key={subIndex}>
                  <h4 className="font-semibold text-gray-800 mb-2">{subsection.title}:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    {subsection.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : vol.responsibilities ? (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {vol.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold text-cyan-800 mb-6 pb-2 border-b-4 border-cyan-800">
      Contact Me
    </h2>
    <p className="text-gray-700 mb-6">
      I’m always interested in connecting about new opportunities and research in AI for Healthcare and Biomedicine. Feel free to reach out!
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex items-center gap-4">
        <Mail className="text-cyan-700" size={24} />
        <div>
          <p className="font-semibold">Email</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-gray-700 hover:underline"
            aria-label={`Send email to ${contactInfo.email}`}
            title={`Send email to ${contactInfo.email}`}
          >
            {contactInfo.email}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Github className="text-cyan-700" size={24} />
        <div>
          <p className="font-semibold">GitHub</p>
          <a
            href={`${contactInfo.github.startsWith('http') ? '' : 'https://'}${contactInfo.github}`}
            className="text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open GitHub profile`}
            title={`Open GitHub profile`}
          >
            {contactInfo.github}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Linkedin className="text-cyan-700" size={24} />
        <div>
          <p className="font-semibold">LinkedIn</p>
          <a
            href={`${contactInfo.linkedin.startsWith('http') ? '' : 'https://'}${contactInfo.linkedin}`}
            className="text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open LinkedIn profile`}
            title={`Open LinkedIn profile`}
          >
            {contactInfo.linkedin}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MapPin className="text-cyan-700" size={24} />
        <div>
          <p className="font-semibold">Location</p>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(contactInfo.location)}`}
            className="text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open location in Google Maps`}
            title={`Open location in Google Maps`}
          >
            {contactInfo.location}
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white text-center py-8 mt-12">
    <p>&copy; 2025 {personalInfo.first_name} {personalInfo.last_name}. All rights reserved.</p>
    <p className="mt-2 text-gray-400">Built with React + TypeScript</p>
  </footer>
);

// Main App Component
const App: React.FC = () => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Volunteer />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;