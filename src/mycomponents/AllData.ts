import {
  faCouch,
  type IconDefinition,
  faChartSimple,
  faShop,
  faUserPlus,
  faBell,
  faNewspaper,
  faCartShopping,
  faKey,
} from "@fortawesome/free-solid-svg-icons";


export interface DashboardTopType {
  icon: IconDefinition;
  title: string;
  number: string | number;
  footertext: string;
  footerpercent: string;
  color: string;
}

// export interface BarChartDataType {
//   day: string;
//   sales: number;
// }

// export interface LineChartDatatype {
//   month: string;
//   sales: number;
// }

export interface CompaniesDataTypes {
  companiesIcon: string;
  companies: string;
  members: string[];
  budget: number | string;
  completion: number;
}

export interface OrdersDataTypes {
  title: string;
  icon: IconDefinition;
  date: string;
  color: string;
}

export interface ProjectsDataTypes {
    name : string,
    icon : string,
    budget : number,
    status : string,
    completion : number
  }

export interface InvoicesDataTypes {
    date : string,
    numbers : string,
    price : number
  }

export interface ProfilePageDataTypes {
  profileImg : string,
  conversation : {
    icon : string,
    name : string,
    msg : string
  }[]
}

export const DashboardHeadData: DashboardTopType[] = [
  {
    icon: faCouch,
    title: "Bookings",
    number: 281,
    footertext: "than lask week",
    footerpercent: "+55% ",
    color: "bg-gray-900",
  },
  {
    icon: faChartSimple,
    title: "today Users",
    number: 2300,
    footertext: "than lask month",
    footerpercent: "+3% ",
    color: "bg-blue-500",
  },
  {
    icon: faShop,
    title: "Revenue",
    number: "34k",
    footertext: "than yesterday",
    footerpercent: "+1% ",
    color: "bg-green-500",
  },
  {
    icon: faUserPlus,
    title: "followers",
    number: "+91",
    footertext: "Just updated",
    footerpercent: "",
    color: "bg-pink-500",
  },
];

// export const BarChartData: BarChartDataType[] = [
//   { day: "Mon", sales: 35 },
//   { day: "Tue", sales: 29 },
//   { day: "Wed", sales: 45 },
//   { day: "Thu", sales: 50 },
//   { day: "Fri", sales: 35 },
//   { day: "Sat", sales: 20 },
//   { day: "Sun", sales: 15 },
// ];

// export const LineChartData: LineChartDatatype[] = [
//   { month: "Jan", sales: 120 },
//   { month: "Feb", sales: 240 },
//   { month: "Mar", sales: 310 },
//   { month: "Apr", sales: 180 },
//   { month: "May", sales: 270 },
//   { month: "Jun", sales: 350 },
//   { month: "Jul", sales: 400 },
//   { month: "Aug", sales: 260 },
//   { month: "Sep", sales: 320 },
//   { month: "Oct", sales: 290 },
//   { month: "Nov", sales: 370 },
//   { month: "Dec", sales: 200 },
// ];

export const CompaniesData: CompaniesDataTypes[] = [
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg",
    companies: "Material UI XD Version",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
      "	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    ],
    budget: 14000,
    completion: 60,
  },
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg",
    companies: "Add Progress Track",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    ],
    budget: 3000,
    completion: 20,
  },
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg",
    companies: "Fix Platform Errors",
    members: [
      "	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
    ],
    budget: "Not Set",
    completion: 100,
  },
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg",
    companies: "Launch our Mobile App",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
    ],
    budget: 20500,
    completion: 100,
  },
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg",
    companies: "Add the New Pricing Page",
    members: [
      "	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
    ],

    budget: 500,
    completion: 40,
  },
  {
    companiesIcon:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg",
    companies: "Redesign New Online Shop",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
    ],
    budget: 2000,
    completion: 70,
  },
];

export const OrdersData: OrdersDataTypes[] = [
  {
    title: "$2400, Design changes",
    icon: faBell,
    date: "22 DEC 7:20 PM",
    color: "bg-green-600",
  },
  {
    title: "New order #1832412",
    icon: faNewspaper,
    date: "21 DEC 11 PM",
    color: "bg-red-400",
  },
  {
    title: "Server payments for April",
    icon: faCartShopping,
    date: "21 DEC 9:34 PM",
    color: "bg-blue-600",
  },
  {
    title: "New card added for order #4395133",
    icon: faNewspaper,
    date: "20 DEC 2:20 AM",
    color: "bg-orange-600",
  },
  {
    title: "New card added for order #4395133",
    icon: faKey,
    date: "18 DEC 4:54 AM",
    color: "bg-pink-600",
  },
];

export const ProjectsData : ProjectsDataTypes[] = [
  {
    name : "asana",
    icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg",
    budget : 2500,
    status : "working",
    completion : 60
  },
  {
    name : "github",
    icon :"https://demos.creative-tim.com/material-dashboard-react/static/media/github.067f80f311bc16bd0d1216457d09bdb3.svg",
    budget : 5000,
    status : "done",
    completion : 100
  },
  {
    name : "atlassian",
    icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg",
    budget : 3400,
    status : "canceled",
    completion : 30
  },
  {
    name : "spotify",
    icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg",
    budget : 14000,
    status : "working",
    completion : 80
  },
  {
    name : "slack",
    icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg",
    budget : 1000,
    status : "canceled",
    completion : 0
  },
  {
    name : "invesion",
    icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg",
    budget : 2300,
    status : "done",
    completion : 100
  },
]

export const InvoicesData : InvoicesDataTypes[] = [
  {
    date : "March, 01, 2020",
    numbers : "#MS-415646",
    price : 180
  },
  {
    date : "February, 10, 2021",
    numbers : "#RV-126749",
    price : 250
  },
  {
    date : "April, 05, 2020",
    numbers : "#QW-103578",
    price : 120
  },
  {
    date : "June, 25, 2019",
    numbers : "#MS-415646",
    price : 180
  },
  {
    date : "March, 01, 2019",
    numbers : "#AR-803481",
    price : 300
  },
]

export const shadcnColors : string[] = [
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
  "bg-gray-500",
  "bg-slate-500",
  "bg-zinc-500",
  "bg-neutral-500",
  "bg-stone-500",
]


export const ProfilePageData : ProfilePageDataTypes = {
  profileImg : "https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg",
  conversation :[
    {
      icon :"https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg",
      name : "Sophie B.",
      msg : "Hi! I need more information.."
    },
    {
      icon :"https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg",
      name : "Anne Marie",
      msg : "Awesome work, can you.."
    },
    {
      icon :"https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      name : "Ivanna",
      msg : "About files I can.."
    },
    {
      icon :"https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg ",
      name : "Peterson",
      msg : "Have a great afternoon.."
    },
    {
      icon : "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      name : "Nick Daniel",
      msg : "Hi! I need more information.."
    },
]
}

