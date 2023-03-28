// import React from "react";

// function Admin() {
//   return <div>Admin</div>;
// }

// export default Admin;
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Admin.scss";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        // const res = await axios.get("/users/stats", {
        //   headers: {
        //     token:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTZmYzQ2NDk0Mjc3MTYwNDg4MmMxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNTgzMjMxMSwiZXhwIjoxNjI2MjY0MzExfQ.ATXV-1TTWIGyVBttTQSf0erRWjsgZ8jHQv1ZsUixbng",
        //   },
        // });
        const statsList = [
          {
            name: "Jan",
            "Active User": 4000,
          },
          {
            name: "Feb",
            "Active User": 3000,
          },
          {
            name: "Mar",
            "Active User": 5000,
          },
          {
            name: "Apr",
            "Active User": 4000,
          },
          {
            name: "May",
            "Active User": 3000,
          },
          {
            name: "Jun",
            "Active User": 2000,
          },
          {
            name: "Jul",
            "Active User": 4000,
          },
          {
            name: "Agu",
            "Active User": 3000,
          },
          {
            name: "Sep",
            "Active User": 4000,
          },
          {
            name: "Oct",
            "Active User": 1000,
          },
          {
            name: "Nov",
            "Active User": 4000,
          },
          {
            name: "Dec",
            "Active User": 3000,
          },
        ];
        statsList.map((item, i) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[i], "New User": item["Active User"] },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <>
        <Sidebar />
        <div className="container">
          <FeaturedInfo />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="New User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </>
    </div>
  );
}
