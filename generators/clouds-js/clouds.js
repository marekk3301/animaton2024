const canvas = document.getElementById('cloudCanvas');
const ctx = canvas.getContext('2d');

let width = parseInt(document.getElementById('width').value);
let height = parseInt(document.getElementById('height').value);
let scale = parseFloat(document.getElementById('scale').value);
let speed = parseFloat(document.getElementById('speed').value);
let frames = 100;
let brightnessMin = parseInt(document.getElementById('brightnessMin').value);
let brightnessMax = parseInt(document.getElementById('brightnessMax').value);

let storm = false;
let lightningActive = false;
let lightningFrame = -1;
let lightningDuration = 2; // Duration of each flash
let lightningIntensity = 200;
let lightningFlashes = 0;
let lightningFlashCount = 0;
let lightningInterval = 0;

const sunnyPresetValues = {
    speed: 0.05,
    brightnessMin: 170,
    brightnessMax: 250,
    storm: false
};

const cloudyPresetValues = {
    speed: 0.07,
    brightnessMin: 130,
    brightnessMax: 230,
    storm: false
};

const stormPresetValues = {
    speed: 0.1,
    brightnessMin: 100,
    brightnessMax: 200,
    storm: true
};

function setPresetValues(presetValues) {
    document.getElementById('speed').value = presetValues.speed;
    document.getElementById('brightnessMin').value = presetValues.brightnessMin;
    document.getElementById('brightnessMax').value = presetValues.brightnessMax;

    speed = presetValues.speed;
    brightnessMin = presetValues.brightnessMin;
    brightnessMax = presetValues.brightnessMax;
    storm = presetValues.storm;
}

canvas.width = width;
canvas.height = height;

let frame = 0;
const noise = new Noise(Math.random());

function generateClouds(frame, width, height, scale, speed, brightnessMin, brightnessMax) {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const isLightning = lightningActive && lightningFrame >= 0 && lightningFrame < lightningDuration;
    let lightningBrightness = 0;

    if (isLightning) {
        lightningBrightness = Math.random() * lightningIntensity; // Calculate once for consistency
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const nx = x / scale + frame * speed;
            const ny = y / scale;
            const noiseValue = noise.perlin2(nx, ny);
            const normalizedValue = (noiseValue + 1) / 2; // Normalize to range [0, 1]
            let brightness = normalizedValue * (brightnessMax - brightnessMin) + brightnessMin;

            if (isLightning && storm) {
                brightness += lightningBrightness;
                brightness = Math.min(brightness, 255); // Cap brightness at 255
            } else {
                const normalBrightness = normalizedValue * (brightnessMax - brightnessMin) + brightnessMin;
                brightness += (normalBrightness - brightness) / 10; // Gradual fade
            }

            const index = (y * width + x) * 4;
            data[index] = brightness;
            data[index + 1] = brightness;
            data[index + 2] = brightness;
            data[index + 3] = 255; // Alpha channel
        }
    }

    if (isLightning) {
        lightningFrame++;
        if (lightningFrame >= lightningDuration) {
            lightningFrame = -1; // Reset lightning frame
            lightningFlashCount++;
            if (lightningFlashCount >= lightningFlashes) {
                lightningActive = false; // End lightning burst
                lightningFlashCount = 0;
                // lightningInterval = Math.floor(Math.random() * 150) + 50; // Random interval between 50-200 frames
            } else {
                lightningFrame = -Math.floor(Math.random() * 10); // Random interval between flashes
            }
        }
    } else if (!lightningActive && Math.random() < 0.05) { // Chance to trigger lightning
        lightningActive = true;
        lightningFlashes = Math.floor(Math.random() * 3) + 1; // Random 1-3 flashes
        lightningFrame = 0; // Start lightning effect
    } else {
        lightningActive = false;
    }

    // console.log("isLightning: " + isLightning);
    // console.log("lightningActive: " + lightningActive);
    // console.log("lightningFrame: " + lightningFrame);
    // console.log(`${lightningFrame} < ${lightningDuration}`);
    // console.log("lightningFlashCount: " + lightningFlashCount);
    // console.log("lightningFlashes: " + lightningFlashes);
    // console.log("---------------------------------------------------");

    return imageData;
}

function animateClouds() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    const imageData = generateClouds(frame, width, height, scale, speed, brightnessMin, brightnessMax);
    ctx.putImageData(imageData, 0, 0);

    frame++; // Increment frame for next animation frame

    requestAnimationFrame(animateClouds); // Request next animation frame
}

// Event listeners for input changes
document.getElementById('width').addEventListener('change', function () {
    width = parseInt(this.value);
    canvas.width = width;
});

document.getElementById('height').addEventListener('change', function () {
    height = parseInt(this.value);
    canvas.height = height;
});

document.getElementById('scale').addEventListener('change', function () {
    scale = parseFloat(this.value);
});

document.getElementById('speed').addEventListener('change', function () {
    speed = parseFloat(this.value);
});

document.getElementById('brightnessMin').addEventListener('change', function () {
    brightnessMin = parseInt(this.value);
});

document.getElementById('brightnessMax').addEventListener('change', function () {
    brightnessMax = parseInt(this.value);
});

document.getElementById('sunnyPreset').addEventListener('click', function () {
    setPresetValues(sunnyPresetValues);
});

document.getElementById('cloudyPreset').addEventListener('click', function () {
    setPresetValues(cloudyPresetValues);
});

document.getElementById('stormPreset').addEventListener('click', function () {
    setPresetValues(stormPresetValues);
}); 

animateClouds(); // Start animation
