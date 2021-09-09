import React, { useEffect, useState } from 'react'
import { ImCross, FiEdit } from 'react-icons/all';
import { Link } from 'react-router-dom';

import { app } from '../../firebase';
import Loader from './Loader';
const db = app.firestore();
const storage = app.storage();

function News() {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        console.log("ites run or not")
        setLoading(true);
        await db.collection("feedbacks")
            .get()
            .then(data => {
                let temp = [];
                data.docs.map(feed => temp.push(feed.data()))
                setNewsList(temp)
                setLoading(false)
            });

            return ()=>{
                setLoading(false)
            }

    }, [])
    console.log('loading :>> ', loading);
    const deleteItem = async (index) => {

        const toBeDelete = newsList[index];
        console.log('toBeDelete :>> ', toBeDelete);

        if (window.confirm(" want to delete")) {

            const deleted = newsList.splice(index, 1)
            const storageRef = storage.ref();
            const ImgRef = storageRef.child(`screenshots/${toBeDelete.email}`)

            setNewsList([...newsList])
            try {
                await db.collection("feedbacks").doc(toBeDelete.email).delete()
                await ImgRef.delete()
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('i dont want to delete :>> ');
        }
    }

    console.log('newsList :>> ', newsList);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="hero__news ">
            <div className="news_cards  flex">
                {
                    newsList.length <= 0 ?
                        <h1>No data</h1>
                        :
                        newsList.map((feed, index) => (
                            <div className="news " key={index}>

                                <div className="news__cross flex   flex-ai-c">
                                    <Link to={"/feedback/" + feed.email} className="cross_icon">
                                        <FiEdit color="blue" />
                                    </Link>
                                    <div className="cross_icon" onClick={() => deleteItem(index)}>
                                        <ImCross color="red" />
                                    </div>
                                </div>
                                <div className="news__contents  flex flex-di-col">
                                    <div className="news__contents_basic_Details">
                                        <h2>{feed.name} {feed.lastName}k</h2>
                                        <h3>{feed.review}</h3>
                                        <h4>{feed.email}</h4>

                                    </div>

                                    <div className="news__contents_photo" style={{ backgroundImage: `url(${feed.screenshot})` }}>

                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default News
