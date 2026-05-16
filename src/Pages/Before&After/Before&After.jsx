import React from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const BeforeAfter = () => {

    const Exemples = [
        {
            title: "Dépigmentation Gingivale au Laser",
            imageBefore: "/path/to/before-image.jpg",
            imageAfter: "/path/to/after-image.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        
    ] 


  return (
    <>

    <ImageSlider tile = "Dépigmentation Gingivale au Laser"
                imageBefore = {"/path/to/before-image.jpg"}
                imageAfter = {"/path/to/after-image.jpg"} 
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
    </>
  )
}

export default BeforeAfter