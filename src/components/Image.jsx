import React from 'react'


const Image = (img, appName, srcLink, demoLink) => {
  return (
    <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {appName}
              </span>
              <div className="pt-8 text-center">
                <a
                  href={demo}
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg">
                    
                    Demo
                  </button>
                </a>
                <a
                  href={srcLink}
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg">
                    
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Image
