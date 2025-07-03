import axios from "axios";
import { useEffect, useState } from "react";
import { UploadService } from "../../../../service/Upload";

const ModalMedia = ({
  setMadia,
}: {
  setMadia: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const datas: any[] = [];
  const [tab, setTab] = useState<boolean>(true);
  const [data, setData] = useState<any[]>(datas);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const UploadImage = async (file: any) => {
    const url = "https://api.cloudinary.com/v1_1/khaidinhh/image/upload";
    const upload_name = "upload-imgage";
    if (!file || file.length === 0) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", upload_name);
    const { data } = await axios.post(url, formData);
    await UploadService.CreateUpload(data);
    setTab(data.url ? true : false);
    setData((prevData) => [...prevData, data]);
  };
  const fetchUploads = async () => {
    const { data } = await UploadService.GetUpload();
    setData(data.data);
    setSelectedImage(null);
  };
  useEffect(() => {
    fetchUploads();
  }, []);
  return (
    <div className="media-overlay">
      <div className="media-modal">
        <div className="media-tabs">
          {" "}
          <button
            onClick={() => setTab(false)}
            className={"title-tab " + (tab ? "" : "active")}
          >
            {" "}
            <h2 className="media-title"> Upload ảnh</h2>
          </button>
          <button
            onClick={() => setTab(true)}
            className={"title-tab " + (tab ? "active" : "")}
          >
            <h2 className="media-title"> Thư viện</h2>
          </button>
          <button className="close-button" onClick={() => setMadia(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        {tab ? (
          <div className="media-library">
            <div className="media-gallery">
              {data?.map((item, index) => (
                <div className="media-item" key={index}>
                  <img
                    src={item.url}
                    alt={`upload-${index}`}
                    className="media-image"
                  />
                </div>
              ))}

              <div className="media-item"></div>
            </div>
          </div>
        ) : (
          <>
            <form className="file-upload-form">
              {!selectedImage && (
                <label className="file-upload-label" htmlFor="file">
                  <div className="file-upload-design">
                    <svg height="1em" viewBox="0 0 640 512">
                      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                    </svg>

                    <span className="browse-button">Tải hình ảnh miễn phí</span>
                  </div>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => UploadImage(e.target.files)}
                  />
                </label>
              )}
              {selectedImage && (
                <img
                  src={String(selectedImage)}
                  alt="preview"
                  className="media-preview"
                />
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalMedia;
