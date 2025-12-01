// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Hi, I'm{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Rahul Sewa 
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Backend Engineer | AI Enthusiast | Problem Solver

          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="../public/assets/documents/Rahul_Sewa_2025.pdf" /* PUT YOUR CV DOWNLOAD URL HERE */
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CV
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          {/* REPLACE THIS IMG WITH YOUR NEW SVG */}
          {/* OLD IMAGE: ./assets/images/hacker.png */}
          {/* PUT YOUR NEW SVG CODE HERE */}
          <img
            src="public/assets/images/man-developing-website-on-desk.svg"
            alt="Hero illustration"
            className="w-full h-auto lg:h-96 xl:h-[500px] 2xl:h-[500px]"
          />
          {/* UPDATE FILENAME: Change 'your-svg-file.svg' to your actual SVG filename */}
        </div>
      </div>
    </section>

{/* Smooth Curve Divider */}
{/* Gradient Curve Divider */}

{/* Green Wave Curve */}
<div className="w-full overflow-hidden" style={{backgroundColor: 'transparent'}}>
  <svg
    viewBox="0 0 1440 150"
    preserveAspectRatio="none"
    className="w-full h-36"
    style={{backgroundColor: 'transparent', display: 'block'}}
  >
    <path
      d="M0,50 C360,150 1080,0 1440,100 L1440,150 L0,150 Z"
      fill="rgb(16 185 129)"
      className="dark:fill-green-900"
    ></path>
  </svg>
</div>

{/* <div className="w-full h-24 bg-gradient-to-b from-transparent to-green-100 dark:to-gray-900"></div> */}



