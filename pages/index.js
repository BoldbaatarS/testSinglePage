import Head from "next/head";
import Image from "next/image";
import Logo1 from "../public/img/logos/logo1.png";
import Logo2 from "../public/img/logos/logo2.png";
import Logo3 from "../public/img/logos/logo3.png";
import Logo4 from "../public/img/logos/logo4.png";
import Logo5 from "../public/img/logos/logo5.png";

export default function Home() {
  return (
    <div id="home">
      <nav id="navbar">
        <h1 className="logo">
          <span className="text-primary">
            <i className="fas fa-book-open" /> Platinum
          </span>
          Financial
        </h1>
        <ul>
          <li>
            <a href="#home">Нүүр</a>
          </li>
          <li>
            <a href="#what">Үйлчилгээ</a>
          </li>
          <li>
            <a href="#who">Бид</a>
          </li>
          <li>
            <a href="#contact">Холбогдох</a>
          </li>
        </ul>
      </nav>
      <header id="showcase">
        <div className="showcase-content">
          <h1 className="l-heading">Бидний боломжид хязгаар үгүй</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt,
            esse beatae architecto eum cumque!
          </p>
          <a href="#what" className="btn">
            Дэлгэрэнгүй унших
          </a>
        </div>
      </header>
      <section id="what" className="bg-light py-1">
        <div className="container">
          <h2 className="m-heading text-center">
            Бид <span className="text-primary">юу </span>хийдэг вэ?
          </h2>
          <div className="items">
            <item className="item">
              <i className="fas fa-university fa-2x" />
              <div>
                <h3>Хөрөнгө оруулалт</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, inventore.
                </p>
              </div>
            </item>
            <item className="item">
              <i className="fas fa-book-reader fa-2x" />
              <div>
                <h3>Санхүүгийн зөвлөгөө</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, inventore.
                </p>
              </div>
            </item>
            <item className="item">
              <i className="fas fa-pencil-alt fa-2x" />
              <div>
                <h3>Сургалт</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, inventore.
                </p>
              </div>
            </item>
          </div>
        </div>
      </section>
      {/*#who Бид хэн бэ ? */}
      <section id="who">
        <div className="who-img"></div>
        <div className="who-text bg-dark p-2">
          <h2 className="m-heading">
            <span className="text-primary">Бид</span> хэн бэ ?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quas minus incidunt vitae eligendi adipisci et
            repudiandae numquam aut dolor.
          </p>
          <h3>Удирдлагын баг</h3>
          <ul className="list">
            <li>Батсайханы Дэлгэр: Гүйцэтгэх захирал</li>
            <li>Долгорын Гэрэлтуяа: Санхүү эрхэлсэн захирал</li>
            <li>Болдын Ганзориг: Ерөнхий нягтлан</li>
            <li>Сүрэнгийн Баярцэцэг: Хөрөнгө оруулалтын менежер</li>
            <li>Жаргалын Баярцэцэг: Сургалт хариуцсан менежер</li>
          </ul>
        </div>
      </section>
      {/* Түншүүд */}
      <section id="clients" className="py-1">
        <div className="container">
          <h2 className="m-heading text-center">
            <span className="text-primary">Манай</span>
            түншүүд
          </h2>
          <div className="items py-1">
            <div>
              <Image
                className="Image"
                width={100}
                height={100}
                src={Logo1}
                alt="client"
              />
            </div>
            <div>
              <Image
                className="Image"
                width={100}
                height={100}
                src={Logo2}
                alt="client"
              />
            </div>
            <div>
              <Image
                className="Image"
                width={100}
                height={100}
                src={Logo3}
                alt="client"
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="Image"
                src={Logo4}
                alt="client"
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="Image"
                src={Logo5}
                alt="client"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section contact */}
      <section id="contact">
        <div className="contact-form bg-primary p-2">
          <h2 className="m-heading">Бидэнтэй холбоо барих</h2>
          <p>Доорхи талбаруудыг бөглөн бидэнтэй холбоо барина уу</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Нэр</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" Нэрээ оруулна уу"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">И-мэйл</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="И-мэйлээ оруулна уу"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Утасны дугаар</label>
              <input
                type="text"
                name="phone"
                id="hone"
                placeholder="Утасны дугаараа оруулна уу"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Мессеж</label>
              <textarea
                name="name"
                id="name"
                placeholder="Мессежээ энд бичнэ үү"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              defaultValue="Илгээх"
              className="btn btn-dark"
            />
          </form>
        </div>
        <div id="map" className="map"></div>
      </section>
      <footer className="bg-dark text-center py-1" id="main-footer">
        <div className="container">
          <p>© 2019, Платинум Финанс, Бүх эрх хуулиар хамгаалагдсан</p>
        </div>
      </footer>
    </div>
  );
}
