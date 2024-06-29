import numpy as np
from PIL import Image
import noise

def generate_clouds(width, height, scale, brightness_min, brightness_max):
    """
    Generate a black and white clouds texture with smooth gradients.

    :param width: Width of the image
    :param height: Height of the image
    :param scale: Scale of the noise (higher value = more zoomed in)
    :param brightness_min: Minimum brightness of the clouds (0 to 255)
    :param brightness_max: Maximum brightness of the clouds (0 to 255)
    :return: NumPy array of the generated clouds
    """
    cloud_array = np.zeros((height, width), dtype=np.float32)

    for y in range(height):
        for x in range(width):
            nx = x / scale
            ny = y / scale
            noise_value = noise.pnoise2(nx, ny)
            cloud_array[y, x] = noise_value

    cloud_array = (cloud_array - cloud_array.min()) / (cloud_array.max() - cloud_array.min())
    cloud_array = cloud_array * (brightness_max - brightness_min) + brightness_min
    cloud_array = cloud_array.astype(np.uint8)

    return cloud_array

def animate_clouds(width, height, scale, speed, frames, direction, brightness_min, brightness_max):
    """
    Generate an animated sequence of clouds moving.

    :param width: Width of the image
    :param height: Height of the image
    :param scale: Scale of the noise
    :param speed: Movement speed of the clouds
    :param frames: Number of frames in the animation
    :param direction: Direction of the clouds movement as (dx, dy)
    :param brightness_min: Minimum brightness of the clouds (0 to 255)
    :param brightness_max: Maximum brightness of the clouds (0 to 255)
    :return: List of PIL Images for the animation
    """
    images = []
    dx, dy = direction
    for frame in range(frames):
        cloud_array = np.zeros((height, width), dtype=np.float32)
        for y in range(height):
            for x in range(width):
                nx = (x + frame * speed * dx) / scale
                ny = (y + frame * speed * dy) / scale
                noise_value = noise.pnoise2(nx, ny)
                cloud_array[y, x] = noise_value

        cloud_array = (cloud_array - cloud_array.min()) / (cloud_array.max() - cloud_array.min())
        cloud_array = cloud_array * (brightness_max - brightness_min) + brightness_min
        cloud_array = cloud_array.astype(np.uint8)
        cloud_image = Image.fromarray(cloud_array, mode='L')
        images.append(cloud_image)

    return images

def images_to_gif(images, output_path, duration=100, loop=0):
    """
    Combine a list of images into an animated GIF.

    :param images: List of PIL Image objects
    :param output_path: Path to save the output GIF
    :param duration: Duration of each frame in milliseconds
    :param loop: Number of times the GIF should loop (0 for infinite)
    """
    images[0].save(output_path, save_all=True, append_images=images[1:], duration=duration, loop=loop)

# Example usage
# Parameters
width, height = 256, 256
scale = 50.0
speed = 0.2
frames = 50
direction = (-3, 1)  # Moving right
brightness_min = 100
brightness_max = 200

# Generate the animated sequence
animated_clouds = animate_clouds(width, height, scale, speed, frames, direction, brightness_min, brightness_max)

# Combine the images into a GIF
images_to_gif(animated_clouds, 'clouds_animation.gif')

# Show the first frame of the animated clouds
# animated_clouds[0].show()