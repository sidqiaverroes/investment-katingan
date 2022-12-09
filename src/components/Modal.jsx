import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ setShowModal, detail }) => {
  const { name, location, cost, mapLink, desc, image } = detail;

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 z-20 flex py-16 justify-center items-center">
        <div className="flex flex-col bg-white w-modalCardMd h-modalCardMd max-w-screen-lg rounded-md overflow-hidden shadow-lg">
          <div className="relative w-full h-80">
            <img src={image} className="relative w-full h-full object-cover" />
            <button
              className="absolute top-3 right-3 flex justify-center items-center w-8 h-8 text-gray-800 bg-white hover:bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2"
              onClick={() => setShowModal(false)}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex flex-col p-8 h-full ">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="text-3xl -mt-1 font-medium">{name}</h3>
              <span>
                <p className="text-birumud">Location: {location}</p>
                <p className="text-orenmud">Rp {cost}</p>
              </span>
              <p className="text-gray-500 overflow-auto h-36">{desc}</p>
            </div>
            <div className="flex justify-end items-end">
              <a
                href={mapLink}
                target="_blank"
                className="bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg text-white w-fit rounded-md py-2 px-8"
              >
                Bring me there
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-10 bg-black opacity-25"></div>
    </>,
    document.getElementById("modal")
  );
};

const NewsModal = ({ setShowModal, detail }) => {
  const { title, desc, createdAt, editedAt, image } = detail;

  return ReactDOM.createPortal(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {desc}
              </p>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>,
    document.getElementById("modal")
  );
};

export { Modal, NewsModal };
