import  { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Calendar } from "primereact/calendar";
import "bootstrap-daterangepicker/daterangepicker.css";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminDashboardModal from "./adminDashboardModal";

const AdminDashboard = () => {
  const routes = all_routes;
  const [date, setDate] = useState(null);
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-next"
        style={{ ...style, display: "flex", top: "30%", right: "30%" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right" style={{ color: "#677788" }}></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-prev"
        style={{ ...style, display: "flex", top: "30%", left: "30%" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left" style={{ color: "#677788" }}></i>
      </div>
    );
  }
  const settings = {
    dots: false,
    autoplay: false,
    arrows: false,
    slidesToShow: 2,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const student = {
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const teacher = {
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [studentDonutChart] = useState({
    chart: {
      height: 218,
      width: 218,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    series: [3610, 44],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180,
          },
        },
      },
    ],
  });
  const [teacherDonutChart] = useState({
    chart: {
      height: 218,
      width: 218,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    series: [346, 54],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180,
          },
        },
      },
    ],
  });
  const [staffDonutChart] = useState({
    chart: {
      height: 218,
      width: 218,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    series: [620, 80],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180,
          },
        },
      },
    ],
  });
  const [classDonutChart] = useState({
    chart: {
      height: 218,
      width: 218,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    labels: ["Good", "Average", "Below Average"],
    legend: { show: false },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        offsetX: -15,
      },
    },
    grid: {
      padding: {
        left: -8,
      },
    },
    colors: ["#3D5EE1", "#EAB300", "#E82646"],
    series: [45, 11, 2],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180,
          },
        },
      },
    ],
  });
  const [feesBar] = useState({
    chart: {
      height: 275,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
  },
  legend: {
    show: true,
     horizontalAlign: 'left',
     position: 'top',
     fontSize: '14px',
     labels: {
      colors: '#5D6369',
     }
  },
  plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: '50%',
          endingShape: 'rounded'
      },
  },
  colors: ['#3D5EE1', '#E9EDF4'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  grid: {
    padding: {
      left: -8,
    },
  },
  series: [{
      name: 'Collected Fee',
      data: [30, 40,  38, 40, 38, 30, 35, 38, 40]
  }, {
      name: 'Total Fee',
      data: [45, 50, 48, 50, 48, 40, 40, 50, 55]
  }],
  xaxis: {
      categories: ['Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'uQ1: 2023l', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023'],
  },
  yaxis: {
    tickAmount: 3,
    labels: {
      offsetX: -15
    },
  },
  fill: {
      opacity: 1

  },
  tooltip: {
      y: {
          formatter: function (val) {
              return "$ " + val + " thousands"
          }
      }
  }
  })
  const [totalEarningArea] = useState({
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
  },
  colors: ['#3D5EE1'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'straight'
  },
  series: [{
      name: 'Earnings',
      data: [50, 55, 40, 50, 45, 55, 50]
  }]
  })
  const [totalExpenseArea] = useState({
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
  },
  colors: ['#E82646'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'straight'
  },
  series: [{
      name: 'Expense',
      data: [40, 30, 60, 55, 50, 55, 40]
  }]
  })



  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
            <>
              {/* Page Header */}
              <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                <div className="my-auto mb-2">
                  <h3 className="page-title mb-1">Admin Dashboard</h3>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to={routes.adminDashboard}>Dashboard</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Admin Dashboard
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                  <div className="mb-2">
                    <Link
                      to={routes.staff}
                      className="btn btn-primary d-flex align-items-center me-3"
                    >
                      <i className="ti ti-square-rounded-plus me-2" />
                      Add New 
                    </Link>
                  </div>
                  {/* <div className="mb-2">
                    <Link
                      to={routes.collectFees}
                      className="btn btn-light d-flex align-items-center"
                    >
                      Amount Details
                    </Link>
                  </div> */}
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div className="alert-message">
                    <div
                      className="alert alert-success rounded-pill d-flex align-items-center justify-content-between border-success mb-4"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-1 avatar avatar-sm flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-27.jpg"
                            alt="Img"
                            className="img-fluid rounded-circle"
                          />
                        </span>
                        <p>
                          Loreum Ispum III,Loreum Ispum Loreum Ispum{" "}
                          <strong className="mx-1">“Loreum Ispum-1”</strong>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-close p-0"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      >
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="card bg-dark">
                    <div className="overlay-img">
                      <ImageWithBasePath
                        src="assets/img/bg/shape-04.png"
                        alt="img"
                        className="img-fluid shape-01"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/shape-01.png"
                        alt="img"
                        className="img-fluid shape-02"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/shape-02.png"
                        alt="img"
                        className="img-fluid shape-03"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/shape-03.png"
                        alt="img"
                        className="img-fluid shape-04"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
                        <div className="mb-3 mb-xl-0">
                          <div className="d-flex align-items-center flex-wrap mb-2">
                            <h1 className="text-white me-2">
                              Welcome Back to IR Document Management System 
                            </h1>
                            <Link
                              to={routes.profile}
                              className="avatar avatar-sm img-rounded bg-gray-800 dark-hover"
                            >
                              <i className="ti ti-edit text-white" />
                            </Link>
                          </div>
                          <p className="text-white">Have a Good day at work</p>
                        </div>
                        <p className="text-white custom-text-white">
                          <i className="ti ti-refresh me-1" />
                          Updated Recently on 15 Jun 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /Dashboard Content */}
                </div>
              </div>

               <div className="row">
                {/* Fees Collection */}
                <div className="col-xxl-8 col-xl-6 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header  d-flex align-items-center justify-content-between">
                      <h4 className="card-title">Data Collection</h4>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="bg-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-calendar  me-2" />
                          Last 8 Quater
                        </Link>
                        <ul className="dropdown-menu mt-2 p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Year
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last 12 Quater
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last 16 Quater
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <ReactApexChart
                      id="fees-chart"
                      options={feesBar}
                      series={feesBar.series}
                      type="bar"
                      height={270}
                    />
                    </div>
                  </div>
                </div>
                {/* /Fees Collection */}
                {/* Leave Requests */}
                <div className="col-xxl-4 col-xl-6 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header  d-flex align-items-center justify-content-between">
                      <h4 className="card-title">Requests</h4>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="bg-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-calendar-due me-1" />
                          Today
                        </Link>
                        <ul className="dropdown-menu mt-2 p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Week
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card mb-2">
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center overflow-hidden me-2">
                              <Link
                                to="#"
                                className="avatar avatar-lg flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-14.jpg"
                                  alt="student"
                                />
                              </Link>
                              <div className="overflow-hidden">
                                <h6 className="mb-1 text-truncate">
                                  <Link to="#">James</Link>
                                  <span className="badge badge-soft-danger ms-1">
                                    Emergency
                                  </span>
                                </h6>
                                <p className="text-truncate">Investor</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-xs p-0 btn btn-success me-1"
                              >
                                <i className="ti ti-checks" />
                              </Link>
                              <Link
                                to="#"
                                className="avatar avatar-xs p-0 btn btn-danger"
                              >
                                <i className="ti ti-x" />
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <p className="mb-0">
                              Leave :{" "}
                              <span className="fw-semibold">12 -13 May</span>
                            </p>
                            <p>
                              Apply on :{" "}
                              <span className="fw-semibold">12 May</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-0">
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center overflow-hidden me-2">
                              <Link
                                to="#"
                                className="avatar avatar-lg flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-19.jpg"
                                  alt="student"
                                />
                              </Link>
                              <div className="overflow-hidden">
                                <h6 className="mb-1 text-truncate ">
                                  <Link to="#">Ramien</Link>
                                  <span className="badge badge-soft-warning ms-1">
                                    Casual
                                  </span>
                                </h6>
                                <p className="text-truncate">Accountant</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-xs p-0 btn btn-success me-1"
                              >
                                <i className="ti ti-checks" />
                              </Link>
                              <Link
                                to="#"
                                className="avatar avatar-xs p-0 btn btn-danger"
                              >
                                <i className="ti ti-x" />
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <p className="mb-0">
                              Leave :{" "}
                              <span className="fw-semibold">12 -13 May</span>
                            </p>
                            <p>
                              Apply on :{" "}
                              <span className="fw-semibold">11 May</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Leave Requests */}
              </div>
             
            </>
        </div>
      </div>
      {/* /Page Wrapper */}
      <AdminDashboardModal/>
    </>
  );
};

export default AdminDashboard;
