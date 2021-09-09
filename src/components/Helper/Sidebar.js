import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="hero__side_bar   flex flex-ai-c flex-di-col padding-y">
            <div className="user_profile flex   flex-ai-c">
                <div className="user_profile__photo display-small-none">
                    <img src="https://unsplash.it/200/200" alt="user photo" />
                </div>
                <Link  to="/" className="user_profile__content flex  flex-di-col">
                    <h2>All Feedbacks</h2>
                </Link>
            </div>
           
            <div className="feedback flex  flex-di-col flex-ai-c">
                <h1 className="display-small-none">Have a Feedback</h1>
                <Link to="/feedback" className="btn" >Add FeedBack</Link>
            </div>
        </div>
    )
}

export default Sidebar
