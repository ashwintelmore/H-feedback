import React, { useState, useEffect } from 'react'
import './sass/App.scss'
import Sidebar from './components/Helper/Sidebar';
import News from './components/Helper/News';
import FeedBackForm from './components/Helper/FeedBackForm';
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom';

import { app } from './firebase';
const db = app.firestore();
const storage = app.storage();

function App() {
  const [toggleFeedBack, setToggleFeedBack] = useState(false);
  const [viewToggle, setviewToggle] = useState(false);


  const [newsList, setNewsList] = useState([]);

  // useEffect(async () => {
  //   console.log("ites run or not")
  //   await db.collection("feedbacks").get()
  //     .then(data => {
  //       let temp = [];
  //       data.docs.map(feed => temp.push(feed.data()))
  //       setNewsList(temp)
  //     });

  // }, [])


  return (
    <>
      <section className="hero flex  ">
        <div className="feedback__form flex  ">
          <Sidebar
            viewToggle={viewToggle}
            setviewToggle={() => setviewToggle(!viewToggle)}
            toggleFeedBack={toggleFeedBack}
            setToggleFeedBack={() => setToggleFeedBack(!toggleFeedBack)}
          />

        </div>
        <div className="hero_content">

          <Switch>
            <Route exact path='/' component={News}/>
            <Route path='/feedback/:email?' component={FeedBackForm}/>
          </Switch>
        </div>
      </section>
    </>
  )
}

export default App
