import React from "react";
import GridTable from "./ParamQuery";

function Content() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-0">
            <div className="col-sm-6">
              <h3>Beranda</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Beranda</a>
                </li>
                <li className="breadcrumb-item active">Beranda</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <div className="card" id="search_cat">
              <div className="card-header">
                <h3 className="card-title">Kriteria</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="container">
                  <div className="row pt-1">
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Hari Ini</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Semua Jenis Rawat</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Semua Pasien</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>No CM</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Semua Px</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pending</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Semua Petugas</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="w-100 pt-1" />
                    <div className="col">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Selection</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary btn-sm btn-block m-1"
                    >
                      <i className="fas fa-search" />
                      Cari
                    </a>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card" id="searchbar">
              <div className="card-header">
                <h3 className="card-title">Data</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              {/* PQuery */}
              {/* <div className="card-body p-0" id="grid_json"></div> */}
              <div className="card-body">
                <GridTable />
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-9">
            <div className="card card-success card-outline">
              <div className="card-body text-white bg-success p-0">
                <div className="container">
                  <div className="row pt-1">
                    <div className="col-lg-2">
                      <p>Nama</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>John Smith</p>
                    </div>
                    <div className="col-lg-2">
                      <p>No. Lab</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>202306211448</p>
                    </div>
                    <div className="w-100" />
                    <div className="col-lg-2">
                      <p>Gender</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>Laki-laki</p>
                    </div>
                    <div className="col-lg-2">
                      <p>Tanggal Periksa</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>01 Januari 2023</p>
                    </div>
                    <div className="w-100" />
                    <div className="col-lg-2">
                      <p>Usia</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>28 Tahun</p>
                    </div>
                    <div className="col-lg-2">
                      <p>Pengirim</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>dr Risma</p>
                    </div>
                    <div className="w-100" />
                    <div className="col-lg-2">
                      <p>Alamat</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>Indonesia</p>
                    </div>
                    <div className="col-lg-2">
                      <p>Instansi</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>Umum</p>
                    </div>
                    <div className="w-100" />
                    <div className="col-lg-2">
                      <p>Petugas Entri</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>Agus</p>
                    </div>
                    <div className="col-lg-2">
                      <p>Sampel</p>
                    </div>
                    <div className="col-md-auto">
                      <p>:</p>
                    </div>
                    <div className="col">
                      <p>Darah</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="mailbox-controls">
                  {/* Check all button */}
                  <button
                    type="button"
                    className="btn btn-default btn-sm checkbox-toggle"
                  >
                    <i className="far fa-square" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-reply" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt" />
                  </button>
                  <div className="float-right">
                    1-50/200
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                    {/* /.btn-group */}
                  </div>
                  {/* /.float-right */}
                </div>
                <div className="table-responsive mailbox-messages">
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check1" />
                            <label htmlFor="check1" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">5 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check2" />
                            <label htmlFor="check2" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">28 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check3" />
                            <label htmlFor="check3" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">11 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check4" />
                            <label htmlFor="check4" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">15 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check5" />
                            <label htmlFor="check5" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">Yesterday</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check6" />
                            <label htmlFor="check6" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check7" />
                            <label htmlFor="check7" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check8" />
                            <label htmlFor="check8" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check9" />
                            <label htmlFor="check9" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check10" />
                            <label htmlFor="check10" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check11" />
                            <label htmlFor="check11" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">4 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check12" />
                            <label htmlFor="check12" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check13" />
                            <label htmlFor="check13" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check14" />
                            <label htmlFor="check14" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">14 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check15" />
                            <label htmlFor="check15" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">15 days ago</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* /.table */}
                </div>
                {/* /.mail-box-messages */}
              </div>
              {/* /.card-body */}
              <div className="card-footer p-0">
                <div className="mailbox-controls">
                  {/* Check all button */}
                  <button
                    type="button"
                    className="btn btn-default btn-sm checkbox-toggle"
                  >
                    <i className="far fa-square" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-reply" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt" />
                  </button>
                  <div className="float-right">
                    1-50/200
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                    {/* /.btn-group */}
                  </div>
                  {/* /.float-right */}
                </div>
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default Content;
