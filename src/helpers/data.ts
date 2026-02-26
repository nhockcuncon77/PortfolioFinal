import nextjsImg from '../assets/project/nextjs.jpeg';
import reactNativeImg from '../assets/project/react-native.png';
import reactUltimateImg from '../assets/project/react-ultimate.png';
import springRestImg from '../assets/project/spring-rest.png';
import nestImg from '../assets/project/nestjs.png';
import springMvcImg from '../assets/project/spring-mvc.png';

export const APP_DATA = {
    GMAIL_URL: "mailto:viethuynh1420@gmail.com",
    LINKEDIN_URL: "https://www.linkedin.com/in/viet-huynh-minh/",
    MEDIUM_URL: "https://medium.com/@viethuynh1420",
    GITHUB_URL: "https://github.com/nhockcuncon77",
    LEETCODE_URL: "https://leetcode.com/u/minhhuynh"
}

export const EXPERIENCES = [
    {
        id: 1,
        title: { vi: "Kỹ sư phần mềm AI", en: "AI Software Engineer" },
        company: { vi: "Reach Brands | Lehi, UT", en: "Reach Brands | Lehi, UT" },
        duration: { vi: "Tháng 4/2025 – Tháng 1/2026", en: "Apr 2025 – Jan 2026" },
        highlights: {
            en: [
                "Built and owned a multi-tenant SaaS platform using React (TypeScript) and Django REST (Python), supporting complex financial analysis and operational workflows for Amazon sellers.",
                "Architected cloud-native microservices on AWS, utilizing containerization to ensure consistent deployment and horizontal scalability.",
                "Developed RESTful APIs with a focus on high availability, implementing JWT/Clerk for secure authentication and tenant-level data isolation.",
                "Led end-to-end feature development—from product design and API contracts to CI/CD deployment—in a fast-paced Agile environment."
            ],
            vi: [
                "Xây dựng và sở hữu nền tảng SaaS đa tenant với React (TypeScript) và Django REST (Python), hỗ trợ phân tích tài chính và quy trình vận hành cho seller Amazon.",
                "Thiết kế microservices cloud-native trên AWS, sử dụng containerization để triển khai nhất quán và mở rộng quy mô ngang.",
                "Phát triển RESTful APIs tập trung vào tính sẵn sàng cao, JWT/Clerk xác thực bảo mật và cách ly dữ liệu theo tenant.",
                "Dẫn dắt phát triển tính năng end-to-end—từ thiết kế sản phẩm, API contracts đến triển khai CI/CD—trong môi trường Agile."
            ]
        }
    },
    {
        id: 2,
        title: { vi: "Nghiên cứu sinh đại học", en: "Undergraduate Research Assistant" },
        company: { vi: "School of Technology & Computing | Seattle, WA", en: "School of Technology & Computing | Seattle, WA" },
        duration: { vi: "Tháng 10/2024 – Tháng 4/2025", en: "Oct 2024 – Apr 2025" },
        highlights: {
            en: [
                "Developed an AI-powered analysis system leveraging LSTMs and time-series analysis to predict quality and generate personalized recommendations.",
                "Engineered data pipelines to unify multimodal behavioral signals from wearables and sensors into high-dimensional feature representations.",
                "Modeled longitudinal data to identify emerging patterns, showcasing expertise in predictive logic and user-centric system design."
            ],
            vi: [
                "Phát triển hệ thống phân tích AI dùng LSTMs và time-series để dự đoán chất lượng và đưa ra gợi ý cá nhân hóa.",
                "Xây dựng data pipelines tổng hợp tín hiệu hành vi đa kênh từ wearables và sensors thành biểu diễn đặc trưng chiều cao.",
                "Mô hình hóa dữ liệu dọc để nhận diện pattern mới nổi, thể hiện chuyên môn về logic dự đoán và thiết kế lấy người dùng làm trung tâm."
            ]
        }
    },
    {
        id: 3,
        title: { vi: "Kỹ sư phần mềm", en: "Software Engineer" },
        company: { vi: "Intrastack Solutions | Remote", en: "Intrastack Solutions | Remote" },
        duration: { vi: "Tháng 1/2022 – Tháng 3/2025", en: "Jan 2022 – Mar 2025" },
        highlights: {
            en: [
                "Designed and implemented an AI-driven resume parsing engine using NLP (NER, skill extraction) and embeddings-based similarity scoring for candidate-job matching, improving match precision by 30%.",
                "Built a bias-reduction preprocessing pipeline and an explainable ranking algorithm that transparently weighted skill relevance and experience alignment.",
                "Automated full hiring workflow (candidate pipeline management, interview scheduling, and AI-generated screening questions) cutting resume screening time by 75%.",
                "Developed RESTful microservices and analytic dashboards to surface hiring KPIs, enabling recruiters to monitor funnel health and optimize decision-making.",
                "Delivered cloud-native deployment on AWS (ECS, Lambda, RDS) with secure role-based access control (RBAC) for recruiters, managers, and admins."
            ],
            vi: [
                "Thiết kế và triển khai engine phân tích resume AI dùng NLP (NER, trích xuất kỹ năng) và embeddings similarity scoring cho ghép ứng viên–công việc, cải thiện độ chính xác match 30%.",
                "Xây dựng pipeline tiền xử lý giảm bias và thuật toán xếp hạng có thể giải thích, trọng số minh bạch theo relevance kỹ năng và kinh nghiệm.",
                "Tự động hóa quy trình tuyển dụng (quản lý pipeline ứng viên, lịch phỏng vấn, câu hỏi sàng lọc AI), giảm 75% thời gian sàng lọc resume.",
                "Phát triển microservices RESTful và dashboard phân tích để hiển thị hiring KPIs, giúp recruiter theo dõi funnel và tối ưu quyết định.",
                "Triển khai cloud-native trên AWS (ECS, Lambda, RDS) với RBAC cho recruiter, manager và admin."
            ]
        }
    },
    {
        id: 4,
        title: { vi: "Thực tập sinh Kỹ sư phần mềm", en: "Software Engineer Intern" },
        company: { vi: "Underdog Devs | Remote", en: "Underdog Devs | Remote" },
        duration: { vi: "Tháng 11/2021 – Tháng 5/2022", en: "Nov 2021 – May 2022" },
        highlights: {
            en: [
                "Optimized Node.js backend microservices, improving system scalability and processing efficiency by 40%.",
                "Implemented advanced NLP and PCA techniques to increase data prediction accuracy within the platform."
            ],
            vi: [
                "Tối ưu microservices backend Node.js, cải thiện khả năng mở rộng và hiệu quả xử lý hệ thống lên 40%.",
                "Triển khai kỹ thuật NLP và PCA nâng cao để tăng độ chính xác dự đoán dữ liệu trên nền tảng."
            ]
        }
    }
]

