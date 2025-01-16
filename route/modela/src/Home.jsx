function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">
        Welcome to Our Real Estate Platform
      </h1>
      <p className="mt-4 text-lg">
        Discover your perfect home with our comprehensive listings and expert
        guidance. Whether you're buying, selling, or renting, we're here to
        help.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Featured Properties</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Luxury Villa</h3>
            <p>Location: Beverly Hills</p>
            <p>Price: $4,500,000</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">Cozy Apartment</h3>
            <p>Location: San Francisco</p>
            <p>Price: $850,000</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">Rustic House</h3>
            <p>Location: Aspen, Colorado</p>
            <p>Price: $1,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
