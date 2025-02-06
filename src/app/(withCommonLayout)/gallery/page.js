import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Gallery Page",
  description: "This is an image gallery page",
};

const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRbu-2oafwBi2Pqv0DMmdZ5O_4W-hGJVbA&s"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
