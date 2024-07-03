const weatherData = [
    {
      "id": "1",
      "windspeed": 11.2,
      "winddir": 80.9,
      "cloudcover": 25.7,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "2",
      "windspeed": 21.9,
      "winddir": 103.3,
      "cloudcover": 32.8,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "3",
      "windspeed": 15.7,
      "winddir": 94.1,
      "cloudcover": 55.1,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "4",
      "windspeed": 13.7,
      "winddir": 352.2,
      "cloudcover": 73.5,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "5",
      "windspeed": 22.2,
      "winddir": 60.5,
      "cloudcover": 77.6,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 1
    },
    {
      "id": "6",
      "windspeed": 16,
      "winddir": 286.9,
      "cloudcover": 76.6,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 1
    },
    {
      "id": "7",
      "windspeed": 25.4,
      "winddir": 16.7,
      "cloudcover": 44.7,
      "brightnessMin": 40,
      "brightnessMax": 215,
      "storm": 1
    },
    {
      "id": "8",
      "windspeed": 16.4,
      "winddir": 25.9,
      "cloudcover": 34.7,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "9",
      "windspeed": 14.3,
      "winddir": 281.8,
      "cloudcover": 60.9,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "10",
      "windspeed": 17.2,
      "winddir": 299.9,
      "cloudcover": 96.9,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "11",
      "windspeed": 17.4,
      "winddir": 30.7,
      "cloudcover": 63.5,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "12",
      "windspeed": 15.5,
      "winddir": 18.9,
      "cloudcover": 15,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "13",
      "windspeed": 13.8,
      "winddir": 46.3,
      "cloudcover": 17.6,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "14",
      "windspeed": 16.2,
      "winddir": 55.4,
      "cloudcover": 16.7,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "15",
      "windspeed": 23.1,
      "winddir": 111.5,
      "cloudcover": 26.2,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "16",
      "windspeed": 29.4,
      "winddir": 111.3,
      "cloudcover": 12.3,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "17",
      "windspeed": 25.2,
      "winddir": 101,
      "cloudcover": 3.5,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "18",
      "windspeed": 20.1,
      "winddir": 89.4,
      "cloudcover": 12.3,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "19",
      "windspeed": 13.7,
      "winddir": 119.1,
      "cloudcover": 51.8,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "20",
      "windspeed": 13.9,
      "winddir": 359.2,
      "cloudcover": 78.7,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "21",
      "windspeed": 21.3,
      "winddir": 33.2,
      "cloudcover": 27.4,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "22",
      "windspeed": 20.2,
      "winddir": 63.9,
      "cloudcover": 15.6,
      "brightnessMin": 160,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "23",
      "windspeed": 24.9,
      "winddir": 120.9,
      "cloudcover": 64.1,
      "brightnessMin": 0,
      "brightnessMax": 215,
      "storm": 1
    },
    {
      "id": "24",
      "windspeed": 16.1,
      "winddir": 359.5,
      "cloudcover": 68.9,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "25",
      "windspeed": 14.3,
      "winddir": 97.3,
      "cloudcover": 66.7,
      "brightnessMin": 130,
      "brightnessMax": 215,
      "storm": 0
    },
    {
      "id": "26",
      "windspeed": 22.8,
      "winddir": 101,
      "cloudcover": 70.6,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "27",
      "windspeed": 24,
      "winddir": 134.2,
      "cloudcover": 41.6,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "28",
      "windspeed": 24.7,
      "winddir": 132.2,
      "cloudcover": 31.4,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "29",
      "windspeed": 15.8,
      "winddir": 19,
      "cloudcover": 68.9,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "30",
      "windspeed": 21,
      "winddir": 64.4,
      "cloudcover": 63,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    },
    {
      "id": "31",
      "windspeed": 15.6,
      "winddir": 67.7,
      "cloudcover": 58.5,
      "brightnessMin": 60,
      "brightnessMax": 160,
      "storm": 0
    }
];


const canvas = document.getElementById('cloudCanvas');
const ctx = canvas.getContext('2d');

let width = 2324;
let height = 2257;
let scale = 200;
let speed = 0.05;
let frames = 100;
let brightnessMin = 0;
let brightnessMax = 255;

let storm = 0;
let lightningActive = false;
let lightningFrame = -1;
let lightningDuration = 2; // Duration of each flash
let lightningIntensity = 200;
let lightningFlashes = 0;
let lightningFlashCount = 0;
let lightningInterval = 0;

