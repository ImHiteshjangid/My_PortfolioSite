window.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
  const items = [...track.children];

  // Clone the items to create a seamless loop
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  // Set track width based on number of items
  const itemWidth = items[0].offsetWidth + 30; // 30px is the gap
  track.style.width = `${track.children.length * itemWidth}px`;
});