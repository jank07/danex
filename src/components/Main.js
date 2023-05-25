import { useState, useEffect } from "react";
import styles from '../App.css';
import png1 from '../img/cif.png'
import png2 from '../img/mop.png'
import png3 from '../img/czysciwo.png'
import { useInView } from "react-intersection-observer";

export default function Main() {
    const arrayOfImages = [png1, png2, png3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref: mainWrapper, inView: isVisible } = useInView();

    useEffect(() => {
        const interval = setInterval(() => {
            if(currentIndex === arrayOfImages.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex])

    return (
        <main>
            <div ref={mainWrapper} className={isVisible ? 'mainWrapperVisible' : 'mainWrapper'}>
                <h3 className="imgHeader">Wysokiej jakości, najtańsze środki czystości na Podhalu.</h3>
                <img key={currentIndex} src={arrayOfImages[currentIndex]} className="imgAutoSlider" alt="cleaning supplies" />
            </div>
        </main>
    )
}