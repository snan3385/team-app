import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Onboarding",
    path: "/event-platform-resource-management/onboarding",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "View Onboarding",
        path: "/event-platform-resource-management/onboarding/view-onboarding",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Request Onboarding",
        path: "/event-platform-resource-management/onboarding/request-onboarding",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
