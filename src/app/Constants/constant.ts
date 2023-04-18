import { college } from "../Models/college";
import { experience } from "../Models/experience";
import { Project } from "../Models/Project";
import { Service } from "../Models/Service";
import { skills } from "../Models/skills";

export class constant {
  public static fullName: string = "Vishal E";
  public static personalEmail: string = "vishalsmg97@gmail.com";
  public static dob: "07/23/1997";
  public static location: string = "Karnataka, India";
  public static summary: string = ` I help you build brand for your business at an affordable price. Thousands
  of clients have procured exceptional results while working with our
  dedicated team. when an unknown printer took a galley of type and
  scrambled it to make a type specimen book.

  Delivering work within time and
  budget which meets client’s requirements is our moto. Lorem Ipsum has been
  the industry's standard dummy text ever when an unknown printer took a
  galley.`


  public static services: Service[] = [
    {
      title: "Web Development",
      icon: "bi bi-display-fill",
      information: "I Use Angular, Javascript, HTML and CSS for web development. I also have knowledge on ReactJs.",

    },
    {
      title: "Back-end Developement",
      icon: "bi bi-gear-fill",
      information: "I Use .Net Core and .Net FrameWork for back-end development. I have also worked on Python.",
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
      name: "DVS Independent",
      course: "PCMB",
      date: "2013 - 2015"
    },
    {
      name: "PESITM",
      course: "Computer Science",
      date: "2015 - 2019"
    }
  ];

  public static experience: experience[] = [
    {
      company: "Srichid Technologies",
      date: "july/2019 - dec/2021",
      designation: "Software Developer"
    },
    {
      company: "Collabera Technologies",
      date: "jan/2022 - sep/2022",
      designation: "Software Engineer"
    },
    {
      company: "Optum",
      date: "oct/2022 - present",
      designation: "Software Engineer"
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
      skill: "React Js",
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
    var date = new Date("07/23/1997");
    var month_diff = Date.now() - date.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age.toString();
  }
}
