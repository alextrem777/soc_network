import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile =()=>{
    return (
        <div className={s.content}>
            <div>
                <img src={'https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image-p-1080.jpeg'}></img>
            </div>

            <div>
                AVA + DESCRIP
            </div>

            <MyPosts />


        </div>)
}

export default Profile;
