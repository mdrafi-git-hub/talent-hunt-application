


import React from "react";
import {
  HomeIcon,
  SettingsIcon,
  BarChart2,
  UserIcon,
  BellIcon,
} from "lucide-react";
import { Card, CardContent } from "./UI/Card"
import { motion } from "framer-motion";

const services = [
  { name: "SEO", metric: "Reach", value: "86%", trend: "+5%" },
  { name: "Campaigns", metric: "Leads", value: "1,250", trend: "+8%" },
  { name: "Social Media", metric: "Engagement", value: "12.3k", trend: "+12%" },
  { name: "Ads", metric: "ROI", value: "4.5x", trend: "+18%" },
];

export default function SideBarDashboard() {
  return (
    <div className=" w-380 mx-auto min-h-screen bg-[#121314] text-white flex ">
      {/* Sidebar */}
      <aside className="w-16 bg-[#1e1e2d] flex flex-col items-center py-6 gap-6">
        <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center font-bold hover:scale-110 transition">
          TH
        </div>
        <HomeIcon className="text-white hover:text-pink-400 cursor-pointer" />
        <BarChart2 className="text-white hover:text-pink-400 cursor-pointer" />
        <UserIcon className="text-white hover:text-pink-400 cursor-pointer" />
        <SettingsIcon className="text-white hover:text-pink-400 cursor-pointer" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Welcome + Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-[#1e1e2d] rounded-2xl p-4 shadow-xl hover:shadow-pink-500/20 transition-shadow"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Talent Hunt Dashboard</h2>
            <div className="flex gap-2">
              <BellIcon className="text-white hover:text-pink-400 cursor-pointer" />
              <UserIcon className="text-white hover:text-pink-400 cursor-pointer" />
            </div>
          </div>
          <div className="text-lg">
            Campaign Performance:{" "}
            <span className="text-pink-400">92.4%</span> (+4.2%)
          </div>
          <div className="mt-4 bg-[#101216] h-64 flex items-center justify-center rounded-xl hover:bg-[#181b24] transition">
            <span className="text-gray-500">[Campaign Analytics Graph]</span>
          </div>
        </motion.div>

        {/* Marketing Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-[#1e1e2d] text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-400">Monthly Reach</p>
                  <h3 className="text-2xl font-bold text-pink-400">1.2M+</h3>
                  <p className="text-sm">Across all platforms</p>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full"></div>
              </div>
              <div className="mt-4 text-sm">
                <p>Top Platform: Instagram</p>
                <p>Growth Rate: +12%</p>
                <p>CTR: 6.8%</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {services.map((item) => (
            <Card
              key={item.name}
              className="bg-[#1e1e2d] hover:shadow-md hover:shadow-pink-500/20 transition"
            >
              <CardContent className="p-4">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-sm text-pink-400">{item.metric}</p>
                <p
                  className={`text-sm ${
                    item.trend.includes("-")
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {item.trend}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </main>
    </div>
  );
}


