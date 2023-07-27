import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/heroImage.jpg";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <section id="firstSection">
        <div id="firstSection_top">
          <div id='unhappyc'>
            <p id='unhappyP'>unhappy with your website?</p>
            <p id='createP'>we create beautiful and fast web services</p>
          </div>
          <div>
            <Image src={hero} alt="Hero" />
          </div>
        </div>
        <div id="firstSection_bottom">
          <p >Story, emotion and purpose</p>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <form id="firstSection_bottom_form">
            <label htmlFor="email">Want us to contact you?</label>
            <div>
              <input type="text" placeholder="Email" />
              <button>Join</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