export const PROJECTS = [
    {
        id: 1,
        imgPath: nextjsImg,
        title: "Multi-tenant Amazon Seller SaaS",
        description: "Multi-tenant SaaS platform built with React (TypeScript) and Django REST (Python), supporting complex financial analysis and operational workflows for Amazon sellers. Cloud-native on AWS with JWT/Clerk auth and tenant-level data isolation.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://portfolio-minh-viet-huynh.vercel.app"
    },
    {
        id: 2,
        imgPath: reactUltimateImg,
        title: "AI-powered Sleep Analysis System",
        description: "AI-powered analysis system leveraging LSTMs and time-series analysis to predict quality and generate personalized recommendations. Data pipelines unify multimodal behavioral signals from wearables and sensors into high-dimensional feature representations.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://github.com/nhockcuncon77"
    },
    {
        id: 3,
        imgPath: nestImg,
        title: "RAG Data Assistant",
        description: "RAG-based data assistant using LLM systems (GPT, LangChain) for intelligent data querying and recommendations. Demonstrates expertise in retrieval-augmented generation and API-first design.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://github.com/nhockcuncon77"
    },
    {
        id: 4,
        imgPath: springRestImg,
        title: "Node.js Backend Microservices",
        description: "Optimized Node.js backend microservices with advanced NLP and PCA techniques, improving system scalability and processing efficiency. Built in an Agile environment with focus on clean, maintainable code.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://github.com/nhockcuncon77"
    },
    {
        id: 5,
        imgPath: reactNativeImg,
        title: "Full-Stack Web Applications",
        description: "Full-stack applications using React, TypeScript, Django, and PostgreSQL. API-first design with Docker, AWS (ECS, Lambda, RDS), and CI/CD deployment.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://github.com/nhockcuncon77"
    },
    {
        id: 6,
        imgPath: springMvcImg,
        title: "Distributed Data Systems",
        description: "Projects involving distributed data systems, time-series analysis, and personalization. Built with Python, TensorFlow, PyTorch, and cloud infrastructure.",
        githubLink: "https://github.com/nhockcuncon77",
        demoLink: "https://github.com/nhockcuncon77"
    }
]

// Resume: Skills + Toolkit (icons available in skill.image.ts)
export const SKILLS_DATA = [
    'React',
    'Typescript',
    'Django',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'Tensorflow',
    'Pytorch',
    'Next JS',
    'Tailwind',
    'Git',
    'Go',
    'Java',
    'C++',
    'Graphql',
    'Nginx',
    'Firebase',
    'MaterialUI',
    'Figma',
    'Numpy',
    'Opencv',
    'Javascript',
    'Bootstrap',
    'HTML',
    'CSS'
  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */