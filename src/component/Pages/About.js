import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
	useTitle("Blog");
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
					<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
						Difference between SQL and NoSQL
					</p>
					<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
						Difference between SQL and NoSQLns
					</h2>
					<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								Difference between SQL and NoSQL
							</summary>
							<div className="px-4 pb-4">
								<p>
									SQL is the programming language used to interface with
									relational databases. (Relational databases model data as
									records in rows and tables with logical links between them).
									NoSQL is a class of DBMs that are non-relational and generally
									do not use SQL.
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								What is JWT, and how does it work?
							</summary>
							<div className="px-4 pb-4">
								<p>
									JSON Web Token (JWT) is an open standard (RFC 7519) that
									defines a compact and self-contained way for securely
									transmitting information between parties as a JSON object.
									This information can be verified and trusted because it is
									digitally signed.
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								What is the difference between javascript and NodeJS?
							</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>
									JavaScript is a simple programming language that can be used
									with any browser that has the JavaScript Engine installed.
									Node.js, on the other hand, is an interpreter or execution
									environment for the JavaScript programming language.
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								How does NodeJS handle multiple requests at the same time?
							</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>
									I understand that Node.js uses a single-thread and an event
									loop to process requests only processing one at a time (which
									is non-blocking). But still, how does that work, lets say
									10,000 concurrent requests. The event loop will process all
									the requests? Would not that take too long?
								</p>
							</div>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
