const getCoordinates = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length === 0) {
            throw new Error("No se encontraron esas coordenadas");
        }
        const { lat, lon } = data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
    } catch (error) {
        console.log("Error al obtener las coordenadas", error);
        return null;
    }
};

const getKilometers = (coordinates) => {
    const lat1 = 6.241376593387934;
    const lon1 = -75.56920020556065;
    const R = 6371; // Radio de la Tierra en km
    const toRadians = (degree) => degree * (Math.PI / 180);

    const lat2 = coordinates.lat;
    const lon2 = coordinates.lon;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c;
    return distance; // Devuelve la distancia en kilómetros
};

export const calculateDistance = async (address) => {
    const coordinates = await getCoordinates(address);
    if (coordinates) {
        const distance = getKilometers(coordinates);
        return distance
    } else {
        console.log("No se pudo obtener la ubicación de destino.");
    }
};
