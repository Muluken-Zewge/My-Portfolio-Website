import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectImages } from "./projectImages"; 

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.collabHub[5]}
              title="CollabHub"
              description="A mobile application built using Flutter that combines task management with real-time chat features. Users can manage tasks, collaborate on todos, and communicate through private and group chats with support for multimedia sharing."
              ghLink="https://github.com/Muluken-Zewge/Collaborative-Todo-App-with-Chat-Functionality"
              details={{
                overview: "A mobile application built using Flutter that combines task management with a real-time chat feature. Users can manage tasks, collaborate on todos, and communicate through private and group chats seamlessly.",
                keyFeatures: [
                  {
                    category: "Todo Features",
                    features: [
                      "Create, Update, and Delete Todos: Manage tasks with descriptions, due dates, reminders, and color codes.",
                      "Collaborate on Todos: Invite collaborators via email to edit tasks collaboratively.",
                      "Pin Todos: Highlight important tasks by pinning them to the top.",
                      "Task Notifications: Receive timely notifications and reminders."
                    ],
                  },
                  {
                    category: "Chat Features",
                    features: [
                      "Real-time Messaging: Communicate instantly with other users using Firebase.",
                      "Private and Group Chats: Engage in one-on-one or group conversations.",
                      "User Presence: View online status indicators for active users in chats.",
                      "Media Sharing: Share images, text, and audio messages in chats.",
                      "Message Search: Quickly locate specific messages in both private and group chats."
                    ],
                  }
                ],
                techStack: [
                  "Flutter: Cross-platform framework for building the mobile application.",
                  "Firebase: Real-time database, Firestore for data storage, Firebase Auth for authentication, and Firebase Cloud Messaging for notifications.",
                  "Dartz Package: Utilized for functional programming and error handling.",
                  "BLoC State Management: Structured the app's state management with clean architecture principles."
                ],
                projectType: "Personal Project",
                role: "Developed the project independently, handling both the frontend and backend.",
                skillsDeveloped: [
                  "Deepened knowledge of Flutter and Firebase integration.",
                  "Gained expertise in BLoC state management and clean architecture." ,
                  "Improved UI/UX design skills for interactive and collaborative apps."
                ],
                challenges: [
                  "Implementing real-time collaboration for todos: Drew inspiration from Google Keep to design seamless task sharing and editing.",
                  "Developing an intuitive chat interface: Modeled after Telegram, ensuring smooth messaging, media sharing, and presence indicators."
                ],
                screenshots: projectImages.collabHub,
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.EMMS[6]}
              title="EMMS"
              description="EMMS (Electronics Maintenence Management Syatem) is a Flutter application designed to digitalize the maintenance system at Hawassa University ICT Center. The app features Firebase integration for authentication and data storage, along with real-time chat for seamless communication."
              ghLink="https://github.com/Muluken-Zewge/Maintenance-Management-App"
              details={{
                overview: "A Flutter-based mobile application developed to digitalize the maintenance system at Hawassa University's ICT center. The app facilitates streamlined maintenance requests, approvals, task assignments, and real-time communication, enhancing efficiency and collaboration.",
                keyFeatures: [
                  {
                  category: "Admin Features",
                  features:[
                    "Add and delete user accounts",
                    "Approve maintenance requests",
                    "Assign Technicians to maintenance tasks",
                    "Monitor the status of all tasks (Requested, Assigned, Completed)"
                  ]
                  },
                  {
                  category: "Client Features",
                  features:[
                    "Submit maintenance requests",
                    "Track request statuses (Requested, Pending, Completed)",
                    "Communicate with assigned Technicians in real-time",
                    "Approve task completion after maintenance is performed"
                  ]
                  },
                  {
                  category: "Technician Features",
                  features:[
                    "View assigned tasks",
                    "Collaborate with Clients via real-time chat",
                    "Handle tasks one at a time to ensure focus and quality"
                  ]
                  },
                ],
                techStack: [
                  "Frontend: Flutter (Dart)",
                  "Backend: Firebase Firestore for data storage",
                  "Authentication: Firebase Authentication for secure user login",
                  "Real-Time Communication: Firebase Firestore for chat functionality"
                ],
                projectType: "Internship Project",
                role: "Collaborated with one team member and contributed to both frontend and backend development",
                skillsDeveloped: [
                  "Strengthened expertise in Flutter and Firebase integration",
                  "Gained hands-on experience in role-based system design and implementation",
                  "Developed skills in real-time communication and scalable task management solutions"
                ]
               ,
                challenges: [
                  "Designing role-based functionality: Ensured smooth workflows and permission management for Admins, Clients, and Technicians",
                  "Managing task assignment logic: Enforced a mechanism to allow Technicians to work on only one task at a time, improving workflow management"
                ],
                screenshots: projectImages.EMMS,
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.busTrackingApp[1]}
              title="Bus Tracking App"
              description="A mobile application for public transportation that tracks the nearest bus, showing its distance and estimated arrival time. The app is integrated with Google Maps API and is complemented by a website for real-time tracking and over-speed recording."
              ghLink="https://github.com/Muluken-Zewge/Bus-Tracking-App"
              details={{
                overview: "A Flutter-based mobile application that tracks public buses, displaying the nearest bus's distance and estimated arrival time. Integrated with Google Maps and real-time data from hardware installed on buses, the app assists users in planning their journeys more efficiently.",
                keyFeatures: [
                  "Bus Tracking: Displays the nearest bus’s distance and estimated time of arrival.",
                  "Route Planning: Allows users to input their start and destination points using an auto-complete feature.",
                  "Recommendations: Suggests the closest bus for the selected route if available.",
                  "Google Maps Integration: Visualizes bus locations and routes in real time.",
                  "Real-Time Communication: Communicates with hardware installed on buses to fetch live data."
                ],
                techStack: [
                  "Frontend: Flutter (Dart)",
                  "API Integration: Google Maps API for real-time map visualization and route guidance",
                  "Hardware Communication: Interfaces with hardware installed on buses for tracking data"
                ],
                projectType: "Final-year project for completing BSc in Computer Engineering",
                role: "Focused on developing the mobile app while teammates worked on the website and hardware integration",
                skillsDeveloped: [
                  "Advanced skills in Flutter development",
                  "Experience with Google Maps API integration for live tracking",
                  "Team collaboration and interfacing mobile applications with hardware systems"
                ]
               ,
                challenges: [
                  "Hardware Communication: Ensured seamless communication between the app and hardware for accurate tracking data",
                ],
                screenshots: projectImages.busTrackingApp,
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.quizApp[5]}
              title="Quiz App"
              description="A quiz application built using Flutter that fetches multiple-choice questions from The Trivia API. Users can test their knowledge on various topics with an engaging interface that provides instant feedback and a detailed results summary."
              ghLink="https://github.com/Muluken-Zewge/Quiz-APP-with-Cubit"
              details={{
                overview: "A Flutter-based quiz application that fetches multiple-choice questions from The Trivia API, offering users an engaging platform to test their knowledge on various topics. The app delivers an interactive and intuitive user experience with instant feedback and visually appealing design elements.",
                keyFeatures: [
                  {
                    category: "Interactive Quiz Interface",
                    features: [
                      "Users can answer multiple-choice questions with real-time feedback"
                    ]
                  },
                {
                  category: "Visual Feedback",
                  features: [
                    "Correct answers are marked with a green checkmark (✔️).",
                    "Incorrect answers are marked with a red cross (❌), and the correct answer is highlighted."
                  ]
                },
                {
                  category: "Results Summary",
                  features: [
                    "Displays the number of correct answers.",
                    "Provides detailed feedback for each question, highlighting correct and user-selected answers."
                  ]
                },
                {
                  category: "Elegant UI",
                  features: [
                    "Incorporates gradients, animations, and user-friendly layouts for a seamless experience."
                  ]
                },
                ],
                techStack: [
                  "Frontend: Flutter (Dart)",
                  "API Integration: The Trivia API for fetching quiz questions",
                  "State Management: Cubit/Bloc for managing app state",
                  "Architecture: Clean architecture with Data Layer to Handles API calls and repositories, Domain Layer that Contains core business logic and use cases and Presentation Layer to Manages UI components with Cubit for state management."
                  
                ],
                projectType: "Personal Project",
                role: "Sole developer responsible for designing, developing, and implementing the app's logic.",
                skillsDeveloped: [
                  "Advanced Flutter and Dart programming.",
                  "Implementation of Cubit for efficient state management.",
                  "Applying clean architecture principles to organize and structure code.",
                  "API integration and data handling for dynamic quiz content."
                ]
               ,
                challenges: [
                  "State Management: Ensured smooth transitions and accurate feedback using Cubit."
                ],
                screenshots: projectImages.quizApp,
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.blogApp[0]}
              title="WordPress Blog App"
              description="A Flutter app that fetches posts from a WordPress API and integrates ads for monetization. The app displays a test ad banner after every five posts and shows an interstitial ad when navigating from the homepage to the detail page."
              ghLink="https://github.com/Muluken-Zewge/WordPress-blog-App"
              details={{
                overview: "A mobile application built using Flutter that fetches and displays blog posts from a WordPress API. The app presents blogs in a user-friendly interface while integrating Google Ads for monetization. It enhances the reading experience with seamless navigation and visually appealing layouts.",
                keyFeatures: [
                  {
                    category: "Fetch Blogs",
                    features: [
                      "Retrieves blog posts dynamically from the WordPress API",
                    ]
                  },
                  {
                    category: "User-Friendly Interface",
                    features: [
                      "Displays blog content in a visually appealing and easy-to-navigate design",
                    ]
                  },
                  {
                    category: "Google Ads Integration",
                    features: [
                      "Banner Ads: Shows a Google test banner ad after every five blog posts",
                      "Interstitial Ads: Displays an interstitial ad when navigating from the homepage to the blog detail page"
                    ]
                  },
                  {
                    category: "Optimized Performance",
                    features: [
                      "Ensures smooth scrolling and quick loading of blog posts for an uninterrupted user experience",
                    ]
                  },
                ],
                techStack: [
                  "Frontend: Flutter (Dart)",
                  "API Integration: WordPress API for fetching blog content",
                  "Monetization: Google Mobile Ads SDK for displaying banner and interstitial ads"
                ],
                projectType: "Side Project",
                role: "Sole developer responsible for the design, development, and implementation of all functionalities.",
                skillsDeveloped: [
                  "WordPress API integration for dynamic content retrieval.",
                  "Implementation of Google Ads in a Flutter app, including banner and interstitial ads.",
                  "Managing asynchronous data fetching and API handling.",
                ]
               ,
                challenges: [
                  "Ad Placement: Strategically integrated Google Ads without compromising the user experience."
                ],
                screenshots: projectImages.blogApp,
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImages.weatherApp[0]}
              title="Weather App"
              description="A Flutter weather application that fetches real-time weather data from the OpenWeatherMap API. The app shows weather conditions for the user's current location and allows searching for weather in any city using BLoC state management."
              ghLink="https://github.com/Muluken-Zewge/Weather-App-With-BLoc"
              details={{
                overview: "A Flutter-based mobile application that provides real-time weather information. The app fetches current weather data from the OpenWeatherMap API and displays weather details for the user's location or any searched city worldwide. It utilizes BLoC state management for handling app states effectively.",
                keyFeatures: [
                  {
                    category: "Current Location Weather",
                    features: [
                      "Fetches and displays weather data for the user's current location using geolocation."
                    ]
                  },
                  {
                    category: "Search Weather by City",
                    features: [
                      "Allows users to search for any city in the world with an autocomplete feature that suggests city names as the user types."
                    ]
                  },
                  {
                    category: "BLoC State Management",
                    features: [
                      "Efficiently manages app states, including loading, success, and error states, ensuring a seamless user experience."
                    ]
                  }
                ],
                techStack: [
                  "Frontend: Flutter (Dart)",
                  "API Integration: OpenWeatherMap API for real-time weather data",
                  "Geolocation: Geolocator Plugin for fetching the user's current location",
                  "Weather Package: Used for interfacing with the OpenWeatherMap API",
                  "State Management: BLoC for handling app states and ensuring clean architecture"
                ],
                projectType: "Personal Project",
                role: "Sole developer responsible for designing and implementing all functionalities",
                skillsDeveloped: [
                  "Geolocation integration for weather-based features",
                  "API integration and handling asynchronous data in Flutter",
                  "Implementation of BLoC state management for clean and efficient state handling",
                  "UI design and optimization for displaying real-time weather data in a user-friendly manner"
                ]
               ,
                challenges: [
                  "Dynamic Data Handling: Ensured real-time updates when fetching weather data for the user's location or searched cities",
                  "State Management: Seamlessly handled transitions between loading, success, and error states using BLoC"
                ],
                screenshots: projectImages.weatherApp,
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
