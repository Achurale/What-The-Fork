import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default function About(){
    return(
        <div>
            <h1>About</h1>
            <p>Our mission is to connect people who love cooking and inspire them to explore new cuisines, ingredients, and techniques. Whether you are a beginner or a master chef, you can find something to suit your taste buds and skill level on our platform.</p>
                <br/>
            <p>We believe that cooking is not only a way to nourish our bodies, but also a way to express our creativity, culture, and personality. That’s why we encourage our users to interact with each other, exchange feedback, and collaborate on new recipes. You can also customize any recipe to your liking, or create your own from scratch using our easy-to-use recipe builder.</p>
            <p>This is a team consists of 4 developers: </p>
            <ul>
                <li>
                    Gabe Velasquez<a href="https://github.com/Gabe-Velasquez">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                </li>
                <li>
                    Chuyi Lee
                    <a href="https://github.com/Achurale">
                    <FontAwesomeIcon icon={faGithub}/></a>
                </li>
                <li>Luke Hevey
                    <a href="https://github.com/lukehevey">
                    <FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                    Raul Valverde
                    <a href="https://github.com/Hexteezy">
                    <FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
        </div>
    )
}