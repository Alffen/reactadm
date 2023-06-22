import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Logo</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                User
              </Link>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    {/* <i class="right fas fa-angle-left"></i> */}
                  </p>
                </Link>
                {/* <ul class="nav nav-treeview">
        <li class="nav-item">
          <Link to="index.html" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>Dashboard v1</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="index2.html" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>Dashboard v2</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="index.html" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>Dashboard v3</p>
          </Link>
        </li>
      </ul> */}
              </li>
              <li className="nav-header">Menu</li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Master
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pasien</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dokter</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rekanan</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Instrumen
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Instrumen</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Mapping Instrumen</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Parameter
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Kode Parameter</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Tarif Pemeriksaan</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Nilai Normal</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Grup Parameter</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Parameter Aktif</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Nilai Baku</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Nilai Normal 2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>KL - Baku Hasil</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>MO - Baku Metode</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>MO - Baku Hasil</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>MO - Baku Normal</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>MO - Unit Normal</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Inventory
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Departemen</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Barang</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Supplier</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        User
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Anggota Grup</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Grup</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>User</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Front Office
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Laboratorium
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Back Office
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Gudang
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Adm
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      <aside class="control-sidebar control-sidebar-dark">
        {/* <!-- Control sidebar content goes here --> */}
      </aside>
    </div>
  );
}

export default Sidebar;
