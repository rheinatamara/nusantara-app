import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../main.scss'
import landingPage from '../images/landing-page.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'
import Modal from '../components/Modal'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import makanan from '../images/makanan.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
function Home() {
    const [showModal,setShowModal] = useState(false)
    const openModal = ()=> {
        setShowModal(prev => !prev)
    }
    const foodIcon = new L.icon({
        iconUrl: makanan,
        iconSize: [65,65]
    })
    function logOut(){
        localStorage.clear()
        window.location.reload();
    }
    const position = [40.75896155056821, -73.99189849150925]
    return (
        
        <div id="home" >
           <Modal showModal={showModal} setShowModal={setShowModal}/>
            <div className="home-container">
                <header>
                    <nav>
                        <div className="logo">
                            
                            <img src={makanan} style={{width: '2rem', height: '2rem'}} alt="" /><h4> Nusantara</h4>
                        </div>

                            {
                                localStorage.access_token ? <ul><li style={{fontSize: '1.5rem'}}class="login logout"><button  onClick={logOut} class="link login-link"><h4>Logout</h4></button></li>                                <li><Link to="" class="link cart"><i class="fas fa-shopping-cart"></i></Link></li>
                                </ul> :
                                <ul>
                                <li  class="login"><button onClick={openModal} class="link login-link"><h4>Login</h4></button></li>
                                </ul>

                            }
                    </nav>
                    <section id="landing-page">
                        <div className="header-container">
                            <div className="text-container">
                                <div className="text">
                                    <h1>Fresh and Delicious Nusantara Food</h1>
                                    <p>We make fresh Indonesian food with various recipes and ingredients</p>
                                </div>
                                <div class  Name="button">
                                    <Link to="" class="button-fill-right">View Menu <i class="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={landingPage} style={{width: '65rem',marginLeft: '2rem'}} alt="" />
                            </div>
                        </div>
                    </section>
                    <section id="foods">
                        <div className="foods-container">
                            <div className="foods-card">
                                <div className="card">
                                    <img src={food1} alt="" />
                                    <p class="food-title">Tumis kacang panjang</p>
                                    <div className="price">
                                        <p>Rp 18.000</p>
                                    </div>
                                    <i class="fas fa-plus"></i>
                                </div>
                                <div className="card">
                                    
                                    <img src={food2} alt="" />
                                    <p class="food-title">Karedok</p>
                                    <div className="price">
                                        <p>Rp 15.000</p>
                                    </div>
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                            <div className="text-food-card">
                                <div className="text-card">
                                    <h1>The best Indo restaurant for delectable food delights & more</h1>
                                    <p>Nusantara restaurant offers the most delicious and traditional food made by famous Indonesian chef</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="new-recipe">
                        <div className="new-recipe-container">
                            <div className="new-recipe-text">
                                <h1>Try our newly soup combo with 4 pieces of fresh shrimps</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit praesentium, porro quos eligendi placeat fugiat delectus, nesciunt enim fugit itaque minima. Nisi natus quas molestiae, perspiciatis illo aliquam ad dolor repellendus dolore voluptatem perferendis dolorem libero non incidunt minus nulla.</p>
                            </div>
                            <div className="new-recipe-image">
                                <img src={food3} style={{width: '110rem'}} alt="" />
                            </div>
                        </div>
                    </section>
                    <section id="specialize">
                        <div className="specialize-container">
                            <div className="specialize-text">
                                <h1>We specialize in making traditional food</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi totam libero delectus dignissimos, saepe obcaecati minima fuga. Ullam, voluptatem modi odio quisquam minus, possimus sit aspernatur, commodi aut inventore quas.</p>
                            </div>
                            <div className="specialize-image">
                                <img src={food4} style={{width: '110rem'}} alt="" />
                            </div>
                        </div>
                    </section>
                    <section id="contact-us">
                        <div className="contact-us-container">
                        <div className="contact-us-text">
                            <p>LET'S TALK</p>
                            <h1 style={{fontWeight: "bolder"}}>Want to Reserve a table?</h1>
                        </div>
                        <div className="button">
                            <Link to="" class="button-fill-right">Contact us now</Link>
                        </div>
                        </div>

                    </section>
                    <section id="footer">
                        <div className="footer-container">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat iusto assumenda voluptas unde animi exercitationem, molestiae ducimus impedit aliquam, iste, repellat deleniti dolorem odio error nihil voluptatem corrupti expedita!</p>
                            <div id="map">
                                <div className="map-container">
                                        <MapContainer style={{ width: '100%', height: '400px' }} center={position} zoom={13} scrollWheelZoom={false}>
                                            <TileLayer
                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={position} icon={foodIcon}>
                                            <Popup>
                                            625 8th Ave, New York, NY 10018, Nusantara Resto
                                            </Popup>
                                            </Marker>
                                        </MapContainer>
                                </div>
                            </div>
                            <div className="footer-flex">
                                <ul>
                                    <li><h1 style={{fontWeight: "bolder"}}>Nusantara</h1></li>
                                    
                                    <li> <div className="container">
                                    <div className="title">
                                            <h1>Our Services</h1>
                                        </div>
                                        <ul>
                                            <li>Pricing</li>
                                            <li>Tracking</li>
                                            <li>Our Menu</li>
                                            <li>Terms of services</li>
                                        
                                        </ul>
                                        </div>
                                        
                                        
                                    </li>
                                    <li> <div className="container">
                                    <div className="title">
                                            <h1>Our Company</h1>
                                        </div>
                                        <ul>
                                            <li>Orders</li>
                                            <li>Get in touch</li>
                                            <li>Management</li>
                                        
                                        </ul>
                                        </div>
                                        
                                        
                                    </li>
                                    <li> <div className="container">
                                    <div className="title">
                                            <h1>Address</h1>
                                        </div>
                                        <ul>
                                            <li>625 8th Ave</li>
                                            <li>New York</li>
                                            <li>NY 10018</li>
                                        
                                        </ul>
                                        </div>
                                        
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        
                    
                    </section>
                </header>
            </div>
        </div>
    )
}

export default Home
