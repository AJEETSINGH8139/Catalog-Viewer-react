import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    {
      pic: "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
      heading: "Heading1",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      pic: "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?b=1&s=170667a&w=0&k=20&c=MBaQEp6lxIWgZV0eFqQ8d2_zDbYuFk5LEFBawDinLhw=",
      heading: "Heading2",
      paragraph:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      pic: "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
      heading: "Heading3",
      paragraph:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
    },
    {
      pic: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
      heading: "Heading4",
      paragraph:
        "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      pic: "https://cdn.climatechangenews.com/files/2020/03/24124320/nature-based-solutions.jpg",
      heading: "Heading5",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      pic: "https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography.jpg",
      heading: "Heading6",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      pic: "https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg",
      heading: "Heading7",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      pic: "https://gardeningtips.in/wp-content/uploads/2022/08/Secret-Power-of-Nature1.jpg",
      heading: "Heading8",
      paragraph:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    },
  ];

  const [play, setPlay] = useState(false);

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(2);
  const [index4, setIndex4] = useState(3);
  const [index5, setIndex5] = useState(4);
  const [index, setIndex] = useState(index3);

  let imageslide = 0;

  if (play === true) {
    imageslide = setInterval(handleRight, 3000);
    // imageslide();
  }

  if (play === false) {
    clearInterval(imageslide);
  }

  function handleRight() {
    if (images.length <= index1 + 1) {
      setIndex1(0);
    } else {
      setIndex1(index1 + 1);
    }
    if (images.length <= index1 + 1) {
      setIndex2(0);
    } else {
      setIndex2(index1 + 1);
    }
    if (images.length <= index2 + 1) {
      setIndex3(0);
    } else {
      setIndex3(index2 + 1);
    }
    if (images.length <= index3 + 1) {
      setIndex4(0);
    } else {
      setIndex4(index3 + 1);
    }
    if (images.length <= index4 + 1) {
      setIndex5(0);
    } else {
      setIndex5(index4 + 1);
    }
    setIndex(index3);
  }
  function handleLeft() {
    // setIndex(index - 1);
  }
  return (
    <div className="App">
      <div className="main">
        <img src={images[index].pic} alt="This is pic" />
        <div className="matter">
          <h1>{images[index].heading}</h1>
          <p>{images[index].paragraph}</p>
        </div>
      </div>
      <div className="down-img">
        <div className="down-arrow-img">
          <i
            className="fa-solid fa-circle-arrow-left fa-2xl"
            onClick={handleLeft}
          ></i>
          <img
            src={images[index1].pic}
            alt="This is pic"
            onClick={() => setIndex(index1)}
          />
          <img
            src={images[index2].pic}
            alt="This is pic"
            onClick={() => setIndex(index2)}
          />
          <img
            src={images[index3].pic}
            alt="This is pic"
            onClick={() => setIndex(index3)}
          />
          <img
            src={images[index4].pic}
            alt="This is pic"
            onClick={() => setIndex(index4)}
          />
          <img
            src={images[index5].pic}
            alt="This is pic"
            onClick={() => setIndex(index5)}
          />
          <i
            className="fa-solid fa-circle-arrow-right fa-2xl"
            onClick={handleRight}
          ></i>
        </div>
        <div className="play-button">
          {!play ? (
            <i
              onClick={() => setPlay(true)}
              className="fa-sharp fa-solid fa-circle-play fa-2xl"
            ></i>
          ) : (
            <i
              onClick={() => setPlay(false)}
              className="fa-solid fa-circle-pause fa-2xl"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
