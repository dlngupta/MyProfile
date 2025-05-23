import { college } from "../Models/college";
import { experience } from "../Models/experience";
import { Project } from "../Models/Project";
import { Service } from "../Models/Service";
import { skills } from "../Models/skills";

export class constant {
  public static fullName: string = "DLN Gupta";
  public static personalEmail: string = "dln.gupta5@gmail.com";
  public static dob: "07/21/1994";
  public static location: string = "Ongole, India";
  public static summary: string = ` Over around 6 years of experience in software application development web-applications by using Microsoft technologies
   .NET Core and UI framewrok Angular and using database is SQL Server. Hands on experience in maintaining application flow, debug, build and deployment and Have good analytical ability and development skills, capable of working independently or in teams.`


  public static services: Service[] = [
    {
      title: "Web Development",
      icon: "bi bi-display-fill",
      information: "I Use Angular, Javascript, HTML and CSS for web development. I also have knowledge on ReactJs.",

    },
    {
      title: "Back-end Developement",
      icon: "bi bi-gear-fill",
      information: "I Use .Net Core and .Net FrameWork for back-end development. I have knoweldge on Azure devlopment.",
    },
    {
      title: "Database",
      icon: "bi bi-database-fill-gear",
      information: "I Use MSSQL for database.",
    },
    {
      title: "Azure DevOps",
      icon: "bi bi-microsoft",
      information: "I Use Azure for git repositories and CI & CD pipelines.",
    },
  ];

  public static colleges: college[] = [
    {
      name: "Sri Sadhana Junior college",
      course: "Intermediate",
      date: "2009 - 2011",
      url:"http://srisadhanaedu.org/"
    },
    {
      name: "DR.SGIET",
      course: "Electronics & Communication Engineering",
      date: "2011 - 2015",
      url:"https://prakasam.ap.gov.in/public-utility/dr-samuel-george-institute-of-engineering-technology/"
    }
  ];

  public static experience: experience[] = [
  
    
  
    {
      company: "Newt Global India Private Limited",
      date: "DEC/2019 - JAN/2021",
      designation: "Senior Software Engineer",
      workedOnProjectsCount:1,
      url:"https://newtglobal.com/",
      projects:[ {
          
        name:" iTOC(IT Advisory Oversight Committee Tool)",
        technologies:"Angular 10, .Net Core API, Postgres Sql, Azure Devops, GIT and PostgreSQL",
        teamSize:5,
        description:`The iTOC tool is a web application and is accessible via the EY network. It will be the single platform to approve IT opportunities requiring iTOC review, replacing the excel template-based process currently in place. Determining whether engagements that include an IT component, whether systems implementation, systems configuration, systems integration or project management, are within the approved scope of services may require significant judgment. The Technology Consulting leadership team in each area has established a process to identify such engagements for them to be presented to the Area IT Consulting Oversight Committee for review and approval. Any engagement team member in EMEIA can access the iTOC application to enter new opportunity details for iTOC approval. This tool will have multiple benefits:  
        • Removes duplication of data and effort involved in the current process 
        • Allows EMEIA leadership to focus on critical opportunities, based on the details uploaded by the 
        opportunity owner  
        • Provides a single platform to review and approve IT opportunities; and automatically send feedback actions or conditions back to the engagement team. The tool stores this information centrally, eliminating email exchanges, and can be referenced to at any time 
        • Includes protocols for Software, Hardware reselling and Application Managed Services in the scope of the review process, in addition to IT opportunities.  
        `,
        roles:`
        ●	Understanding the functionalities and requirements through Azure devops tool .
        ●	To analyses the requirements clearly to arrive the efforts for assigned modules.
        ●	To create  the modules and new components in Angular6 and Typescript .
        ●	To create the Core API’s to complete the module according to the requirement.
        ●	To ensure the logics for creating the PGSQL functions 
        ●	Created Angular Directives, Modules, Pipes..etc in TypeScript.
        ●	Worked Extensively with data grid component i.e Primg NG
        ●	Worked Extensively with Angular CLI for creating components, Services, Pipes and Directives.
        ●	Cooperating with the back-end PGSQL developer in the process of building the Postgre Sql functions.
        ●	To create the TDD and UTD documents .
        ●	Used GIT  for Source code Management.

        
        `
      },]
    },
    {
      company: "CitiusTech Healthcare Technology Pvt Ltd",
      date: "Mar/2021 - Present",
      designation: "Technical Lead - I",
      workedOnProjectsCount:1,
      url:"https://www.citiustech.com/",
      projects:[{
          
        name:" OPAS (Cloud Migration and Modernization)",
        technologies:"Angular 9, .Net Core APIs, Micro Services, SQL Server DB, Azure Functions, Web   Deployment, GIT",
        teamSize:7,
        description:`Optum Case (Physician) Advisor Services is clinically aware artificial intelligence like deep learning and NLP added to workflow technologies. Where Experts start with data, over 15 million real-life medical necessity case reviews, and apply deep learning techniques to teach CA technology systems how to quickly and accurately recognize cases that require a physician advisor's review. This helps hospital to reduce denial rates, improve appropriate reimbursement and minimize audit risk.
        `,
        roles:`
        ●	Understanding the functionalities and requirements through Rally tool .
        ●	To analyses the requirements clearly to arrive the efforts for assigned modules.
        ●	To create  the modules and new components in Angular9 and Typescript .
        ●	To create the Core API’s to complete the module according to the requirement.
        ●	Created Angular Directives, Modules, Pipes..etc in TypeScript.
        ●	Worked Extensively with data grid component i.e UITK
        ●	Worked Extensively with Angular CLI for creating components, Services, Pipes and Directives.
        ●	To create the TDD and UTD documents .
        ●	Managed Azure services (Functions, Blob Storage, Azure Queues)
        ●	Used GIT  for Source code Management.


        
        `
      },]
    }
  ];

  public static skills: skills[] = [
    {
      skill: "Web Development",
      percentage: "80"
    },
    {
      skill: "Angular",
      percentage: "85"
    },
    {
      skill: "HTML/CSS",
      percentage: "90"
    },
    {
      skill: "Javasript/Typescript",
      percentage: "80"
    },
    {
      skill: ".Net Core/Framwork",
      percentage: "75"
    },
    {
      skill: "Azure Development",
      percentage: "50"
    },
  ];

  public static projects: Project[] = [
{
  name:"BlocDrive",
  mainImage: "assets/Blocdrive/Blocdrive1.png",
  Images: ["assets/Blocdrive/Blocdrive1.png",
  "assets/Blocdrive/Blocdrive2.png",
  "assets/Blocdrive/Blocdrive3.png",
  "assets/Blocdrive/Blocdrive4.png",
  "assets/Blocdrive/Blocdrive5.png"
]
},
{
  name:"Job Zone",
  mainImage: "assets/Jobzone/Jobzone.png",
  Images: ["assets/Jobzone/Jobzone.png"]
},
{
  name:"Srichid Academy",
  mainImage: "assets/Academy/Academy1.png",
  Images: ["assets/Academy/Academy1.png",
  "assets/Academy/Academy2.png",
  "assets/Academy/Academy3.png",
]
},
{
  name:"Haspit",
  mainImage: "assets/Haspit/Haspit1.png",
  Images: ["assets/Haspit/Haspit1.png",
  "assets/Haspit/Haspit2.png",
  "assets/Haspit/Haspit3.png",
  "assets/Haspit/Haspit4.png",
  "assets/Haspit/Haspit5.png",
]
},
  ];

  public static getAge() {
    var date = new Date("07/21/1994");
    var month_diff = Date.now() - date.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age.toString();
  }
}
