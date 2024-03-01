import Header from "../components/LogInSIgnUp/header";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {BiCheckSquare} from "react-icons/bi";
import "./about.css"
function About(){
        return (
            <div className="container">
                <div className="headers">
                    <Header/>
                </div>
                <div className="hero">
                    <h1>HUSTLE HUB</h1>
                    <h3>Provide you with quality handy services</h3>
                    <div className="desc">
                    <IoIosCheckmarkCircleOutline className="nav-icons" />
                        <h6>Marketing place for skilled technicians</h6>
                        <p>Hustle Hub provides you with an easy place to market the services you provide</p>
                    </div>
                    <div className="desc">
                    <IoIosCheckmarkCircleOutline className="nav-icons" />
                        <h6>Only user friendly environment</h6>
                        <p>East to use platform with functionalities just one click away</p>
                    </div>
                    <div className="desc">
                    <IoIosCheckmarkCircleOutline className="nav-icons" />
                        <h6>CHoose the services you need</h6>
                        <p>Can select he technicain you need based on the services you want</p>
                    </div>
                    <button className="about-btns btns">LEARN MORE</button>
                </div>
                <div className="services">
                <h1 className="title">Our Services</h1>
                    <div className="services-container">
                        
                        <div className="service-card">
                        <BiCheckSquare className="nav-icons" />
                        <h2>Booking and Scheduling</h2>
                        <p>Users can schedule appointments or request services directly through the platform. Skilled laborers can manage their schedules and confirm bookings.</p>
                        </div>
                        <div className="service-card">
                        <i class="fa-solid fa-list"></i>
                        <h2>Service listing</h2>
                        <p>Skilled laborers can create listings for their services, including descriptions, rates, availability, and contact information.</p>
                        </div>
                        <div className="service-card">
                        <i class="fa-solid fa-comment"></i>
                        <h2>Reviews and Ratings</h2>
                        <p>Users can leave reviews and ratings for the services they've received. Skilled laborers can build their reputation through positive feedback.</p>
                        </div>
                        <div className="service-card">
                        <i class="fa-solid fa-filter"></i>
                        <h2>Search and Filter</h2>
                        <p>Users can search for skilled laborers based on their location, availability, and type of service required. Filters can include specific skills (electrician, plumber, etc.), ratings, and price range.</p>
                        </div>
                    </div>
                </div>

            </div>
                
        )
}
export default About;
