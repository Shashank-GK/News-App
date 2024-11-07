import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../Style/News.css";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Terra.com.br",
      },
      author: "Rolling Stone Brasil",
      title:
        "Grimes sai em defesa de Olivia Rodrigo e manda indireta para Elon Musk; entenda",
      description:
        "Grimes concorda com Olivia Rodrigo . Em entrevista à Netflix publicada na última sexta-feira, ...",
      url: "https://www.terra.com.br/diversao/grimes-sai-em-defesa-de-olivia-rodrigo-e-manda-indireta-para-elon-musk-entenda,a31bffbba29cc69f76ebcc8bfbb688fbb8xaieqv.html",
      urlToImage:
        "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/11/05/1354501913-elon-musk-e-grimes-foto-theo-wargogetty-images-olivia-rodrigo-foto-frazer-harrisongetty-images.jpg",
      publishedAt: "2024-11-05T13:02:44Z",
      content:
        "Grimes concorda com Olivia Rodrigo. Em entrevista à Netflix publicada na última sexta-feira, 1º, a Rodrigo explicou o significado das diversas camisetas que usou durante shows da Guts World Tour, inc… [+1593 chars]",
    },
    {
      source: {
        id: null,
        name: "Europapress.es",
      },
      author: null,
      title:
        "Las ventas de coches en Alemania se recuperan un 6% en octubre, hasta las 231.992 unidades",
      description:
        "Las matriculaciones de turismos y todoterreno en Alemania durante el mes de octubre llegaron a las 231.992 unidades, un 6% más que en el mismo mes del año pasado, según los datos de la Oficina Federal de Vehículos Motorizados (KBA, por sus siglas en alemán) p…",
      url: "https://www.europapress.es/motor/sector-00644/noticia-ventas-coche-alemania-recuperan-octubre-231992-unidades-20241105151536.html",
      urlToImage:
        "https://img.europapress.es/fotoweb/fotonoticia_20241105151536_1200.jpg",
      publishedAt: "2024-11-05T14:15:36Z",
      content:
        "Volkswagen se mantiene como la marca con más ventas en el país y crecen sus matriculaciones un 26,2% pese a su crisis interna\r\n MADRID, 5 Nov. (EUROPA PRESS) - \r\n Las matriculaciones de turismos y to… [+2642 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Bruce Brown",
      title: "Zero Motorcycles expands line with lighter, lower-cost models",
      description:
        'Zero plans to roll out six new sub-$10,000 models during the next two years in an "All Access" strategy to meet the needs of additional riders.',
      url: "https://www.digitaltrends.com/cars/zero-motorcycle-reveals-two-lightweight-off-road-electric-motorcycles/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/11/A-rider-sitting-on-a-Zero-XE-watching-another-rider-doing-donuts-in-the-dirt-on-a-Zero-XB.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-11-05T14:15:32Z",
      content:
        "Zero Motorcycles announced its 2025 lineup with two new lightweight electric on- and off-road models that expand its reach to the e-bike and light e-motorcycle markets. Zero’s current electric commut… [+5488 chars]",
    },
  ];
  constructor() {
    super();
    console.log("NewsItem key={element.url} Constructor");
    this.state = { articles: this.articles, loading: false, error: null };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0f07714411e243b3a4e523cb089eb470";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  }

  render() {
    return (
      <div className="container my-3">
        <h1 id="heading" align="center">
          NewsUp - Top Headlines
        </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <>
                {/* Row 1 */}
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
