from PIL import Image
import os
import shutil

def resize_and_copy_images(input_folder: str, output_folder: str, max_size=1000) -> None:
    """
    If the image exceeds the dimensions convert it to the smaller, otherwise just copy it
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        print(f"Processing {filename}...")
        if filename == "output":
            continue
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            with Image.open(input_path) as img:
                width, height = img.size

                if max(width, height) > max_size:
                    aspect_ratio = width / height
                    new_width = int(max_size * aspect_ratio)
                    new_height = int(max_size / aspect_ratio)
                    img.thumbnail((new_width, new_height))
                
                img.save(output_path)

        else:
            shutil.copyfile(input_path, output_path)

if __name__ == "__main__":
    input_folder = '../src/assets/images/projects/diy'
    output_folder = f'{input_folder}/output'

    resize_and_copy_images(input_folder, output_folder)
