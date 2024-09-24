import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css'; // Ensure to include any necessary CSS

function App() {
  const openAssessRisk = () => {
    console.log("Assess Site Risks clicked");
  };

  const openMaterials = () => {
    console.log("Materials & Products clicked");
  };

  return (
    <>
      <header className="resp-none">
        <nav className="navbar navbar-expand-md navbar-light fixed-top bar-shadow">
          <div className="container-fluid">
            <div className="col-md-2">
              <Link className="navbar-brand" to="https://www.firstplanit.com/">
                <img className="dashboard-logo" src="https://www.firstplanit.com/users/img/FirstPlanit_logo.png" alt="First Plan It" />
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                <div className="hamburger-toggle">
                  <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </button>
            </div>
            <div className="collapse navbar-collapse col-md-10" id="navbar-content">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0 text-end">
                <li>
                  <form action="/site/productlist/" className="">
                    <div className="form-control p-0">
                      <input className="me-2 searchproduct" type="text" placeholder="Search for Materials & Products" name="search" aria-label="Search" />
                    </div>
                  </form>
                </li>
                <li className="nav-item country_checkUkValidation" style={{ display: 'none' }}>
                  <a className="nav-link dropdown-toggle" href="#" onClick={openAssessRisk}>
                    Assess Site Risks <img src="https://www.firstplanit.com/users/images/down-arrow.png" alt="arrow" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" onClick={openMaterials}>
                    Materials &amp; Products <img src="https://www.firstplanit.com/users/images/down-arrow.png" alt="arrow" />
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="https://www.firstplanit.com/user/dashboard/popup=newproject">Start a Project</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    Resources <img src="https://www.firstplanit.com/users/images/down-arrow.png" alt="arrow" />
                  </a>
                  <ul className="dropdown-menu shadow mt-2">
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/site/about">About Us</Link></li>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/site/learnmore">Learn More</Link></li>
                    <li><a className="dropdown-item" href="https://resources.firstplanit.com/">Blog</a></li> {/* External link should use <a> */}
                  </ul>
                </li>
                <li className="nav-item pr-1 pl-1">
                  <Link className="nav-link" to="https://www.firstplanit.com/user/communicate">
                    <img src="https://www.firstplanit.com/users/icons/message.svg" style={{ marginTop: '-5px' }} alt="message" />
                  </Link>
                </li>
                <li className="nav-item dropdown pr-1 pl-1">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <img src="https://firstplanit-documents.s3.amazonaws.com/doc_images/user_profile_picture/profile_219_275285.png" width="28" height="28" style={{ marginTop: '-5px' }} className="rounded-circle load_profile_pic_small" alt="profile" />
                    <img src="https://www.firstplanit.com/users/images/down-arrow.png" alt="arrow" />
                  </a>
                  <ul className="dropdown-menu shadow mt-2" style={{ marginLeft: '-160px' }}>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/user/dashboard">My Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/user/accountsettings">Two-Factor Authenticator</Link></li>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/user/dashboard/popup=profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/user/dashboard#favproducts">My Favourites</Link></li>
                    <li><Link className="dropdown-item AddProjects" to="https://www.firstplanit.com/user/dashboard/popup=newproject">Add New Project</Link></li>
                    <li><Link className="dropdown-item" to="https://www.firstplanit.com/user/dashboard/popup=changepassword">Change Password</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className="logout"><a href="#" className="dropdown-item">Sign out</a></li> {/* Sign out should not use <Link> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
  <div className="dashboard">
    <div className="row">
      <div className="col-lg-12 col-md-12" id="content5">
        <div className="row mb-3 mt-3">
          <div className="w-50">
            <h2 className="page-title">My Dashboard</h2>
            <div className="page-sub-title">Manage your Projects and Products.</div>
          </div>
          <div className="w-50 text-end">
            {/* Replace href with onClick handlers */}
            <a 
              href="#invitefriend" 
              className="info_btn1" 
              data-bs-toggle="modal" 
              data-bs-target="#invitefriend"
            >
              <img src="https://www.firstplanit.com/users/icons/dash_menu8.png" alt="Invite Friends" align="absmiddle" /> Invite Friends
            </a>
            <a 
              href="#myProfileEdit" 
              className="info_btn1 myProfileEdit" 
              data-bs-toggle="modal" 
              data-bs-target="#myProfileEdit"
            >
              <img src="https://www.firstplanit.com/users/icons/dash_menu7.png" alt="Edit Profile" align="absmiddle" /> Edit Profile
            </a>
          </div>
        </div>
        <div className="w-100 mb-4 mt-1 sproduct_name d-none d-sm-block">
          <div className="topnav" id="myTopnav">
            <a href="#myprojects" id="dbtn1">
              <img src="https://www.firstplanit.com/users/icons/dash_menu1.png" alt="My Projects" align="absmiddle" /> My Projects 
              <span className="topnav_no project_count">16</span>
            </a>
            <a href="#projectssharedwithme" id="dbtn2">
              <img src="https://www.firstplanit.com/users/icons/dash_menu2.png" alt="Shared Projects" align="absmiddle" /> Shared Projects 
              <span className="topnav_no sharedproj_count">6</span>
            </a>
            <a href="#favproducts" id="dbtn3">
              <img src="https://www.firstplanit.com/users/icons/dash_menu4.png" alt="Favourite Products" align="absmiddle" /> Favourite Products 
              <span className="topnav_no myfavepro_count">1</span>
            </a>
            <a href="#myproducts" id="dbtn4">
              <img src="https://www.firstplanit.com/users/icons/dash_menu3.png" alt="My Products" align="absmiddle" /> My Products 
              <span className="topnav_no product_count">0</span>
            </a>
            <a href="#mysproducts" id="dbtn6">
              <img src="https://www.firstplanit.com/users/icons/dash_menu2.png" alt="Shared Products" align="absmiddle" /> Shared Products 
              <span className="topnav_no share_product_count">2</span>
            </a>
            <a href="#myreviews" id="dbtn5">
              <img src="https://www.firstplanit.com/users/icons/dash_menu5.png" alt="My Reviews" align="absmiddle" /> My Reviews 
              <span className="topnav_no review_count">0</span>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div id="myprojects">
          <section className="projects" id="myprojects_gridview">
            <h3 className="mt-1">My Projects</h3>
            <div className="row mb-3 mt-3">
              <div className="col-md-5 col-6">
                <a href="#" id="addnewproject" className="dash_btn1 AddProjects" data-bs-toggle="modal" data-bs-target="#newProject">
                  <img src="https://www.firstplanit.com/users/img/add_icon.png" className="rounded" alt="Add Project" align="absbottom" /> Add Project
                </a>
              </div>
              <div className="col-md-5 col-6 d-none d-sm-block">
                <input type="text" className="form-control dash_input all_project_search" placeholder="Search Projects" />
              </div>
              <div className="col-md-2 text-end col-6">
                <a className="btn btn-light mypro_btn_grid">
                  <img src="https://www.firstplanit.com/users/icons/girdview_green.svg" alt="Grid View" />
                </a>
                <a className="btn btn-light mypro_btn_list">
                  <img src="https://www.firstplanit.com/users/icons/listview_black.svg" alt="List View" />
                </a>
              </div>
              
              <div className="col-md-5 col-12 d-block d-sm-none mt-3">
                <input type="text" className="form-control dash_input all_project_search" placeholder="Search Projects" />
              </div>
            </div>
            <div className="row planner__myprojects project_list_dashboard">
              <div className="mb-3 col-xl-3 col-lg-4">
                <div className="card">
                  <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">
                    <img src="https://firstplanit-documents.s3.amazonaws.com/doc_images/project_img/default.jpeg" className="card-img-top p-3" alt="Avengers initiative" />
                  </Link>
                  <div className="dropdown pro_m" style={{ position: "absolute", right: "20px", top: "20px" }}>
                    <a id="dropdownMenuButton1" className="" data-bs-toggle="dropdown" aria-expanded="false" style={{ display: "block" }}>
                      <img src="https://www.firstplanit.com/users/icons/menu_icon_db.svg" className="" />
                    </a>
                    <ul className="dropdown-menu shadow rounded" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item EditProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#newProject"><img src="https://www.firstplanit.com/users/icons/db_edit.svg" className="" /> Edit Project</a></li>
                      <li><a className="dropdown-item CollaborateIng" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#collaborateProject"><img src="https://www.firstplanit.com/users/icons/db_collaborate.svg" className="" /> Collaborate</a></li>
                      <li><a className="dropdown-item DuplicateProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#duplicate_project_modal"><img src="https://www.firstplanit.com/users/icons/db_duplicate.svg" className="" /> Create a Copy</a></li>
                      <li><a className="dropdown-item ProjectHistory" href="#" data-id="910" data-bs-toggle="modal" data-bs-target="#projectupdates"><img src="https://www.firstplanit.com/users/icons/note.svg" className="" /> History</a></li>
                      <li><a className="dropdown-item text-danger DeleteProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#delete_project_modal"><img src="https://www.firstplanit.com/users/icons/db_delete.svg" className="" /> Delete Project</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p className="mb-1 mt-0 pro_link1">Last Saved: 2024-09-04</p>
                    <h5 className="card-title mt-0">
                      <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">Avengers initiative</Link>
                    </h5>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-md-10 col-9 text-center pr-0">
                        <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">
                          <span><img src="https://www.firstplanit.com/users/icons/view_project.svg" /></span> Edit / View Project Book
                        </Link>
                      </div>
                      <div className="col-md-2 col-3 pl-0 pr-0">
                        <p className="mb-1 mt-0">
                          <a className="pro_link1 CollaborateIng" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#collaborateProject">
                            <img src="https://www.firstplanit.com/users/icons/db_collaborate2.svg" className="share_ic" /> 0
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-xl-3 col-lg-4">
                <div className="card">
                  <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">
                    <img src="https://firstplanit-documents.s3.amazonaws.com/doc_images/project_img/default.jpeg" className="card-img-top p-3" alt="Avengers initiative" />
                  </Link>
                  <div className="dropdown pro_m" style={{ position: "absolute", right: "20px", top: "20px" }}>
                    <a id="dropdownMenuButton1" className="" data-bs-toggle="dropdown" aria-expanded="false" style={{ display: "block" }}>
                      <img src="https://www.firstplanit.com/users/icons/menu_icon_db.svg" className="" />
                    </a>
                    <ul className="dropdown-menu shadow rounded" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item EditProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#newProject"><img src="https://www.firstplanit.com/users/icons/db_edit.svg" className="" /> Edit Project</a></li>
                      <li><a className="dropdown-item CollaborateIng" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#collaborateProject"><img src="https://www.firstplanit.com/users/icons/db_collaborate.svg" className="" /> Collaborate</a></li>
                      <li><a className="dropdown-item DuplicateProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#duplicate_project_modal"><img src="https://www.firstplanit.com/users/icons/db_duplicate.svg" className="" /> Create a Copy</a></li>
                      <li><a className="dropdown-item ProjectHistory" href="#" data-id="910" data-bs-toggle="modal" data-bs-target="#projectupdates"><img src="https://www.firstplanit.com/users/icons/note.svg" className="" /> History</a></li>
                      <li><a className="dropdown-item text-danger DeleteProjectBox" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#delete_project_modal"><img src="https://www.firstplanit.com/users/icons/db_delete.svg" className="" /> Delete Project</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p className="mb-1 mt-0 pro_link1">Last Saved: 2024-08-04</p>
                    <h5 className="card-title mt-0">
                      <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">BGMI Department</Link>
                    </h5>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-md-10 col-9 text-center pr-0">
                        <Link to="/user/risks" className="card-link ViewRisk vproject" data-id="910" data-name="Avengers initiative" data-country="184" data-postcode="WC1N 2PH" data-symbol="£">
                          <span><img src="https://www.firstplanit.com/users/icons/view_project.svg" /></span> Edit / View Project Book
                        </Link>
                      </div>
                      <div className="col-md-2 col-3 pl-0 pr-0">
                        <p className="mb-1 mt-0">
                          <a className="pro_link1 CollaborateIng" data-id="910" href="#" data-bs-toggle="modal" data-bs-target="#collaborateProject">
                            <img src="https://www.firstplanit.com/users/icons/db_collaborate2.svg" className="share_ic" /> 0
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
}

export default App;
