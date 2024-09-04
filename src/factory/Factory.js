import parse from 'html-react-parser';
import Picture from '../constants/Picture';

export default function Factory({ text, image }) {
    return (

        <section className={"factory"}>
            <div className={"factory__container"}>
                <h1 className={"visually-hidden"}>История основания фабрики и в последствии бренда LD</h1>
                <div className={"factory__text"}>{parse(text)}</div>
                <div className={"factory__image"}>
                    <Picture {...image} />
                </div>
            </div>
        </section>
    );
}