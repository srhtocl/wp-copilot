
import React from "react";
import PostList from "../components/postList";

import CreatePost from "./create-post";
import LoginForm from "../auth/login";

export default function Home() {

	return (

		<section className="flex-grow bg-gray-100 overflow-y-auto">

			<LoginForm></LoginForm>

		</section>


	)

}