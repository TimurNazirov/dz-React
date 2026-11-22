import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="container">
      <Heading>Поиск</Heading>
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Button>Искать</Button>
    </div>
  );
}

export default App;
