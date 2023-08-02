'use client'
import { Box, Button, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import styles from './Panel.module.css'
import Image from "next/image";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { handleImageChange } from "@/handlers/handleImageChange";
import { handleCategoryChange } from "@/handlers/categoryHandle";
import { handleFormChange } from "@/handlers/formHandler";
import { postProduct } from "@/api/postProduct";
import { IDevice } from "@/interfaces/IDevices";

const Panel = () => {
  const [selectedImage, setSelectedImage] = useState<File>()
  const [imagesUrl, setImagesUrl] = useState<string>()
  const [formData, setFormData] = useState<IDevice | any>({
    name: '',
    price: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    if (selectedImage) {
      setImagesUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage])

  const confirm = async () => {
    const data = {
      ...formData,
      file: selectedImage
    }
    try {
      await postProduct(data)
      setFormData({
        name: '',
        price: '',
        description: '',
        category: ''
      })
    } catch {
      'bad format'
    }

  }


  return (
    <Box
      sx={{
        paddingY: "100px",
        color: "white",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ color: "white", background: "#1d1d1d", padding: "50px", display: "flex", flexDirection: 'column', alignItems: 'center', width: '30%' }}>
        <Typography variant="h4">Add some device</Typography>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setSelectedImage)}
        />
        <label htmlFor="select-image" style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <Button variant="contained" color="primary" component="span" >
            Upload Image
          </Button>
        </label>
        {selectedImage && imagesUrl ? (
          <Box mt={2} textAlign="center">
            <Image src={imagesUrl as any} alt='image' height={200} width={300} />
          </Box>
        ) : <Box mt={2} textAlign="center">  <AddAPhotoIcon sx={{ height: '200px', width: '200px' }} /> </Box>}
        <InputLabel className={styles.label} htmlFor='name'>Name of device</InputLabel>
        <Input id="name" className={styles.input} name={'name'} value={formData.name} onChange={(e) => handleFormChange(e as any, setFormData as any)} fullWidth inputProps={{ sx: { color: "white" } }} />
        <InputLabel className={styles.label} htmlFor='name' >Price in $</InputLabel>
        <Input type="number" className={styles.input} name={'price'} onChange={(e) => handleFormChange(e as any, setFormData as any)} value={formData.price} fullWidth inputProps={{ sx: { color: "white" } }} />
        <InputLabel className={styles.label} id="demo-simple-select-label">Category</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.category}
          label="Category"
          onChange={(e) => handleCategoryChange(e, setFormData as any)}
          sx={{ color: 'white', border: '1px solid white', borderRadius: '20px' }}
        >
          <MenuItem value={"iphones"}>Iphones</MenuItem>
          <MenuItem value={"macbook"}>Macbook</MenuItem>
          <MenuItem value={"airpods"}>AirPods</MenuItem>
          <MenuItem value={"accessory"}>Accessory</MenuItem>
          <MenuItem value={"others"}>Other</MenuItem>
        </Select>
        <InputLabel className={styles.label} htmlFor='name'>Description</InputLabel>
        <Input className={styles.input} onChange={(e) => handleFormChange(e as any, setFormData as any)} value={formData.description} name='description' rows={4} multiline fullWidth inputProps={{ sx: { color: "white" } }} />
        <Button variant="contained" color="error" component="span" fullWidth sx={{ margin: '20px' }} onClick={confirm}>
          Confirm
        </Button>
      </Box>
    </Box>


  );
};

export default Panel;
