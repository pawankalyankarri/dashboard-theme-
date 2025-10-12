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
import DbBarChart from "./dashboardDetails/Charts/DbBarChart";
import DbLineChart from "./dashboardDetails/Charts/DbLineChart";
import type React from "react";

export interface DashboardTopType {
  icon: IconDefinition;
  title: string;
  number: string | number;
  footertext: string;
  footerpercent: string;
  color: string;
}

export interface BarChartDataType {
  day: string;
  sales: number;
}

export interface LineChartDatatype {
  month: string;
  sales: number;
}

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

export const BarChartData: BarChartDataType[] = [
  { day: "Mon", sales: 45 },
  { day: "Tue", sales: 39 },
  { day: "Wed", sales: 55 },
  { day: "Thu", sales: 60 },
  { day: "Fri", sales: 45 },
  { day: "Sat", sales: 40 },
  { day: "Sun", sales: 30 },
];

export const LineChartData: LineChartDatatype[] = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 240 },
  { month: "Mar", sales: 310 },
  { month: "Apr", sales: 180 },
  { month: "May", sales: 270 },
  { month: "Jun", sales: 350 },
  { month: "Jul", sales: 400 },
  { month: "Aug", sales: 260 },
  { month: "Sep", sales: 320 },
  { month: "Oct", sales: 290 },
  { month: "Nov", sales: 370 },
  { month: "Dec", sales: 200 },
];

export const CompaniesData: CompaniesDataTypes[] = [
  {
    companiesIcon: "",
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
    companiesIcon: "",
    companies: "Add Progress Track",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    ],
    budget: 3000,
    completion: 20,
  },
  {
    companiesIcon: "",
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
    companiesIcon: "",
    companies: "Launch our Mobile App",
    members: [
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
      "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",

    ],
    budget: 20500,
    completion: 100,
  },
  {
    companiesIcon: "",
    companies: "Add the New Pricing Page",
    members: [
      "	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
    ],

    budget: 500,
    completion: 40,
  },
  {
    companiesIcon: "",
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
