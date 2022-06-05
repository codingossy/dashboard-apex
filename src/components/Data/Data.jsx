import { FaHome, FaCcPaypal, FaUsers, FaProductHunt, FaDatabase, FaGoogleWallet, FaPaypal, FaApplePay } from "react-icons/fa";

//data


// Recent Card Imports
import img1 from '../../images/a1.jpg'
import img2 from '../../images/a2.jpg'
import img3 from '../../images/a3.jpg'


export const sideBarData = [
        {
            icon: FaHome,
            heading: "Dashboard",
        },
        {
            icon: FaCcPaypal,
            heading: "Payments",
        },
        {
            icon: FaUsers,
            heading: "Customers",
        },
        {
            icon: FaProductHunt,
            heading: "Deals",
        },
        {
            icon: FaDatabase,
            heading: "Data",
        },

];


export const CardsData = [
    {
            title: "Sales",
            color: {
                backGround: "orange",
                boxShadow: "0px 20px 20px0px #a9a9a9"
            },
            barValue: 90,
            value: "80,002",
            png: FaGoogleWallet,
            series: [
                {
                    name: 'Sales',
                    data: [20, 45, 55, 90, 77]
                },
            ],
    },
            {
                title: "Income",
                color: {
                    backGround: "green",
                    boxShadow: "0px 20px 20px0px #a9a9a9"
                },
                barValue: 60,
                value: "87,002",
                png: FaPaypal,
                series: [
                    {
                        name: 'Income',
                        data: [20, 45, 55, 90, 77]
                    },
                ],
        },
        {
            title: "Bills",
            color: {
                backGround: "purple",
                boxShadow: "0px 20px 20px0px #a9a9a9"
            },
            barValue: 80,
            value: "49,902",
            png: FaApplePay,
            series: [
                {
                    name: 'Bills',
                    data: [20, 45, 55, 90, 77]
                },
            ],
        },
]



// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];
  