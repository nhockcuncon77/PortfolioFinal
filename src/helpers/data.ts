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
                "GenAI RFP Intelligence Engine: Architected and deployed a GenAI-powered RFP intelligence engine leveraging RAG and AWS Bedrock to parse 1,500+ enterprise RFPs, achieving 92% accuracy in automated requirement extraction and reducing proposal preparation time by 50%.",
                "ML Win Probability Modeling: Developed an ML-based win probability scoring model using XGBoost and historical deal data, deployed via Amazon SageMaker to optimize bid prioritization and increase year-over-year win rates by 18%.",
                "AI Compliance Pipeline: Engineered an AI-driven compliance gap detection pipeline utilizing NLP classifiers and LLM verification to flag missing requirements with 95% recall, significantly minimizing disqualification risks for high-stakes bids.",
                "Scalable Serverless Infrastructure: Designed a high-concurrency serverless architecture using AWS Lambda and Step Functions capable of processing 300+ concurrent RFP submissions with automated audit logging and secure IAM policies for enterprise-grade data isolation.",
                "Executive Data Visualization: Built a real-time executive dashboard using React and AWS QuickSight to surface critical bid pipeline insights, compliance status, and AI confidence scores, enabling data-driven leadership decisions."
            ],
            vi: [
                "GenAI RFP Intelligence Engine: Thiết kế và triển khai engine RFP thông minh dựa trên GenAI (RAG, AWS Bedrock), xử lý 1.500+ RFP doanh nghiệp, đạt 92% độ chính xác trích xuất yêu cầu tự động và giảm 50% thời gian chuẩn bị proposal.",
                "ML Win Probability Modeling: Phát triển mô hình chấm điểm xác suất thắng thầu bằng XGBoost và dữ liệu deal lịch sử, triển khai qua Amazon SageMaker để tối ưu ưu tiên bid và tăng win rate YoY 18%.",
                "AI Compliance Pipeline: Xây dựng pipeline phát hiện lỗ hổng compliance bằng NLP classifiers và LLM verification, recall 95%, giảm rủi ro loại hồ sơ cho bid giá trị cao.",
                "Scalable Serverless Infrastructure: Thiết kế kiến trúc serverless high-concurrency (AWS Lambda, Step Functions) xử lý 300+ RFP đồng thời, audit logging tự động và IAM cho cách ly dữ liệu cấp doanh nghiệp.",
                "Executive Data Visualization: Xây dựng dashboard điều hành real-time (React, AWS QuickSight) hiển thị bid pipeline, trạng thái compliance và AI confidence scores phục vụ quyết định data-driven."
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