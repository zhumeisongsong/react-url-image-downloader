import React, { useCallback, useMemo, FC } from 'react';
import './index.css';

type Props = {
  disableCache?: boolean;
  buttonText?: string;
  imageUrl: string;
};

const UrlImageDownloader: FC<Props> = ({
  disableCache = true,
  buttonText = 'Download',
  imageUrl = ''
}: Props) => {
  const onButtonClick = useCallback((e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    if (!imageUrl.length) {
      console.log('Please add an image url');
      return;
    }
    const fetchUrl = `${e.target.href}${
      disableCache ? `?dummy=${Math.floor(Date.now())}` : ''
    }`;

    fetch(fetchUrl, {
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
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, []);

  return useMemo(
    () => (
      <React.StrictMode>
        <div className="container">
          <img src={imageUrl} alt="area" />
          <a href={imageUrl} download onClick={(e) => onButtonClick(e)}>
            {buttonText}
          </a>
        </div>
      </React.StrictMode>
    ),
    [imageUrl, buttonText]
  );
};

export default UrlImageDownloader;
