import React from "react";

const VideoModal = ({ setModal }) => {
  const handleClick = () => {
    setModal(false);
  };
  return (
    <div className="w-screen mt-0 absolute">
      <div className="w-3/4 py-2 border border-white mx-auto z-50 bg-black">
        <div className="flex items-center justify-between my-2 px-5 py-1">
          <div>Upload Videos</div>
          <div>
            <button
              className="bg-[#AE7AFF] py-1 px-2 text-black"
              onClick={handleClick}
            >
              Save
            </button>
          </div>
        </div>
        <hr />
        <div className="my-2">
          <form className="flex flex-col w-2/4 mx-auto pt-5">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-black-50 dark:hover:bg-black-800 dark:bg-black-700 hover:bg-black-100 dark:border-black-600 dark:hover:border-black-500 dark:hover:bg-black-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-black-500 dark:text-black-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-black-500 dark:text-black-400">
                  Drag and drop video files to upload
                </p>
                <p class="text-xs text-black-500 dark:text-black-400">
                  Your videos will be private until you publish them.
                </p>
                <p className="bg-[#AE7AFF] px-2 py-1 text-black text-sm my-4">
                  Select Files
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
            <label htmlFor="thumbnail" className="text-sm mt-2 mb-1">
              Thumbnail*
            </label>
            <input
              id="thumbnail"
              type="file"
              className="border border-white p-1"
            />
            <label htmlFor="title" className="text-sm mt-2 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="border border-white px-2 py-1 bg-black"
            />
            <label htmlFor="description" className="text-sm mt-2 mb-1">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="border border-white px-2 py-1 bg-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
