import { useState } from "react";
import ReactStars from "react-stars";
import { RotateCcw } from "react-feather";
import { Link } from "react-router-dom";

const RatingPage = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleRatingChange = (newRating) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Rating submitted:", newRating);
    }, 1500);
  };

  const handleStarHover = () => {
    setHoverCount((prevCount) => Math.min(prevCount + 1, 5));
  };

  const handleReset = () => setRating3(0);

  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Rating</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Rating</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          {/* Basic Rater */}
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Basic Rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Show Some <span className="text-danger">❤</span> with rating :
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    color2="#fadb14"
                    value={rating2}
                    onChange={setRating2}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 5 star rater with steps */}
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">5 Star Rater With Steps</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Don't forget to rate the product :
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    color2="#fadb14"
                    value={rating1}
                    onChange={setRating1}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Custom messages */}
          <div className="col-xxl-4 col-xl-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Custom Messages</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Your rating is much appreciated👏 :
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    color2="#fadb14"
                    value={rating5}
                    onChange={setRating5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Readonly */}
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Unlimited Number Of Stars ReadOnly</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  <ReactStars
                    count={10}
                    size={24}
                    value={6}
                    edit={false}
                    color2="#fadb14"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Simulated backend */}
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  5 Star Rater With Custom isBusyText And Simulated Backend
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <ReactStars
                      count={5}
                      size={24}
                      color2="#fadb14"
                      onChange={handleRatingChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hover event */}
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">On Hover Event</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Please give your valuable rating :
                  </p>
                  <div
                    className="d-flex flex-wrap align-items-center"
                    onMouseOver={handleStarHover}
                    style={{ fontSize: "24px", cursor: "pointer" }}
                  >
                    <ReactStars
                      count={5}
                      size={24}
                      value={rating4}
                      color2="#fadb14"
                      onChange={setRating4}
                    />
                    <span className="live-rating badge bg-success-transparent ms-3">
                      {hoverCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reset */}
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Clear/Reset Rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Thank You so much for your support :
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      color2="#fadb14"
                      value={rating3}
                      onChange={setRating3}
                    />
                    <button
                      className="btn btn-icon btn-sm btn-danger-light ms-3"
                      id="rater-reset-button"
                      onClick={handleReset}
                    >
                      <RotateCcw className="feather-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
