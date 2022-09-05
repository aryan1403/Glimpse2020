import DealBanner from "../Components/Banners/dealBanner";
import HomeBanner from "../Components/Banners/homeBanner";
import Cateogry from "../Components/Cateogries/cateogry";
import "./home.css";
import Sunglasses from "./../res/sunglassescat.jpg";
import Googles from "./../res/homegooglebanner.jpeg";

export default function Home() {
    return (
        <>
        <DealBanner/>
        <Cateogry/>
        <div id="bannerdiv">
            <HomeBanner src={Googles} url="/shop/" dir="r"/>
            <HomeBanner src={Sunglasses} url="/shop/" dir="l"/>
        </div>
        </>
    );
}