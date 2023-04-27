import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    {
      image: "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
      heading: "Heading1",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: "#",
      heading: "Heading2",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading3",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading4",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading5",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading5",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading7",
      paragraph: "Paragraph",
    },
    {
      image: "#",
      heading: "Heading8",
      paragraph: "Paragraph",
    },
  ];

  const [play, setPlay] = useState(true);
  const [img, setImg] = useState(images[0]);
  return (
    <div className="App">
      <div className="main">
        <img src={img.image} alt="This is image" />
        <div className="matter">
          <h1>{img.heading}</h1>
          <p>{img.paragraph}</p>
        </div>
      </div>
      <div className="down-img">
        <div className="down-arrow-img">
          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
          <img src={img.image} />
          <img src={img.image} />
          <img src={img.image} />
          <img src={img.image} />
          <img src={img.image} />
          <i class="fa-solid fa-circle-arrow-right fa-2xl"></i>
        </div>
        <div className="play-button">
          {play ? (
            <i
              onClick={() => setPlay(false)}
              class="fa-sharp fa-solid fa-circle-play fa-2xl"
            ></i>
          ) : (
            <i
              onClick={() => setPlay(true)}
              class="fa-solid fa-circle-pause fa-2xl"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
