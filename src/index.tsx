import React, { useCallback, useMemo, useState } from 'react';

const UrlImageDownloader = ({
  disableCache = true,
  buttonText = 'Download',
  imageUrl = 'https://i.postimg.cc/9MFvz25j/movingtogether-primary-804744d5605a360dc6a2faca9183c51f.jpg'
}) => {
  const onButtonClick = useCallback((e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    if (!imageUrl.length) {
      console.log('Please add an image url');
      return;
    }

    fetch(e.target.href + disableCache ? '' : `?dummy=${Math.floor(Date.now())}`, {
      method: 'GET',
      headers: {}
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            imageUrl.substr(imageUrl.lastIndexOf('/') + 1)
          );
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return useMemo(
    () => (
      <div className="container" >
        <img width="100%" src={imageUrl} alt="area" />
        <a href={imageUrl} download onClick={(e) => onButtonClick(e)}>
          {buttonText}
        </a>
      </div>
    ),
    []
  );
};

export default UrlImageDownloader;
