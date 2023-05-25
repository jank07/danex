import { useState, useEffect } from "react";
import styles from '../App.css';
import png1 from '../img/cif.png'
import png2 from '../img/mop.png'
import { useInView } from "react-intersection-observer";

export default function Main() {
    const arrayOfImages = [png1, png2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref: mainWrapper, inView: isVisible } = useInView();

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(currentIndex === arrayOfImages.length - 1) {
    //             setCurrentIndex(0);
    //         } else {
    //             setCurrentIndex(currentIndex + 1);
    //         }
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [currentIndex])

    return (
        <main>
            <div ref={mainWrapper} className={isVisible ? 'mainWrapperVisible' : 'mainWrapper'}>{isVisible ? 'Janas' : 'ni ma'}
                <h3 className="imgHeader">Wysokiej jakości, najtańsze środki czystości na Podhalu.</h3>
                <img src={arrayOfImages[0]} className="imgAutoSlider" alt="cleaning supplies" />
            </div>
        </main>
    )
}