package movies.labbd;

import java.net.URI;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@SpringBootApplication
public class MovieController {

	public static void main(String[] args) {
		SpringApplication.run(MovieController.class, args);
	}

}

@RestController
@RequestMapping("/movies")
class RestApiDemoController {
	private static final Logger log = LoggerFactory.getLogger(RestApiDemoController.class);

	private List<Movie> movies = new CopyOnWriteArrayList<>();
    private int currentId = 1;

	public RestApiDemoController() {
		log.info("Adding movies");
		movies.addAll(List.of(
				new Movie("Origem", "Sci-Fi"),
				new Movie("O cavaleiro das trevas", "Action"),
				new Movie("Interstellar", "Sci-Fi"),
				new Movie("Dunkirk", "War")
		));
		log.info("Movies: {}", movies);
	}

	@GetMapping
	Iterable<Movie> getMovies() {
		return movies;
	}

	@GetMapping("/{id}")
	ResponseEntity<Movie> getMovieById(@PathVariable int id) {
		for (Movie m : movies) {
			if (m.getId() == id) {
				return ResponseEntity.ok(m);
			}
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	

	@PostMapping
	ResponseEntity<Movie> postMovie(@RequestBody Movie movie) {
		if (movie.getName() == null || movie.getName().isBlank() ||
			movie.getGenre() == null || movie.getGenre().isBlank()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	
		movie.setId(currentId++);
		movies.add(movie);
	
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(movie.getId())
				.toUri();
	
		return ResponseEntity.created(location).body(movie);
	}
	

	@PutMapping("/{id}")
	ResponseEntity<Movie> putMovie(@PathVariable int id, @RequestBody Movie movie) {
		for (Movie m : movies) {
			if (m.getId() == id) {
				movie.setId(id);
				movies.set(movies.indexOf(m), movie);
				return ResponseEntity.ok(movie);
			}
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	

	@DeleteMapping("/{id}")
	ResponseEntity<Void> deleteMovie(@PathVariable int id) {
		boolean removed = movies.removeIf(m -> m.getId() == id);
	
		if (removed) {
			return ResponseEntity.noContent().build(); // Retorna 204 No Content
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Retorna 404
		}
	}
}
