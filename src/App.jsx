import './App.scss';
import { Card } from './components';
import movies from './data.json'

function App() {
  return (
    <main>
        {movies.map(movie => (
          <Card key={`movie-${movie.id}`} classes={['movies-container']}>
            <Card.Image src={movie.image} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <Card.Button>{movie.ctaText}</Card.Button>
            </Card.Body>
          </Card>
        ))}
    </main>
  );
}

export default App;
