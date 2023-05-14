import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";

const position = [51.505, -0.09];
const Maps = () => {
  const { isLoading, error, data } = useQuery("Data Fetching", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 mt-6">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-screen z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {!data
          ? null
          : data.map((item: any) => (
              <Marker position={[item.countryInfo.lat, item.countryInfo.long]}>
                <Popup>
                  <div className="flex flex-col">
                    <span className="font-bold text-base">{item.country}</span>
                    <span>
                      <b>{item.active}</b>&nbsp;&nbsp; Active Cases
                    </span>
                    <span>
                      <b>{item.recovered}</b>&nbsp;&nbsp; Recovered
                    </span>
                    <span>
                      <b>{item.deaths}</b>&nbsp;&nbsp; Deaths
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
