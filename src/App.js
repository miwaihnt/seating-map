import { LatLngBounds,CRS,LatLng } from 'leaflet';
import './App.css';
import { MapContainer, ImageOverlay,Marker,Popup } from 'react-leaflet';

const App = () => {
  
  const handleClic = (e) => {
  const lat = e.LatLng.lat
  const lng = e.LatLng.lng
  console.log('緯度${lat},経度${lng}')
  }

  const browerinnnerHight = window.innerHeight;
  const browerinnnerWidth = window.innerWidth
  
  const mapconteinerStyle = {
    width : browerinnnerWidth,
    height : browerinnnerHight
  };

  
  const centerHight = browerinnnerHight / 2 ;
  const centerWidth = browerinnnerWidth / 2 ;
  const center = new LatLng(centerHight,centerWidth);
  const position = [200,200]

  return (
    <>
      <MapContainer 
        crs={CRS.Simple}
        center={center}
        zoom={0}
        style={mapconteinerStyle}>
        <div className = "imgstyle">
          <ImageOverlay  
          url={"/seatsample.png"} 
          bounds={new LatLngBounds([[0,0], [browerinnnerHight, browerinnnerWidth]])}
          />             
        </div>
        <Marker position={position}>
          <Popup>
              Hello!
          </Popup>
        </Marker>
         
        </MapContainer>  
    </>
    );
}

export default App;
