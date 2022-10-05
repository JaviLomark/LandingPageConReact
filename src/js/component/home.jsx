import React from "react";
import Navbar from "./Navbar/navbar.jsx";
import Jumbotron from "./Jumbotron/jumbotron.jsx";
import Cards from "./Cards/cards.jsx";
import Footer from "./Footer/footer.jsx";

//create your first component
const Home = () => {

	return (
		<div>
			<Navbar />
			<div className="container-fluid">
			<Jumbotron />
			<div class="row row-cols-1 row-cols-md-4 g-4">
  				<div class="col">
			<Cards
					img="https://picsum.photos/id/234/300/200"
					title="Title 1"
					description="Description 1"
					text="Text 1"
			/>
				</div>
				<div class="col">
			<Cards
					img="https://picsum.photos/id/235/300/200"
					title="Title 2"
					description="Description 2"
					text="Text 2"
			/>
				</div>
				<div class="col">
			<Cards
					img="https://picsum.photos/id/236/300/200"
					title="Title 3"
					description="Description 3"
					text="Text 3"
			/>
				</div>
				<div class="col">
			<Cards
					img="https://picsum.photos/id/237/300/200"
					title="Title 4"
					description="Description 4"
					text="Text 4"
			/>
				</div>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;