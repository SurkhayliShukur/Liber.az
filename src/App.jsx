import Layout from "./layout"


function App() {


  return (
    <>
      <Layout>
        <section className="bg-[#353A40] pt-12 pb-28 h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 container p-4 mt-14 gap-4">
            <div className="sm:col-span-1">
              <h4 className="text-4xl text-white">
                Managing Your Luxurious Experience
              </h4>
              <p className="text-xl text-white">
                Let us arrange transportation for every part of your journey.
              </p>
            </div>
            <div className="sm:col-span-1 flex items-center justify-center">
              <button className="btn">
                <span>
                  +1 (855) 885-5559
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="container h-min-screen  pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 pb-12">
          <div className="flex justify-center items-center w-full h-full">
            <div className="card bg-base-100 shadow-xl image-full">
              <figure><img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="card bg-base-100 shadow-xl image-full">
              <figure><img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section_car relative">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
            <div className="relative p-14 z-10">
              <img src="https://plus.unsplash.com/premium_photo-1681489433354-f7fabdebd933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full lg:w-[300px] h-[300px] object-cover" />
            </div>
            <div className="flex items-center z-10">
              <h4 className="text-xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quos?</h4>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </section>



      </Layout>
    </>
  )
}

export default App
