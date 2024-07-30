import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css';

export default function Image({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== '') fetchImage(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }
  if (errMsg != null) {
    return <div>Error occurred! {errMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
      {image && image.length > 0 && (
        <img
          key={image[currentSlide].id}
          alt={image[currentSlide].download_url}
          src={image[currentSlide].download_url}
          className="current-image"
        />
      )}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
      <span className="ksk">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={`curre ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
