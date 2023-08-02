export const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedImage: any,
  setFormData: React.Dispatch<React.SetStateAction<any>>,

  selectedImage: any
) => {
  if (!event.target.files) {
    return;
  }
  const imageToLoad = event.target.files[0];
  setSelectedImage(imageToLoad);
  setFormData((prev: any) => ({
    ...prev,
    image: selectedImage,
  }));
};
