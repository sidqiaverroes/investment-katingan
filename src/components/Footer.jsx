import React from "react";

function Footer() {
  return (
    <div className="flex justify-center w-full h-auto py-20">
      <div className="lg:grid lg:grid-cols-10 flex flex-col lg:items-start items-center justify-center gap-12 max-w-screen-lg w-full">
        <div className="lg:col-span-4 flex flex-col w-full lg:items-start items-center justify-center">
          <a
            href="https://dpmptsp.katingankab.go.id/"
            target="_blank"
            rel="noreferrer"
            className="text-birumud font-medium text-xl"
          >
            DPMPTSP KABUPATEN KATINGAN
          </a>
          <p className="pt-4 pb-8 text-sm text-gray-600">
            Jl. Garuda No II, Kasongan Lama, Katingan Hilir, Kasongan Lama,
            Katingan, Kabupaten Katingan, Kalimantan Tengah 74413
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/dpmptsp.katingankab/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-10 h-10 rounded-md bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg "
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/dpmptsp.katingankab"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-10 h-10 rounded-md bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg "
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.google.com/maps/place/DPMPTSP+(PERIZINAN)+KAB.+KATINGAN/@-1.8813484,113.4018992,15z/data=!4m5!3m4!1s0x0:0xa291a02c00b5124e!8m2!3d-1.8813484!4d113.4018992"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-10 h-10 rounded-md bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg "
            >
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Data & Informasi</h4>
          <a
            href="https://portal.katingankab.go.id/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            Portal Katingan
          </a>
          <a
            href="https://oss.go.id/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            OSS
          </a>
          <a
            href="https://oss.go.id/informasi/kbli-berbasis-risiko"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            KBLI
          </a>
          <a
            href="https://regionalinvestment.bkpm.go.id/pir/daerah-wilayah/?id=6209"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            PIR
          </a>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Layanan</h4>
          <a
            href="https://drive.google.com/file/d/1nsUDLgUUg9FWjOv7Rnpbshk8qCknQjCN/view"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            Informasi Investasi
          </a>
          <a href="#hubungi" className="text-gray-600">
            Konsultasi Investasi
          </a>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Kontak Kami</h4>
          <a
            href="https://wa.me/+6282253469776"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
