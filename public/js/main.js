function initMap() {
  const loc = { lat: 47.9184676, lng: 106.9177016 };
  const map = new google.maps.Map(document.getElementById(`map`), {
    zoom: 14,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}
