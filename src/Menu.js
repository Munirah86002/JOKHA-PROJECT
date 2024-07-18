import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { itemData } from './itemData';


export default function Menu() {
   
  return (
    <>
     <ImageList sx={{ width: 600, height: 400 ,marginTop:5,marginBottom:5,marginRight:10,marginLeft:35}}>
      {itemData.map((item) => (
        <ImageListItem  key={item.img}>
          <img
          src='img1.jpg'
          />
          <ImageListItemBar
          

            subtitle={
            <span>Beach Boy Name: {item.name}</span>}
            availableTime={item.availableTime}
            contact={item.contact}
            mnemba={item.mnemba}
            prison={item.prison}
            nakupenda={item.nakupenda}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  



    </>
  );
}
