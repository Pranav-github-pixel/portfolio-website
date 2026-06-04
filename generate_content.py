import os

base_dir = r"c:\projects\personal_website\content"

dirs = ["experience", "projects", "achievements", "blog"]
for d in dirs:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

# Experiences
exps = [
    {
        "title": "Embedded Programming Lead",
        "company": "Namo Nirvana - Robotics Team",
        "date": "Mar 2024 - Mar 2026",
        "content": "- Worked on embedded systems and firmware development for ESP32, STM32, Raspberry Pi Pico, using Embedded C, C++ and exposure to MicroPython.\n- Designed and validated PCBs using EasyEDA, including MCU programming, debugging, and testing."
    },
    {
        "title": "Designing Lead",
        "company": "Game Development Club, VIT Chennai",
        "date": "2024 - Present",
        "content": "- Organized hackathons/workshops and designed posters, banners, and technical events."
    },
    {
        "title": "Software Engineering Intern (Placeholder)",
        "company": "Tech Corp",
        "date": "Jun 2023 - Aug 2023",
        "content": "- Developed full-stack web applications using React and Node.js.\n- Improved API response times by 20% through database optimization."
    },
    {
        "title": "Embedded Systems Intern (Placeholder)",
        "company": "IoT Solutions Inc.",
        "date": "Jan 2023 - May 2023",
        "content": "- Assisted in the development of firmware for smart home devices.\n- Conducted hardware testing and troubleshooting."
    },
    {
        "title": "Freelance Developer (Placeholder)",
        "company": "Self-Employed",
        "date": "2022 - 2023",
        "content": "- Built custom websites and applications for local businesses.\n- Managed client relationships and project timelines."
    }
]

for i, exp in enumerate(exps, 1):
    with open(os.path.join(base_dir, "experience", f"exp-{i}.mdx"), "w", encoding="utf-8") as f:
        f.write(f"---\ntitle: \"{exp['title']}\"\ncompany: \"{exp['company']}\"\ndate: \"{exp['date']}\"\n---\n\n{exp['content']}\n")

# Projects
projects = [
    {
        "title": "Secure BLE Communication System",
        "summary": "Built a secure BLE communication system on dual ESP32-C3 devices with application-layer AES-128 encryption.",
        "date": "May 2026",
        "tags": "['ESP32-C3', 'BLE', 'AES-128']",
        "content": "- Built a secure BLE communication system on dual ESP32-C3 devices with application-layer AES-128 encryption.\n- Implemented dynamic key synchronization, packet fragmentation/reassembly, and secure message transmission.\n- Designed a menu-driven OLED + keypad interface supporting PIN/key updates, receiver monitoring, and retransmission."
    },
    {
        "title": "AWS-Based IoT Patient Monitoring System",
        "summary": "Serverless patient monitoring system using ESP32 and biomedical sensors streaming vitals to AWS IoT Core.",
        "date": "Jan 2026",
        "tags": "['AWS', 'ESP32', 'IoT']",
        "content": "- Built a serverless patient monitoring system using ESP32 and biomedical sensors streaming vitals to AWS IoT Core.\n- Processed data via AWS Lambda, stored in DynamoDB, triggered SNS alerts, and visualized metrics via a static S3 dashboard."
    },
    {
        "title": "DevOps(CI/CD) Integrated Sensor Data Analyzer",
        "summary": "DevOps-integrated sensor analyzer using ESP32 & LoRa with CI/CD pipelines.",
        "date": "Jun 2025",
        "tags": "['ESP32', 'Docker', 'Jenkins', 'LoRa']",
        "content": "- Built a DevOps-integrated sensor analyzer using ESP32 & LoRa with CI/CD pipelines (Git, Jenkins, Maven).\n- Implemented Docker containerization, Puppet configuration management, and real-time monitoring using Graphite & Grafana."
    },
    {
        "title": "AURA - Aquatic Unmanned Research Assistant (ROV)",
        "summary": "Modular underwater ROV integrating motor control, environmental sensing, and real-time telemetry.",
        "date": "Jan 2025",
        "tags": "['Python', 'React', 'Robotics']",
        "content": "- Designed a modular underwater ROV integrating motor control, environmental sensing, and real-time telemetry.\n- Developed a Flask backend with WebSocket streaming and a React-based control UI for low-latency navigation."
    },
    {
        "title": "Portfolio Website (Placeholder)",
        "summary": "Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
        "date": "Jun 2026",
        "tags": "['Next.js', 'Tailwind', 'Framer Motion']",
        "content": "- Designed and developed a personal portfolio website to showcase projects and experience.\n- Implemented MDX for content management and Framer Motion for smooth animations."
    }
]

