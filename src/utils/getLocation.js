export const getLocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported");
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      () => reject("Location permission denied")
    );
  });
