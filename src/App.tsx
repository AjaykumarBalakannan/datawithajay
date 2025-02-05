import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy,
  ScrollText,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ajaykumar Balakannan</h1>
            <p className="text-xl md:text-2xl text-blue-100">Data Science Graduate Student</p>
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com" className="p-2 hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:ajayport@umd.edu" className="p-2 hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Master's in Data Science</h3>
              <p className="text-gray-600">University of Maryland • Expected May 2026</p>
              <p className="mt-3 text-gray-700">
                Relevant coursework: Natural Language Processing, Machine Learning, Big Data Systems, Deep Learning
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Electrical and Electronics Engineering</h3>
              <p className="text-gray-600">Sri Krishna College of Engineering and Technology • Aug 2020 - May 2024</p>
              <p className="mt-3 text-gray-700">
                Relevant coursework: Microcontrollers, Power System Analysis, Python Programming, Machine Learning in Energy Systems
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <p className="text-gray-700">Python, R, AWS, Java, MySQL, Tableau, Web Development, Web Scraping, Databricks, PySpark, Apache</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
              <p className="text-gray-700">Matplotlib, scikit-learn, NumPy, Pandas, Seaborn, BeautifulSoup, Keras, Dash</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Certifications</h3>
              <p className="text-gray-700">Google Data Analytics (Coursera), Python for Beginners (Udemy)</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Safeguarding Agricultural Lands from Animal Intrusion
                <span className="text-gray-500 text-sm ml-2">Mar 2023</span>
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                <li>Implemented YOLO algorithm in Python to detect animal intrusions and deploy automated deterrents</li>
                <li>Published research paper in BIOGECKO (New Zealand Herpetology journal)</li>
                <li>Developed AI-powered surveillance system for farmland protection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Academic Performance Prediction
                <span className="text-gray-500 text-sm ml-2">Sep 2024</span>
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                <li>Designed ML pipeline achieving 92% accuracy in student performance prediction</li>
                <li>Utilized scikit-learn and Python for data processing</li>
                <li>Deployed on AWS with CI/CD pipeline</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Technocraft Hackathon Winner</h3>
              <p className="text-gray-700 mt-2">Secured 2nd place among 500+ teams, winning $300 prize</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Microsoft & Walmart Workshop</h3>
              <p className="text-gray-700 mt-2">Completed intensive web development workshop at IIT Chennai</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Ajaykumar Balakannan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;