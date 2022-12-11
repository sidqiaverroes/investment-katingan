const PetaPotensi = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full py-16">
      <h1 className="text-birumud ">Peta Potensi</h1>
      <span className="overflow-hidden w-full mapHeight rounded-md max-w-screen-lg">
        <iframe
          src="https://katingan-gis.vercel.app"
          title="Katingan Investment GIS"
          className="w-full h-full"
        ></iframe>
      </span>
    </div>
  );
};

export default PetaPotensi;
