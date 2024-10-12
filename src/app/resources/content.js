import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mahmoud',
    lastName:  'Sayed',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Telecommunication and Electronics Engineer',
    avatar:    '/images/mahmoudsayed.jpeg',
    location:  'Asia/Dubai',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Arabic']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about broadcast solutions and updates.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/msayed20',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/mahmoud-sayed82/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/mrabea20',
    },
    {
        name: 'Sky News Arabia',
        icon: 'email',
        link: 'https://www.skynewsarabia.com',
    },
    {
        name: 'CV',
        icon: '\uF3A7',
        link: '/images/projects/project-01/MahmoudResume.pdf',
    }

]

const home = {
    label: 'Home',
    title: `Mahmoud Sayed's Portfolio`,
    description: `Portfolio website showcasing my work as Head of Master Control Room at Sky News Arabia`,
    headline: <> Experienced Broadcast Engineer with over 18 years in Satellite News Gathering (SNG) and Master Control Room (MCR) Operations.</>,
    subline: <>  I excel in delivering high-quality live broadcasts and managing complex technical operations. When I’m not working, I enjoy <InlineCode>fishing</InlineCode> and traveling to new places.</>
}


const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Mahmoud Sayed is a broadcast engineering expert based in Abu Dhabi, specializing in delivering seamless live transmissions and managing complex broadcast operations. With over 18 years of experience in Satellite News Gathering (SNG) and Master Control Room (MCR) operations, Mahmoud excels in transforming technical challenges into smooth, high-quality broadcasts. His work spans live event coordination, signal management, and the intersection of broadcast technology and engineering innovation.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sky News Arabia',
                timeframe: '2012 - Present',
                role: 'Technical Operation Manager',
                achievements: [
                    <>Led Successful Global Event Coverage: Spearheaded the technical coordination and broadcast operations for major global events, ensuring seamless live transmission across multiple platforms, including satellite, TV, and online streaming.</>,
                    <>Optimized Master Control Room (MCR) Efficiency: Implemented workflow improvements in the MCR, enhancing signal monitoring, reducing downtime, and streamlining communication between departments, resulting in a 20% increase in operational efficiency.</>,
                    <>Upgraded Satellite News Gathering (SNG) Systems: Introduced cutting-edge satellite technology and enhanced transmission capabilities, enabling faster deployment and improved broadcast quality for remote news coverage.</>,
                    <>Crisis Management During Live Broadcasts: Demonstrated exceptional problem-solving skills by managing live technical issues in high-pressure environments, ensuring uninterrupted coverage during breaking news and unforeseen challenges.</>,
                    <>Team Leadership and Development: Trained and mentored a team of engineers and technicians, fostering a culture of continuous improvement and technical excellence, leading to a highly capable and responsive operations team.</>,
                    <>Innovation in Broadcast Technology: Pioneered the integration of new broadcast technologies, including RF signal enhancements and advanced encoders/decoders, elevating the technical quality of live broadcasts for Sky News Arabia.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/msstudio.jpeg',
                        alt: 'x',
                        width: 16,
                        height: 9
                    },
            
                    {
                        src: '/images/projects/project-01/cover-01.jpeg',
                        alt: 'x',
                        width: 16,
                        height: 9
                    },

                   
                ]
            },
            {
                company: 'AbuDhabi TV',
                timeframe: '2008 - 2012',
                role: 'MCR Engineer',
                achievements: [
                    <>At Abu Dhabi TV, I managed the broadcast of major local Emirate events, sports, and news from the Master Control Room (MCR). My role included ensuring seamless live transmission and addressing technical challenges during high-profile broadcasts. I worked closely with teams to maintain broadcast quality and optimize the coverage of key regional events.</>,
                    //<>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/admedia.png',
                        alt: 'x',
                        width: 32,
                        height: 18
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Cairo University',
                description: [<>Studied communication and electronics engineering. Electronics, Communications, Electronics and Communications of Computer Systems, Electromagnetics and Waves, and Control.</>],
                images: [ 
                    {
                        src: '/images/projects/project-01/CairoU.jpg',
                        alt: 'x',
                        width: 32,
                        height: 18
                    }
                ],
            },
            
            {
                name: '42 AbuDhabi',
                description: <>At 42 Abu Dhabi, I am immersed in an innovative, project-based learning environment where I develop practical programming skills through real-world challenges. The peer-to-peer, self-guided curriculum has strengthened my problem-solving abilities and teamwork, helping me grow both technically and personally. I have gained extensive experience in languages such as C, C++, and Python, while also working on complex projects like building an IRC server and developing a Pong game as part of the ft_transcendence project. This unique approach to learning has honed my adaptability, critical thinking, and collaboration skills, preparing me for dynamic roles in the tech industry.</>,
                images: [ 
                    {
                        src: '/images/projects/project-01/42.jpg',
                        alt: 'x',
                        width: 32,
                        height: 18
                    },
                ],
            },
            
            
        ],
        
    },
    
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'TV MCR & studio',
                description: <>I am responsible for monitoring and managing the transmission of broadcast signals, ensuring seamless video and audio delivery. I oversee signal quality, troubleshoot technical issues, and coordinate live broadcasts to ensure smooth, uninterrupted operations.</>,
                images: [
                    {
                        src: '/images/projects/project-01/NOC.jpeg',
                        alt: 'Project image',
                        width: 32,
                        height: 18
                    },
                    {
                        src: '/images/projects/project-01/MCR2.jpeg',
                        alt: 'Project image',
                        width: 32,
                        height: 18
                    },
                ]
            },
            {
                title: 'Satellite News Gathering',
                description: <>handling the setup and operation of mobile satellite transmission systems to broadcast live news from remote locations. They ensure the reliable transmission of video and audio signals back to the studio, often working under time-sensitive and challenging conditions.</>,
                images: [
                    {
                        src: '/images/projects/project-01/SNG3.jpeg',
                        alt: 'Project image',
                        width: 18,
                        height: 32
                    },
                    {
                        src: '/images/projects/project-01/SNG2.jpeg',
                        alt: 'Project image',
                        width: 18,
                        height: 32
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about my broadcaast experince...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'TV Channel operation area',
    description: ` ${person.name} operation area`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };