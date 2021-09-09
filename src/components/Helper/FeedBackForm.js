import React, { useEffect, useState } from 'react'
import Input, { InputPhone, TextArea } from './Input';
import Loader from './Loader';


import { app } from '../../firebase';
import { useHistory, useParams } from 'react-router';
const db = app.firestore();
const storage = app.storage();

function FeedBackForm({ toggleFeedBack }) {
    const [userData, setUserData] = useState({
        name: '',
        lastName: "",
        review: "",
        email: "",
        screenshot: ""
    })
    const history = useHistory()
    const params = useParams()

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("teest");
    console.log('userData :>> ', userData.screenshot.name);
    const sendFeedBack = async (e) => {
        e.preventDefault();

        if (userData.screenshot !== "") {
            setLoading(true)
            const storageRef = storage.ref();
            const ImgRef = storageRef.child(`screenshots/${userData.email}`)

            await ImgRef.put(userData.screenshot)
            const ImgUrl = await ImgRef.getDownloadURL();

            await db.collection("feedbacks").doc(userData.email)
                .set({
                    ...userData,
                    screenshot: ImgUrl,
                }).then(() => {
                    setUserData({
                        name: '',
                        lastName: "",
                        review: "",
                        email: "",
                        screenshot: ""
                    })
                    setLoading(false)
                    alert("Successfully stored")
                    history.push("/")

                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        } else {
            await db.collection("feedbacks").doc(userData.email)
                .set({
                    ...userData,
                    screenshot: ""
                }).then(() => {
                    setUserData({
                        name: '',
                        lastName: "",
                        review: "",
                        email: "",
                        screenshot: ""
                    })
                    setLoading(false)
                    history.push("/")
                    alert("Successfully stored")
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        }
    };

    useEffect(async () => {
        if (params.email !== undefined) {
            console.log(params)
            await db.collection("feedbacks").doc(params.email)
                .get()
                .then(data => {
                    if (data.exists) {
                        setUserData(data.data());
                    }
                });
        }
    }, [])

    if (loading) {
        return <Loader />
    }

    return (

        <div className="feedback__form_form "  >
            <h1>Thank you so much for taking the time!</h1>
            <h3>Please provie the below details!</h3>
            <form onSubmit={sendFeedBack}>
                <Input
                    label="First Name:"
                    placeholder="John"
                    name="name"
                    required="required"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
                />
                <Input
                    label="Last Name:"
                    placeholder="Doe"
                    name="lastName"
                    required="required"
                    value={userData.lastName}
                    onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
                />
                <TextArea
                    label="Review:"
                    placeholder="Start your review writing..."
                    name="review"
                    value={userData.review}
                    required="required"
                    onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
                />
                <Input
                    label="Email:"
                    placeholder="example@sample.com"
                    name="email"
                    value={userData.email}
                    required="required"
                    onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
                />
                <Input
                    label="Screenshot:"
                    type="file"
                    onChange={(e) => setUserData({ ...userData, screenshot: e.target.files[0] })}
                />
                <button className="btn btn-2" type="submit">Submit Feedback</button>
            </form>

        </div>
    )
}

export default FeedBackForm
