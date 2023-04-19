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
      date: "2009 - 2011"
    },
    {
      name: "DR.SGIET",
      course: "Electronics & Communication Engineering",
      date: "2011 - 2015"
    }
  ];

  public static experience: experience[] = [
    {
      company: "Micro Spark Software Solutions Private Limited ",
      date: "OCT/2016 - DEC/2019",
      designation: "Software Engineer"
    },
    {
      company: "Newt Global India Private Limited",
      date: "DEC/2019 - JAN/2021",
      designation: "Senior Software Engineer"
    },
    {
      company: "CitiusTech Healthcare Technology Pvt Ltd",
      date: "Mar/2021 - Present",
      designation: "Technical Lead - I"
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
