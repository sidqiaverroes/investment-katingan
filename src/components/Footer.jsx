import React from "react";

function Footer() {
  return (
    <div className="flex justify-center w-full h-auto py-20">
      <div className="lg:grid lg:grid-cols-9 flex flex-col lg:items-start items-center justify-center gap-12 max-w-screen-xl w-full">
        <div className="lg:col-span-3 flex flex-col w-full lg:items-start items-center justify-center">
          <h3 className="text-birumud font-medium text-xl">
            DPMPTSP KABUPATEN KATINGAN
          </h3>
          <p className="pt-4 pb-8 text-sm text-gray-600">
            Jl. Garuda No 1, Kasongan Lama, Katingan Hilir, Kasongan Lama,
            Katingan, Kabupaten Katingan, Kalimantan Tengah 74413
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/dpmptsp.katingankab/"
              target="_blank"
              className="flex justify-center items-center w-10 h-10 bg-birumud rounded-md"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/dpmptsp.katingankab"
              target="_blank"
              className="flex justify-center items-center w-10 h-10 bg-birumud rounded-md"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Data & Informasi</h4>
          <a
            href="https://dpmptsp.katingankab.go.id/"
            className="text-gray-600"
          >
            Profil Investasi
          </a>
          <a className="text-gray-600">Success Stories</a>
          <a
            href="https://drive.google.com/file/d/19FvpveBOzpkyu_C9CmzvhN0D5b4UUY_b/view"
            className="text-gray-600"
          >
            Video
          </a>
          <a className="text-gray-600">Booklet</a>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Layanan</h4>
          <a
            href="https://drive.google.com/file/d/1nsUDLgUUg9FWjOv7Rnpbshk8qCknQjCN/view"
            className="text-gray-600"
          >
            Informasi Investasi
          </a>
          <a className="text-gray-600">Konsultasi Investasi</a>
        </div>

        <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4">
          <h4 className=" font-semibold text-gray-800">Kontak Kami</h4>
          <a
            href="https://wa.me/+6282253469776"
            target="_blank"
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
