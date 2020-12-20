import s from './Posts.module.css';

const Post =()=>{
    return (
            <div className={s.posts}>
                <div className={s.item}>
                    <img src={'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127-1024x576.jpg'}/>
                    Post1
                    <div>
                    <span>Like</span>
                    </div>
                </div>
            </div>

        )
}

export default Post;
