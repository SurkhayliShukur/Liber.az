import Layout from "./layout"
import carImage from "./assets/img/swiper1.jpg"



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


        <section className="section_car  h-auto">
          <div className="container grid grid-cols-1 lg:grid-cols-2  gap-4 place-items-center">
            <div className="sm:col-span-1  p-8  z-10">
              <img src="https://plus.unsplash.com/premium_photo-1681489433354-f7fabdebd933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full lg:w-[500px] h-[400px] object-cover" />
            </div>
            <div className="sm:col-span-1 z-10">
              <h4 className="text-3xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quos?</h4>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>

        <section className="h-auto pt-18 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-28 place-items-center">
                <div className="sm:col-span-1">
                    <h2 className="text-4xl font-bold mt-14">
                        ONE Concierge For All Your Transportation Needs.
                    </h2>
                    <p className="text-xl mt-3">
                        Book your luxury travel experience and let us bring your wishes to life.
                    </p>
                </div>
                <div className="sm:col-span-1 pt-18">
                  <img src={carImage} alt="Image" className="w-[400px] h-[400px]"/>
                </div>
            </div>
        </section>
      </Layout>
    </>
  )
}

export default App