{/* Section Separator */}
          {/* #### SERVICES SECTION #### */}
          <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me
              </h2>
              <br></br>
              <p className="mb-4 text-lg">
                I'm a passionate cybersecurity professional and full-stack developer with expertise in ethical hacking, penetration testing, and secure application development. My journey began with CTF competitions and has evolved into a comprehensive skill set that bridges security and development.
              </p>
              <p className="mb-4 text-lg">
                With proficiency in multiple programming languages including Python, Java, JavaScript, and PHP, I specialize in identifying vulnerabilities that others miss. I excel at building secure, scalable web applications while maintaining a security-first mindset throughout the development lifecycle.
              </p>
              <p className="text-lg">
                My approach combines creative problem-solving with rigorous methodology, ensuring comprehensive security assessments and robust solutions that protect digital assets effectively.
              </p>
              <a 
                href="/assets/documents/CV_YourName.pdf" 
                download="YourName_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </div>
            {/* Creative Interactive Element */}
            <div className="mt-8 max-w-lg mx-auto">
              {/* Animated Code Editor Mockup */}
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">portfolio.js</span>
                </div>
                
                {/* Code Content */}
                <div className="p-4 font-mono text-sm">
                  <div className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}
                  </div>
                  <div className="ml-4 text-green-400">name: <span className="text-yellow-300">'Rahul Sewa'</span>,</div>
                  <div className="ml-4 text-green-400">role: <span className="text-yellow-300">'Backend Engineer'</span>,</div>
                  <div className="ml-4 text-green-400">skills: [</div>
                  <div className="ml-8 text-yellow-300">'Java', 'Python', 'JavaScript',</div>
                  <div className="ml-8 text-yellow-300">'Spring Boot', 'PostgreSQL', 'AI'</div>
                  <div className="ml-4 text-green-400">],</div>
                  <div className="ml-4 text-green-400">passion: <span className="text-yellow-300">'Problem Solving'</span>,</div>
                  <div className="ml-4 text-green-400">status: <span className="text-yellow-300">'Available for opportunities'</span></div>
                  <div className="text-purple-400">{'};'}</div>
                  
                  {/* Animated cursor */}
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-400">console.log(developer);</span>
                    <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Fun Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Languages</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-sm opacity-90">Coffee Cups</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #### SKILLS SECTION #### */}
        <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-screen-xl px-4 mx-auto">
            <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Skills
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Here are the technologies and tools I work with
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              {/* React */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85S10.13 13.04 10.13 12s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.92 12c.19-.46.35-.91.5-1.36 2.17.68 3.5 1.61 3.5 2.36 0 .75-1.33 1.68-3.5 2.36-.15-.45-.31-.9-.5-1.36M6.08 12c-.19.46-.35.91-.5 1.36-2.17-.68-3.5-1.61-3.5-2.36 0-.75 1.33-1.68 3.5-2.36.15.45.31.9.5 1.36"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">React</span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.61-.39 1.61-1.06V9.22c0-.19-.15-.34-.34-.34H7.27c-.19 0-.34.15-.34.34v7.95c-.75-.34-1.19-.8-1.19-1.31V7.28c0-.28.15-.54.4-.68l7.44-4.3c.25-.14.56-.14.81 0l7.44 4.3c.25.14.4.4.4.68v8.58c0 .28-.15.54-.4.68l-7.44 4.3c-.25.14-.56.14-.81 0l-1.95-1.12c-.08-.05-.19-.05-.28 0-.58.32-1.1.56-1.85.56-.37 0-.73-.11-1.06-.28l1.71-.99c.19-.11.31-.32.31-.55V9.22c0-.19-.15-.34-.34-.34h-1.44c-.19 0-.34.15-.34.34v6.95c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.41c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Node.js</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.4 0-.75-.1-1.06-.29-.32-.2-.57-.47-.76-.82-.18-.34-.28-.73-.28-1.18 0-.43.1-.82.28-1.16.19-.35.44-.62.76-.82.31-.19.66-.29 1.06-.29.39 0 .74.1 1.04.29.31.2.56.47.75.82.18.34.28.73.28 1.16 0 .45-.1.84-.28 1.18-.19.35-.44.62-.75.82-.3.19-.65.29-1.04.29z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Python</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.93-.953.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.983M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Java</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">JavaScript</span>
              </div>

              {/* PHP */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.313-.27.47-.659.47-1.17 0-.828-.337-1.087-.331-1.087H7.01zm19.113 2.466C26.75 9.83 24.718 8.5 22.126 8.5c-4.606 0-9.389 3.147-12.043 7.897C7.428 21.14 10.464 24 14.557 24c4.606 0 9.389-3.147 12.043-7.897.737-1.295.474-2.466-.477-3.43zM8.5 12.207c0 .602-.252 1.18-.676 1.615-.424.434-1.043.652-1.857.652H4.045l-.286 1.477H1.23L2.8 9.055h3.745c.943 0 1.7.213 2.269.64.569.427.853 1.039.853 1.837 0 .035-.003.07-.005.105h-.162zm12.662 3.59c-.518 0-.937-.137-1.257-.41s-.48-.654-.48-1.14c0-.486.16-.9.48-1.173s.739-.41 1.257-.41c.518 0 .937.137 1.257.41s.48.687.48 1.173c0 .486-.16.867-.48 1.14s-.739.41-1.257.41zm5.348-1.477L24.7 18.26h-2.53l.286-1.477c.154-.793-.231-1.192-.692-1.192-.46 0-.999.399-1.153 1.192L20.32 18.26h-2.53l1.81-9.323h2.53l-.793 4.088c.287-.287.861-.574 1.437-.574 1.152 0 2.017.861 1.726 2.87z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">PHP</span>
              </div>

              {/* Spring Boot */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8537 1.4158c-.4799-.4799-1.2594-.4799-1.7393 0L18.5385 2.9918c-.1067.1067-.2134.1067-.32 0l-.2134-.2134c-.5866-.5866-1.5992-.5866-2.1858 0-.5866.5866-.5866 1.5992 0 2.1858l.2134.2134c.1067.1067.1067.2134 0 .32L14.6589 6.8714c-.4799.4799-.4799 1.2594 0 1.7393.4799.4799 1.2594.4799 1.7393 0l1.3759-1.3759c.1067-.1067.2134-.1067.32 0l.2134.2134c.5866.5866 1.5992.5866 2.1858 0 .5866-.5866.5866-1.5992 0-2.1858l-.2134-.2134c-.1067-.1067-.1067-.2134 0-.32l1.4759-1.4759c.4799-.4799.4799-1.2594 0-1.7393zM8.4 7.2c-2.9823 0-5.4 2.4177-5.4 5.4s2.4177 5.4 5.4 5.4 5.4-2.4177 5.4-5.4S11.3823 7.2 8.4 7.2zm0 8.4c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3-1.3431 3-3 3z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Spring Boot</span>
              </div>

              {/* Laravel */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.026.018.037.027.013.014.02.03.033.045.008.011.02.02.024.033.012.016.021.036.028.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.028.013-.012.027-.023.04-.032h.003l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.02.025.033.011.02.021.040.024.059.006.01.012.021.015.032.009.032.013.065.013.098zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.02-.028-.033-.011-.016-.018-.033-.024-.05-.008-.014-.013-.027-.016-.042-.004-.016-.004-.034-.004-.051V7.472l-2.184-1.256zm8.925-2.448L6.257 3.624l3.761 2.164 3.758-2.164L10.018 1.176zm.559 2.203L7.809 5.532v4.317l2.182-1.256 1.578-.908zm12.207.375L19.043 5.53l3.760 2.165 3.759-2.164-3.760-2.165zM22.01 7.623v4.317l-2.182 1.256-1.579.908V9.821l3.761-2.164zm-8.63 9.325l5.618-3.203v-4.287L15.232 7.287v9.661z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Laravel</span>
              </div>

              {/* MongoDB */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-3.017.33-3.17.417-.296 5.304-3.788 4.972-11.275zM12.269 23.745c-.073-.39-.073-.39-.427-.81-.665-.62-6.356-4.084-6.09-11.045.22-5.733 3.175-8.624 3.856-9.52.681-.895.681-.895.681-.895l.006.006c.094.199.308.629.308.629.418.656 3.245 2.328 3.245 2.328 2.379 3.012 3.266 7.363 2.85 10.847a18.45 18.45 0 01-1.015 4.533c-.26.693-.537 1.372-.895 2.927z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">MongoDB</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.111 5.441c-.777-1.185-2.36-1.839-4.713-1.946l-.344-.013c-1.06 0-1.986.047-2.793.141a17.19 17.19 0 00-2.229.391c-2.681.683-4.031 1.787-4.031 3.294v.954c0 .44.152.831.454 1.171-.302.340-.454.731-.454 1.171v2.861c0 1.507 1.35 2.611 4.031 3.294a17.19 17.19 0 002.229.391c.807.094 1.733.141 2.793.141l.344-.013c2.353-.107 3.936-.761 4.713-1.946.777-1.185.777-2.681 0-3.866-.777-1.185-2.36-1.839-4.713-1.946V8.488c2.353-.107 3.936-.761 4.713-1.946.777-1.185.777-2.681 0-3.866v.765z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">PostgreSQL</span>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.151zM18.79 1.5c-.18.003-.31.016-.403.027-.32.038-.66.144-.85.225-.31.13-.731.33-.994.546-.263.215-.513.46-.663.724-.123.215-.137.404-.137.404.014.428.123.857.404 1.214.31.404.854.657 1.353.972.31.2.66.420.85.420.123 0 .31-.104.31-.104s-.214-.214-.321-.333c-.107-.12-.214-.214-.214-.214s-.214-.107-.214-.107c-.14-.104-.32-.214-.404-.333-.093-.12-.137-.24-.137-.333 0-.094.046-.187.137-.274.093-.087.214-.154.321-.214.404-.214.857-.3 1.214-.546.214-.154.404-.333.546-.546.137-.214.214-.46.214-.724 0-.264-.077-.546-.214-.724-.137-.174-.321-.274-.546-.333-.214-.054-.46-.067-.724-.067zm2.196 7.162c-.263 0-.513.046-.727.134-.214.087-.394.214-.527.387-.133.174-.214.38-.214.607 0 .227.081.433.214.607.133.174.313.3.527.387.214.087.464.134.727.134s.513-.047.727-.134c.214-.087.394-.214.527-.387.133-.174.214-.38.214-.607 0-.227-.081-.433-.214-.607-.133-.174-.313-.3-.527-.387-.214-.087-.464-.134-.727-.134z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">MySQL</span>
              </div>

              {/* Docker */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.72-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Docker</span>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">GitHub</span>
              </div>

              {/* Postman */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.427 6.573.843 12.585-3.8 13.428-10.373C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117l-.584-.584-.346.346a.708.708 0 0 1-.maiden 1.003l-.77.77-1.95-1.95.77-.77a.708.708 0 0 1 1.003 0l.347.347.584-.584a.124.124 0 0 1 .3.07l-.865.203a.228.228 0 0 0 .255.117.286.286 0 0 0 .068-.22l.553-2.194a.828.828 0 0 1 .43-.63l.952-.952.952.953-.953.952a.828.828 0 0 1-.63.429l-2.194.553a.286.286 0 0 0-.22.068zm1.847-8.58a.32.32 0 0 1-.311.082l-1.31-.27a.932.932 0 0 1-.785-.785l-.27-1.31a.32.32 0 0 1 .08-.312l.161-.161a.41.41 0 0 1 .581 0l2.016 2.016a.41.41 0 0 1 0 .581l-.162.159z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Postman</span>
              </div>

              {/* CSS */}
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                <svg className="h-12 w-12 mb-2 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* #### PROJECTS SECTION #### */}
        <section id="projects" className="bg-white dark:bg-black py-16">
          <div className="max-w-screen-xl px-4 mx-auto">
            <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Projects
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Here are some of the projects I have worked on
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* BookTheThing Project */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">BookTheThing</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive room booking system with features for user registration, login, room browsing, booking management, and administrative controls.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Java</span>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">REST API</span>
                </div>
                <div className="flex gap-4">
                  <a href="./projects/bookthething.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    View Project Details
                  </a>
                </div>
              </div>

              {/* TRaiFIC Project */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">TRaiFIC</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A real-time traffic monitoring and management system that analyzes traffic patterns and provides intelligent routing suggestions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Flask</span>
                  <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Laravel</span>
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">OpenCV</span>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Machine Learning</span>
                </div>
                <div className="flex gap-4">
                  <a href="./projects/traific.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 transition-all duration-300 hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    View Project Details
                  </a>
                </div>
              </div>

              {/* ElectroX Project */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 2c-1.82 0-3.53.5-5 1.35C2.99 1.73 1.46 0 0 0v2c.96 0 1.84.54 2.27 1.4C3.67 2.48 5.51 2 7.5 2s3.83.48 5.23 1.4C13.16 2.54 14.04 2 15 2V0c-1.46 0-2.99 1.73-4.5 3.35C9.03 2.5 7.32 2 5.5 2zm0 20c1.82 0 3.53-.5 5-1.35 1.51 1.62 3.04 3.35 4.5 3.35v-2c-.96 0-1.84-.54-2.27-1.4C15.33 21.52 13.49 22 11.5 22s-3.83-.48-5.23-1.4C5.84 21.46 4.96 22 4 22v2c1.46 0 2.99-1.73 4.5-3.35 1.47.85 3.18 1.35 5 1.35z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">ElectroX</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An e-commerce platform specializing in electronic products with features for product catalog, shopping cart, order management, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">PHP</span>
                  <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Laravel</span>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">MySQL</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Bootstrap</span>
                </div>
                <div className="flex gap-4">
                  <a href="./projects/electrox.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 transition-all duration-300 hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    View Project Details
                  </a>
                </div>
              </div>

              {/* Khaja Ghar Project */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l6.02 6.01zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Khaja Ghar</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A food delivery platform that connects customers with local restaurants, featuring menu browsing, order placement, real-time tracking, and delivery management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">PHP</span>
                  <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">HTML</span>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">CSS</span>
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">MySQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="./projects/khajaghar.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 transition-all duration-300 hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    View Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #### MORE PROJECTS ON GITHUB SECTION #### */}
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-screen-xl px-4 mx-auto text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Want to See More?
              </h3>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                These are just a few highlights! Check out my GitHub for more projects, open-source contributions, and code samples.
              </p>
              <a 
                href="https://github.com/rahul161616" /* PUT YOUR GITHUB PROFILE URL HERE */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Explore My GitHub
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white dark:bg-black">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
            {/* Contact Information Cards */}
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Phone */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-green-600 font-medium text-lg">
                  {/* PUT YOUR PHONE NUMBER HERE */}
                  9815158185
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Mon-Fri 9am-6pm</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-green-600 font-medium text-lg">
                  {/* PUT YOUR EMAIL ADDRESS HERE */}
                  rahulsewa1616@gmail.com
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">24/7 Response</p>
              </div>

              {/* Address */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-green-600 font-medium text-lg">
                  {/* PUT YOUR ADDRESS HERE */}
                  Pokhara, Nepal
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Remote Available</p>
              </div>
            </div>

            {/* How to Connect Section */}
            <div id="connect" className="max-w-screen-md mx-auto text-center mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Let's Connect!
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
                Ready to collaborate or discuss opportunities? I'd love to hear from you! Whether you have a project in mind, need technical expertise, or just want to connect professionally.
              </p>
              <p className="mb-8 font-light text-gray-500 text-lg dark:text-gray-400">
                Feel free to reach out through any of the channels below or send me a message using the contact form. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-screen-md mx-auto">
              <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800 transition-all duration-300 hover:scale-105"
              >
                Send message
              </button>
            </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
