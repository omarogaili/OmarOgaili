import style from '../Style/portfolio.module.css';
import imageOmar from '../assets/images.jpg';

export default function Portfolio() {
    return (
        <>
            <div className={style.flex}>
                <h2 className="text-4xl font-bold mb-4">Omar Ogaili</h2>
                <p className="text-lg mb-8">Hello! my name is Omar Ogaili</p>
            </div>
            <div className={style.imageContainer}>
                <img src={imageOmar} alt="Omar Ogaili" className={style.image} />
            </div>
        </>
    );
}