let weatherSpeed = 75;

// const sunnyPresetValues = {
//     speed: 0.05,
//     brightnessMin: 170,
//     brightnessMax: 250,
//     storm: false
// };

// const cloudyPresetValues = {
//     speed: 0.07,
//     brightnessMin: 130,
//     brightnessMax: 230,
//     storm: false
// };

// const stormPresetValues = {
//     speed: 0.1,
//     brightnessMin: 100,
//     brightnessMax: 200,
//     storm: true
// };

// function setPresetValues(presetValues) {
//     document.getElementById('speed').value = presetValues.speed;
//     document.getElementById('brightnessMin').value = presetValues.brightnessMin;
//     document.getElementById('brightnessMax').value = presetValues.brightnessMax;

//     speed = presetValues.speed;
//     brightnessMin = presetValues.brightnessMin;
//     brightnessMax = presetValues.brightnessMax;
//     storm = presetValues.storm;
// }

// const weatherData = [
//     ["1", 11.2, 80.9, 25.7, 200, 255, 0],
//     ["2", 21.9, 103.3, 32.8, 170, 255, 0],
//     ["3", 15.7, 94.1, 55.1, 170, 255, 0],
//     ["4", 13.7, 352.2, 73.5, 170, 255, 0],
//     ["5", 22.2, 60.5, 77.6, 100, 200, 1],
//     ["6", 16, 286.9, 76.6, 100, 200, 0],
//     ["7", 25.4, 16.7, 44.7, 0, 255, 0],
//     ["8", 16.4, 25.9, 34.7, 170, 255, 0],
//     ["9", 14.3, 281.8, 60.9, 170, 255, 0],
//     ["10", 17.2, 299.9, 96.9, 100, 200, 0],
//     ["11", 17.4, 30.7, 63.5, 100, 200, 0],
//     ["12", 15.5, 18.9, 15, 200, 255, 0],
//     ["13", 13.8, 46.3, 17.6, 200, 255, 0],
//     ["14", 16.2, 55.4, 16.7, 200, 255, 0],
//     ["15", 23.1, 111.5, 26.2, 170, 255, 0],
//     ["16", 29.4, 111.3, 12.3, 200, 255, 0],
//     ["17", 25.2, 101, 3.5, 200, 255, 0],
//     ["18", 20.1, 89.4, 12.3, 200, 255, 0],
//     ["19", 13.7, 119.1, 51.8, 100, 200, 0],
//     ["20", 13.9, 359.2, 78.7, 100, 200, 0],
//     ["21", 21.3, 33.2, 27.4, 100, 200, 0],
//     ["22", 20.2, 63.9, 15.6, 200, 255, 0],
//     ["23", 24.9, 120.9, 64.1, 0, 255, 1],
//     ["24", 16.1, 359.5, 68.9, 100, 200, 0],
//     ["25", 14.3, 97.3, 66.7, 170, 255, 0],
//     ["26", 22.8, 101, 70.6, 100, 200, 0],
//     ["27", 24, 134.2, 41.6, 100, 200, 0],
//     ["28", 24.7, 132.2, 31.4, 100, 200, 0],
//     ["29", 15.8, 19, 68.9, 100, 200, 0],
//     ["30", 21, 64.4, 63, 100, 200, 0],
//     ["31", 15.6, 67.7, 58.5, 100, 200, 0]
// ];

canvas.width = width;
canvas.height = height;

let frame = 0;
const noise = new Noise(Math.random());
let i = 0;
let weatherDataIndex = 0;

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
    
    if (i++ % weatherSpeed == 0) {
        speed = weatherData[weatherDataIndex].windspeed / 300;
        brightnessMin = weatherData[weatherDataIndex].brightnessMin;
        brightnessMax = weatherData[weatherDataIndex].brightnessMax;
        storm = weatherData[weatherDataIndex].storm;
        weatherDataIndex++;
    }
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

// document.getElementById('sunnyPreset').addEventListener('click', function () {
//     setPresetValues(sunnyPresetValues);
// });

// document.getElementById('cloudyPreset').addEventListener('click', function () {
//     setPresetValues(cloudyPresetValues);
// });

// document.getElementById('stormPreset').addEventListener('click', function () {
//     setPresetValues(stormPresetValues);
// }); 

animateClouds(); // Start animation
