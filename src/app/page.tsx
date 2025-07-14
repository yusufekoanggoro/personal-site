'use client'; // tambahkan ini jika di Next.js App Router (app/ directory)

import { useEffect, useState } from 'react';
import Sidebar from "./components/Sidebar"
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Collapse, { Panel, CollapseProps } from 'rc-collapse';
import 'rc-collapse/assets/index.css'; // Wajib agar tampilannya berfungsi
import { useInView } from "react-intersection-observer";

// import CertificationSlider from './components/CertificationSlider';
import { Mail, Phone, Linkedin, MapPin, Pencil, Github } from 'lucide-react';
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';

export default function Home() {
    const contents = [
        <div>
            <h1 className='text-[60px] leading-[1.3] font-bold font-playfair'>Hi!<br />I'm Yusuf</h1>
            <h2 className='text-[18px] mb-[30px] leading-[1.5] font-light'>Built with Next.js & Tailwind CSS — by Yusuf</h2>
            <p className='text-[16px]'>
                <a 
                    href="/Yusuf Eko Anggoro - Resume - EN.pdf" 
                    target='_blank' download 
                    className='border border-black px-4 py-2 cursor-pointer uppercase text-[12px] font-normal tracking-[2px]'
//   className="border border-black px-4 py-2 cursor-pointer uppercase text-[12px] font-normal tracking-[2px]
//     transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md 
//     hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black 
//     active:scale-95 active:shadow-inner inline-block rounded-full"
                >Download Resume 📥</a>
            </p>
        </div>,
        <h1 className='text-[60px] leading-[1.3] font-bold font-playfair'>I am <br />a Backend Engineer</h1>
    ];

    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'August 2023',
            link: 'https://example.com/aws-certificate',
            imageUrl: '/Certificate-Yusuf-Eko-Anggoro.jpg',
        },
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'August 2023',
            link: 'https://example.com/aws-certificate',
            imageUrl: '/Certificate-Yusuf-Eko-Anggoro.jpg',
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true, // hanya sekali animasi saat pertama muncul
        threshold: 0.2,     // 20% bagian terlihat baru trigger
    });

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % contents .length);
        }, 5000); // Ganti setiap 5 detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, []);
    

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-[350px] overflow-hidden">
                <section className="relative h-screen bg-[url('/images/wallpaperflare.com_wallpaper.jpg')] bg-cover bg-center bg-no-repeat flex items-center p-[2.5em]">
                    <div className='flex flex-col'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={'home'}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.7 }}
                            >
                                {contents[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={500}
                    >
                        <button
                            className="text-black px-4 py-2 border border-black rounded-full cursor-pointer uppercase text-[12px] font-normal tracking-[2px]"
                            // className="text-black px-4 py-2 border border-black rounded-full cursor-pointer uppercase text-[12px] font-normal tracking-[2px]
                            //     transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md 
                            //     hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            ↓ Scroll Down
                        </button>
                    </Link>
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]' id="about-section">
                    <div ref={ref}>
                        {inView && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={'about'}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>About</span>
                                    <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>Get to know me better</h2>
                                    <p className='text-justify'>
                                        I'm <strong>Yusuf Eko Anggoro</strong>, a <strong>Backend Developer</strong> with over <strong>5 years of experience</strong> developing and optimizing <strong> microservices architecture</strong>. I specialize in <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Golang</strong> with a focus on <strong>performance</strong>, <strong>reliability</strong>, and <strong>maintainability</strong>. Passionate about <strong>problem-solving</strong> and continuously learning the latest technologies to drive impactful solutions.
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div>
                        <div ref={ref}>
                            {inView && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={'experience'}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Experience</span>
                                        <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>What I've done so far</h2>
                                        <VerticalTimeline lineColor="#f2f3f7">
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#f2f3f7'}}
                                                contentArrowStyle={{ borderRight: '7px solid  #f2f3f7' }}
                                                date="August 2019 - March 2025"
                                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                icon={<Pencil className="w-4 h-4 text-white" />}
                                            >
                                                <h3 className="vertical-timeline-element-title"><a className='text-[#000] text-[20px] font-medium'>Backend Developer at PT Telkom Indonesia Tbk</a></h3>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#f2f3f7'}}
                                                contentArrowStyle={{ borderRight: '7px solid  #f2f3f7' }}
                                                date="July 2019 - August 2019"
                                                iconStyle={{ background: '#ec5453', color: '#fff' }}
                                                icon={<Pencil className="w-4 h-4 text-white" />}
                                            >
                                                <h3 className="vertical-timeline-element-title"><a className='text-[#000] text-[20px] font-medium'>Full Stack Developer at Pijar Camp</a></h3>
                                            </VerticalTimelineElement>
                                        </VerticalTimeline>
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </div>

                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div ref={ref}>
                        {inView && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={'education'}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
        
                                    <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Education</span>
                                    <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>My academic background</h2>
                                
                                    <Collapse defaultActiveKey={0} accordion={true}>
                                        <Panel header="Indraprasta PGRI University (2020-2024)" headerClass="my-header-class">
                                            <p>Completed a final project research on the Decision Support System for Employee Recruitment at PT Telkom, implementing the AHP method to enhance objectivity and efficiency in the selection process, using Java (NetBeans) and MySQL as supporting technologies.</p>
                                            <p><strong>GPA: 3.5</strong></p>
                                        </Panel>
                                        <Panel header="Vocational High School 24 Jakarta (2016-2019)" headerClass="my-header-class">
                                            I studied and explored programming, software development, and database management. Proficient in algorithms, data structures, and developing web and desktop applications, with experience in software development projects both individually and in teams.
                                        </Panel>
                                    </Collapse>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div ref={ref}>
                        {inView && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={'certifications'}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Certifications</span>
                                        <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>Proof of my dedication</h2>
       
                                        {/* <CertificationSlider certifications={certifications} /> */}
                                    </motion.div>
                                </AnimatePresence>
                            )}
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div ref={ref}>
                        {inView && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={'skills'}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Skills</span>
                                        <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>What I bring to the table</h2>
                                        
                                        <Collapse accordion={true}>
                                            <Panel header="Backend Skills" headerClass="my-header-class">
                                                <div>
                                                    <ul className='list-inside list-disc'>
                                                        <li>
                                                            <strong>Programming Languages</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>JavaScript</li>
                                                            <li>Go</li>
                                                            <li>Java</li>
                                                            <li>TypeScript</li>
                                                            <li>PHP</li>
                                                            {/* <li>Python</li> */}
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>API Development</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>REST API</li>
                                                            <li>gRPC</li>
                                                            <li>GraphQL</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Databases</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>PostgreSQL</li>
                                                            <li>MongoDB</li>
                                                            <li>Oracle</li>
                                                            <li>MySQL</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Software Architecture</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Microservices</li>
                                                            <li>Event-Driven Architecture</li>
                                                            <li>Clean Architecture</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Monitoring and Logging</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Datadog</li>
                                                            <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                                                            <li>Prometheus + Grafana</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Frameworks</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Express.js</li>
                                                            <li>Gin</li>
                                                            <li>Echo</li>
                                                            <li>Fiber</li>
                                                            <li>Laravel</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>API Documentation</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Swagger</li>
                                                            <li>Postman</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Testing Frameworks</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Mocha</li>
                                                            <li>Chai (assertion)</li>
                                                            <li>Sinon (mock)</li>
                                                            <li>Jest</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Software Design</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>SOLID Principles</li>
                                                            <li>Design Patterns</li>
                                                            <li>Object-Oriented Programming (OOP)</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>DevOps and Tools</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Git</li>
                                                            <li>Docker</li>
                                                            <li>Kubernetes</li>
                                                            <li>Jenkins</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Messaging</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Kafka (Producer, Consumer)</li>
                                                            <li>Redis Pub/Sub</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Security</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Encryption</li>
                                                            <li>Rate Limiting</li>
                                                            <li>Input Validation</li>
                                                            <li>SQL Injection Prevention</li>
                                                            <li>CORS</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Authentication</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Basic Authentication</li>
                                                            <li>JWT Authentication</li>
                                                            <li>OAuth 2.0</li>
                                                            <li>Role-Based Access Control (RBAC)</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Cloud Services</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>AWS S3</li>
                                                            <li>AWS EC2</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Search and Indexing</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Elasticsearch (Full-Text Search, Search Engine)</li>
                                                            <li>Kibana (Data Visualization)</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Caching Systems</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Redis</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Push Notification</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>Firebase Cloud Messaging (FCM)</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Task Queues and Scheduling</strong>
                                                            <ul className='list-[circle] pl-10'>
                                                            <li>BullMQ</li>
                                                            <li>Node Cron</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Panel>
                                            <Panel header="Frontend Skills" headerClass="my-header-class"></Panel>
                                            <Panel header="Soft Skills" headerClass="my-header-class">
                                                <ul className='list-inside list-disc'>
                                                    <li>Problem Solving</li>
                                                    <li>Critical Thinking</li>
                                                    <li>Agile and Scrum Methodology</li>
                                                    <li>Communication and Collaboration</li>
                                                    <li>Adaptability</li>
                                                    <li>Time Management</li>
                                                    <li>Attention to Detail</li>
                                                    <li>Decision Making</li>
                                                    <li>Self-Learning and Continuous Improvement</li>
                                                    <li>Resilience and Patience</li>
                                                    <li>Security Awareness</li>
                                                    <li>Leadership</li>
                                                </ul>
                                            </Panel>
                                        </Collapse>
                                    </motion.div>
                                </AnimatePresence>
                            )}
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div ref={ref}>
                        {inView && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={'portfolio'}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Portfolio</span>
                                    <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>See my work in action</h2>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </section>

                <section className='relative flex flex-col p-[2.5em]'>
                    <div ref={ref}>
                        {inView && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={'contact'}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <span className='text-[10px] font-medium uppercase tracking-[5px] mb-[15px]'>Contact</span>
                                    <h2 className='font-playfair text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8]'>Get in Touch</h2>
                                

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            {
                                                icon: <Mail className="text-blue-600" />,
                                                title: "Email",
                                                value: "anggoroekoyusuf@gmail.com",
                                                href: "mailto:anggoroekoyusuf@gmail.com",
                                            },
                                            {
                                                icon: <Phone className="text-green-600" />,
                                                title: "Phone",
                                                value: "+62 859-3453-1182",
                                                href: "tel:+628594531182",
                                            },
                                            {
                                                icon: <Linkedin className="text-blue-800" />,
                                                title: "LinkedIn",
                                                value: "linkedin.com/in/yousufe24",
                                                href: "https://linkedin.com/in/yousufe24",
                                            },
                                            {
                                                icon: <Github className="text-black" />,
                                                title: "GitHub",
                                                value: "https://github.com/yusufekoanggoro",
                                                href: "https://github.com/yusufekoanggoro",
                                            },
                                            {
                                                icon: <MapPin className="text-red-500" />,
                                                title: "Location",
                                                value: "Jakarta, Indonesia",
                                                href: undefined,
                                            },
                                        ].map(({ icon, title, value, href }, index) => {
                                            const isExternal = href?.startsWith("http");
                                            const Wrapper = href ? "a" : "div";

                                            return (
                                            <Wrapper
                                                key={index}
                                                href={href}
                                                target={isExternal ? "_blank" : undefined}
                                                rel={isExternal ? "noopener noreferrer" : undefined}
                                                className="flex items-start gap-4 p-4 border border-gray-200 rounded bg-[#F2F3F7] text-[#333333]"
                                            >
                                                <div className="mt-1">{icon}</div>
                                                <div>
                                                <p>{title}</p>
                                                <p>{value}</p>
                                                </div>
                                            </Wrapper>
                                            );
                                        })}
                                        </div>


                                </motion.div>
                            </AnimatePresence>
                        )}                        
                    </div>
                </section>
            </main>
        </div>
    );
}
