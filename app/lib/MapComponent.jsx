const MapWithMarker = ({width,radius}) => {
  return (
    <>
      {/* map */}
      <div className="w-full mx-auto relative">
        <div
          style={{ maxWidth: `${width}` }}
          className="mx-auto"
        >
          <iframe
            style={{ borderRadius: `${radius}` }}
            width="100%"
            height="450"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4203%20%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%20%D8%A8%D9%86%20%D9%86%D8%BA%D9%85%D9%8A%D8%B4%D8%8C%20%D8%A7%D9%84%D8%B9%D9%82%D9%8A%D9%82%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%2013515%D8%8C%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9+(login)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
          </iframe>
        </div>
      </div>
    </>
  );
};

export default MapWithMarker;
