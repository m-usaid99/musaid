import React, { useState } from 'react';
import styles from '../../styles/ExpenseMate.module.css';

const screenshots = [
  { id: 1, thumbnail: 'https://i.imgur.com/cRYSdJ9m.png', fullImage: 'https://i.imgur.com/cRYSdJ9.png', alt: 'Registration page' },
  { id: 2, thumbnail: 'https://i.imgur.com/BJQmpxym.png', fullImage: 'https://i.imgur.com/BJQmpxy.png', alt: 'Login Page' },
  { id: 3, thumbnail: 'https://i.imgur.com/hpojhY4m.png', fullImage: 'https://i.imgur.com/hpojhY4.png', alt: 'Dashboard' },
  { id: 4, thumbnail: 'https://i.imgur.com/q93rwvIm.png', fullImage: 'https://i.imgur.com/q93rwvI.png', alt: 'Expense Page' },
  { id: 5, thumbnail: 'https://i.imgur.com/VjvbAyOm.png', fullImage: 'https://i.imgur.com/VjvbAyO.png', alt: 'Income Page' },
  { id: 6, thumbnail: 'https://i.imgur.com/3M3bE86m.png', fullImage: 'https://i.imgur.com/3M3bE86.png', alt: 'Dark Dashboard' },
  { id: 7, thumbnail: 'https://i.imgur.com/I14NefKm.png', fullImage: 'https://i.imgur.com/I14NefK.png', alt: 'Dark Password' },
];

const ScreenshotGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <div className={styles.screenshotGallery}>
        {screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.thumbnail}
            alt={screenshot.alt}
            className={styles.thumbnail}
            onClick={() => setSelectedImage(screenshot.fullImage)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size" className={styles.fullImage} />
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;

