export const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedImage: React.Dispatch<React.SetStateAction<File>>
) => {
  if (!event.target.files) {
    return;
  }
  const imageToLoad = event.target.files[0];
  setSelectedImage(imageToLoad);
};
