import { useState, useEffect } from "react";
import Style from "../Style/Post.module.css";
export default function PostBody() {
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);
    const baseUrl = "http://localhost:1337";

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/posts?populate=image");
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log(data);
                setPost(data.data);
                console.log(`Post fetched: ${posts}`);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);

    return (
        <div className={Style.bodyContainer}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className={Style.postContainer} >
                            <div className={Style.postTitle}>
                            <p>{post.Title}</p>
                            </div>
                            <img 
                                className={Style.PostImage} src={post.image?.[0]?.url ? `${baseUrl}${post.image[0].url}` : ""}>
                            </img>
                            <div className={Style.postDate}>
                            <p>{post.createdAt.split("T")[0]}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )
            )}
        </div>
    );
}