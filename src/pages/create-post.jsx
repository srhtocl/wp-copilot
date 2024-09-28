import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function CreatePost() {
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		// WordPress REST API'den veri çekme
		axios
			.get("https://bereketlimetal.com/wp-json/wp/v2/posts/1")
			.then((response) => {
				setTitle(response.data.title.rendered);
				setContent(response.data.content.rendered);
			})
			.catch((error) => console.error("Error fetching the post:", error));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Formu işleme kodlarını buraya ekleyin
		console.log({ title, content });
	};

	return (
		<form
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Title:
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>{" "}
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Sub Title:
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>{" "}
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Keword:
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="title"
				>
					kategories:
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold"
					htmlFor="content"
				>
					Content:
				</label>
				<ReactQuill
					className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					value={content}
					onChange={setContent}
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
