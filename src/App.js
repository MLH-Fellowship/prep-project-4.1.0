import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [city, setCity] = useState('New York City');
	const [results, setResults] = useState(null);
	const autocompleteURL =
		'https://autocomplete.search.hereapi.com/v1/autocomplete?';

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=metric' +
				'&appid=' +
				process.env.REACT_APP_APIKEY
		)
			.then(res => res.json())
			.then(
				result => {
					if (result['cod'] !== 200) {
						setIsLoaded(false);
					} else {
						setIsLoaded(true);
						setResults(result);
					}
				},
				error => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, [city]);

	const handleCity = currentQuery => {
		setCity(currentQuery);
		if (currentQuery !== '') {
			// Calling the autocomplete API with max 4 results, looking for cities and using the API Key
			var query = `q=${currentQuery}&limit=4&types=city&apiKey=${process.env.REACT_APP_HEREAPI}`;
			fetch(`${autocompleteURL}${query}`)
				.then(res => res.json())
				.then(
					result => {
						// Here are the 0 - 4 results from the API given any input
						var cities = result.items.map(item => item.title);
						console.log(cities);
					},
					error => {
						setError(error);
					}
				);
		}
	};
	if (error) {
		return <div>Error: {error.message}</div>;
	} else {
		return (
			<>
				<Header city={city} onChangeCity={handleCity} />
				<div className="Results">
					{!isLoaded && <h2>Loading...</h2>}
					{console.log(results)}
					{isLoaded && results && <Card results={results} />}
				</div>
			</>
		);
	}
}

export default App;
