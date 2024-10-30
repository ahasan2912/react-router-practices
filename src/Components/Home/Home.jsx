import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { CirclesWithBar } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?<CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                /> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;