const HomePage = () => {
  return (
    <div className="fb-wrapper">
      <div className="main">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>👤 Khai Dinh</li>
            <li>🧠 Nhóm</li>
            <li>📺 Watch</li>
            <li>🛒 Marketplace</li>
            <li>🧰 Công cụ</li>
          </ul>
        </aside>
        {/* Feed */}
        <main className="feed">
          {/* Create post */}
          <div className="create-post">
            <input type="text" placeholder="Bạn đang nghĩ gì?" />
            <div className="actions">
              <button>📹 Video</button>
              <button>🖼 Ảnh/Video</button>
              <button>🎬 Thước phim</button>
            </div>
          </div>
          {/* Post */}
          <div className="post">
            <div className="post__header">
              <div className="avatar">
                <img
                  src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
                  alt="Avatar"
                />
              </div>
              <div className="info">
                <div className="name">
                  <span className="bold">James Code Lab</span>
                  <span className="follow">Theo dõi</span>
                </div>
                <div className="meta">4 ngày · 🌐</div>
              </div>
            </div>

            <div className="post__content">
              <div className="post__text">
                Đồng cung Tiệc Cưới Sự Kiện xe hoa ta xi...{" "}
              </div>{" "}
              <div className="post__image">
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index: number) => ( */}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520615/dgkrgi3ruibmxxnabazj.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751519975/rjfqj6so72nnuvbuf4bv.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751519662/nc3u6ufeu9wqnn404ukp.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751519662/nc3u6ufeu9wqnn404ukp.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
                    //   alt={`ảnh ${index + 1}`}
                  />
                </div>
                {/* ))}{" "} */}
              </div>
              {/* <img
                src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
                alt="ảnh bài viết"
              /> */}
            </div>
          </div>
        </main>
        {/* Rightbar */}
        <aside className="rightbar">
          <div className="sponsored">
            <h4>Được tài trợ</h4>
            <img src="https://via.placeholder.com/200x100" />
          </div>
          <div className="birthdays">
            <h4>Sinh nhật</h4>
            <p>🎁 Hôm nay là sinh nhật của Phúc Sadd và 6 người khác.</p>
          </div>
          <div className="contacts">
            <h4>Người liên hệ</h4>
            <ul>
              <li>Meta AI</li>
              <li>Thu Ngaa</li>
              <li>Viet Anh</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
