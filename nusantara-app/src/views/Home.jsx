import React from 'react'
import {Link} from 'react-router-dom'
import '../main.scss'
import landingPage from '../images/landing-page.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'
import Map from '../components/Map'
function Home() {
    return (
        
        <div id="home">
            
            <header>
                <nav>
                    <div className="logo">
                        <h4>Nusantara</h4>
                    </div>
                    <ul>
                                        {/* <li>
                        <input type="checkbox" class="checkbox" id="chk" />
                        <label class="label" for="chk">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </li> */}
                        
                        <li class="login"><Link to="" class="link login-link">Login</Link></li>
                        <li><Link to="" class="link cart"><i class="fas fa-shopping-cart"></i></Link></li>
                    </ul>
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
                            <img src={landingPage} style={{width: '38rem'}} alt="" />
                        </div>
                    </div>
                </section>
                <section id="foods">
                    <div className="foods-container">
                        <div className="foods-card">
                            <div className="card">
                                <img src={food1} style={{width:'15rem'}}alt="" />
                                <p class="food-title">Tumis kacang panjang</p>
                                <div className="price">
                                    <p>Rp 18.000</p>
                                </div>
                                <i class="fas fa-plus"></i>
                            </div>
                            <div className="card">
                                
                                <img src={food2} style={{width:'15rem'}}alt="" />
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
                            <img src={food3} style={{width: '38rem'}} alt="" />
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
                            <img src={food4} style={{width: '38rem'}} alt="" />
                        </div>
                    </div>
                </section>
                <section id="contact-us">
                    <div className="contact-us-container">
                    <div className="contact-us-text">
                        <p>LET'S TALK</p>
                        <h1>Want to Reserve a table?</h1>
                    </div>
                    <div className="button">
                        <Link to="" class="button-fill-right">Contact us now</Link>
                    </div>
                    </div>

                </section>
                <section id="footer">
                    <div className="footer-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat iusto assumenda voluptas unde animi exercitationem, molestiae ducimus impedit aliquam, iste, repellat deleniti dolorem odio error nihil voluptatem corrupti expedita!</p>
                    </div>
                   <div id="map">
                       <Map></Map>
                   </div>
                </section>
            </header>
        </div>
    )
}

export default Home
