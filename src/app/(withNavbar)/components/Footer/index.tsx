export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "black" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Bouchée Chic
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto error consequuntur dolor vero similique quia
                consectetur aperiam, mollitia nihil fugiat!
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Menú</h6>
              <p>
                <a className="text-white linksnone" href="" target="_blank">
                  Contacto
                </a>
              </p>
              <p>
                <a className="text-white linksnone" href="" target="_blank">
                  Shop
                </a>
              </p>
              <p>
                <a className="text-white linksnone" href="" target="_blank">
                  Servicios
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">SOPORTE</h6>
              <p>
                <a className="text-white linksnone">Soporte</a>
              </p>
              <p>
                <a className="text-white linksnone">Ayuda</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Antiguo Cuscatlán, El
                Salvador
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> boucheechic@info.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +(503) 0000-0000
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +(503) 0000-0000
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright:
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.google.com"
                >
                  Bouchée Chic
                </a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
