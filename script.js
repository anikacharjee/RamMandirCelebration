// Generate random balloons, flowers, and fireworks
function generateBalloonsAndFlowers() {
    const container = document.body;
    const numBalloons = 10;
    const numFlowers = 25;
    const numFireworks = 7;

    // Create initial fireworks
    createFireworks(container);

    for (let i = 0; i < numBalloons; i++) {
      createBalloon(container);
    }

    for (let i = 0; i < numFlowers; i++) {
      createFlower(container);
    }

    // Generate additional random fireworks
    for (let i = 0; i < numFireworks; i++) {
      createRandomFireworks(container);
    }
  }

  // Create a balloon element
  function createBalloon(container) {
    const balloon = document.createElement('span');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    setPositionAndAnimation(balloon);
    container.appendChild(balloon);
  }

  // Create a flower element
  function createFlower(container) {
    const flower = document.createElement('span');
    flower.className = 'flower';
    flower.innerHTML = '🌸';
    setPositionAndAnimation(flower);
    container.appendChild(flower);
  }

  // Create initial fireworks
  function createFireworks(container) {
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    fireworks.innerHTML = '🎆';
    setPositionAndAnimation(fireworks);
    container.appendChild(fireworks);
  }

  // Create additional random fireworks
  function createRandomFireworks(container) {
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    fireworks.innerHTML = '🎆';
    setPositionAndAnimation(fireworks);
    container.appendChild(fireworks);
  }

  // Set random position and animation delay for an element
  function setPositionAndAnimation(element) {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomDelay = Math.random() * 10;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
    element.style.animationDelay = `-${randomDelay}s`;
  }

  // Generate balloons, flowers, and fireworks when the page loads
  generateBalloonsAndFlowers();