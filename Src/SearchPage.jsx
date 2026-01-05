import React from 'react';
export { default } from './pages/SearchPage';

const propertiesData = JSON.parse(propertiesDataRaw);

export default function SearchPage() {
  const allProperties = propertiesData.properties;
  const navigate = useNavigate();
  const { favourites, addFavourite, removeFavourite, clearFavourites } = useContext(FavouritesContext);
  
  const [criteria, setCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    maxBeds: '',
    afterDate: '',
    betweenStart: '',
    betweenEnd: '',
    area: ''
  });

  const [results, setResults] = useState(allProperties);

  // Filtering now happens only when the user clicks Search
  const handleSearch = () => {
    const filtered = allProperties.filter(property => {
      if (criteria.type !== 'any' && property.type.toLowerCase() !== criteria.type.toLowerCase()) {
        return false;
      }

      if (criteria.minPrice && property.price < Number(criteria.minPrice)) {
        return false;
      }

      if (criteria.maxPrice && property.price > Number(criteria.maxPrice)) {
        return false;
      }

      if (criteria.minBeds && property.bedrooms < Number(criteria.minBeds)) {
        return false;
      }

      if (criteria.maxBeds && property.bedrooms > Number(criteria.maxBeds)) {
        return false;
      }

      if (criteria.area && !property.area.toLowerCase().includes(criteria.area.toLowerCase())) {
        return false;
      }

      const propDate = new Date(property.dateAdded);
      
      if (criteria.afterDate) {
        const afterDate = new Date(criteria.afterDate);
        if (propDate <= afterDate) return false;
      }

      if (criteria.betweenStart && criteria.betweenEnd) {
        const startDate = new Date(criteria.betweenStart);
        const endDate = new Date(criteria.betweenEnd);
        if (propDate < startDate || propDate > endDate) return false;
      }

      return true;
    });

    setResults(filtered);
  };

  const handleReset = () => {
    setCriteria({
      type: 'any',
      minPrice: '',
      maxPrice: '',
      minBeds: '',
      maxBeds: '',
      afterDate: '',
      betweenStart: '',
      betweenEnd: '',
      area: ''
    });
    setResults(allProperties);
  };

  // when rendering the favourites panel we pass full property objects down there internally

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    addFavourite(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <SearchForm criteria={criteria} setCriteria={setCriteria} onSearch={handleSearch} onReset={handleReset} />
      </aside>

      <main className="content">
        <Results 
          results={results} 
          onCardClick={handleCardClick}
        />
      </main>

      <aside 
          className="favourites-sidebar"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Favourites />
        </aside>
    </div>
  );
}
