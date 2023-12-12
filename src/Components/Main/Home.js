import Intro from "./intro";
import Banner from "./Banner__items/Banner";
import ShopCardContainer from "./ShopCard/ShopCardContainer";
import TopOredes from "./TopOrders/TopOrders";
import Stock from "./stock/Sock";
import CommentMother from "./Comennts/CommentMother";
import Bonus from "./Bonus/Bonus";

const Home = () => {

    return (
			<>
				<div className='Wrapper'>
					<Intro />
				</div>
				<Banner />
				<div className='Wrapper'>
					<ShopCardContainer />
					<TopOredes />
					<Stock />
					<CommentMother />
					<Bonus />
				</div>
			</>
		)

}
 
export default Home;