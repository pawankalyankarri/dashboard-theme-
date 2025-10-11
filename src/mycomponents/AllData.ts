import {
  faCouch,
  type IconDefinition,
  faChartSimple,
  faShop,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import DbBarChart from "./dashboardDetails/Charts/DbBarChart";
import DbLineChart from "./dashboardDetails/Charts/DbLineChart";
import type React from "react";

export interface DashboardTopType {
  icon: IconDefinition;
  title: string;
  number: string|number;
  footertext: string;
  footerpercent : string
  color : string;
}

export interface BarChartDataType {
    day :string,
    sales : number
}

export interface LineChartDatatype{
  month : string,
  sales : number
}


export const DashboardHeadData: DashboardTopType[] = [
    {
      icon: faCouch,
      title: "Bookings",
      number: 281,
      footertext: "than lask week",
      footerpercent :"+55% ",
      color : "bg-gray-900"
    },
    {
      icon: faChartSimple,
      title: "today Users",
      number: 2300,
      footertext: "than lask month",
      footerpercent :"+3% ",
      color : "bg-blue-500"
    },
    {
      icon: faShop,
      title: "Revenue",
      number: '34k',
      footertext: "than yesterday",
      footerpercent :"+1% ",
      color : "bg-green-500"
    },
    {
      icon: faUserPlus,
      title: "followers",
      number: "+91",
      footertext: "Just updated",
      footerpercent :"",
      color : "bg-pink-500"
    },
  ];

export const BarChartData : BarChartDataType[] = [
  { day: "Mon", sales: 45 },
  { day: "Tue", sales: 39 },
  { day: "Wed", sales: 55 },
  { day: "Thu", sales: 60 },
  { day: "Fri", sales: 45 },
  { day: "Sat", sales: 40 },
  { day: "Sun", sales: 30 },
];

export const LineChartData : LineChartDatatype[] = [
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