for i, proj in enumerate(projects, 1):
    with open(os.path.join(base_dir, "projects", f"project-{i}.mdx"), "w", encoding="utf-8") as f:
        f.write(f"---\ntitle: \"{proj['title']}\"\nsummary: \"{proj['summary']}\"\ndate: \"{proj['date']}\"\ntags: {proj['tags']}\ngithub: \"\"\nlive: \"\"\n---\n\n{proj['content']}\n")

# Achievements
achievements = [
    {
        "title": "3rd Prize - Gujarat Robofest 4.0",
        "description": "Underwater Robot & Submarine category among 1,284 teams nationwide.",
        "date": "2024"
    },
    {
        "title": "1st Prize - BIS Project Showdown",
        "description": "Awarded 1st prize at VIT Chennai for outstanding project demonstration.",
        "date": "2024"
    },
    {
        "title": "Published Patent Application",
        "description": "Modular Control Board with Dual-MCU Architecture for ROV Navigation and Data Processing (IN202541039559 A1).",
        "date": "2025"
    },
    {
        "title": "IBM DevOps Certification",
        "description": "IBM Career Education Program (IBMCE) covering Agile, CI/CD, and collaboration workflows.",
        "date": "Jun 2025"
    },
    {
        "title": "Hackathon Finalist (Placeholder)",
        "description": "Reached the finals of a national level hackathon, building an IoT solution in 24 hours.",
        "date": "2023"
    }
]

for i, ach in enumerate(achievements, 1):
    with open(os.path.join(base_dir, "achievements", f"achievement-{i}.mdx"), "w", encoding="utf-8") as f:
        f.write(f"---\ntitle: \"{ach['title']}\"\ndate: \"{ach['date']}\"\n---\n\n{ach['description']}\n")

# Blog Posts
blogs = [
    {
        "title": "Securing IoT Devices: A Guide to Application-Layer Encryption",
        "date": "2026-05-15",
        "tags": "['IoT', 'Security', 'ESP32']",
        "readingTime": "5 min",
        "content": "IoT devices are notoriously vulnerable. In this post, I discuss how to implement application-layer encryption (AES-128) on ESP32 devices to secure BLE communications, based on my recent project.\n\n### Why Application-Layer?\nTransport layer security is often not enough for edge devices. Application-layer encryption guarantees end-to-end security, even if the intermediate nodes are compromised..."
    },
    {
        "title": "Building AURA: The Aquatic Unmanned Research Assistant",
        "date": "2025-02-10",
        "tags": "['Robotics', 'ROV', 'Python']",
        "readingTime": "8 min",
        "content": "Designing an underwater ROV presents unique challenges, from waterproofing to low-latency telemetry. Here is a deep dive into the dual-MCU architecture and React/Flask stack that powered AURA.\n\n### The Architecture\nWe used a modular control board with dual-MCU architecture to handle both the real-time motor control and the heavy data processing..."
    }
]

for i, blog in enumerate(blogs, 1):
    with open(os.path.join(base_dir, "blog", f"post-{i}.mdx"), "w", encoding="utf-8") as f:
        f.write(f"---\ntitle: \"{blog['title']}\"\ndate: \"{blog['date']}\"\ntags: {blog['tags']}\nreadingTime: \"{blog['readingTime']}\"\n---\n\n{blog['content']}\n")

print("Generated MDX content.")
