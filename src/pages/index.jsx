import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/main.css";
import Sidebar from "../components/sidebar";

export default function Root() {


	return (
		<main className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
			<aside className="w-full md:w-64 bg-gray-800 text-gray-100">
				<Sidebar />
			</aside>
			<section className="flex-grow p-6 bg-gray-100 overflow-y-auto">
				<Outlet />
			</section>
		</main>
	);
}

