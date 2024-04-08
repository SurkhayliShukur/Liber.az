import Layout from "./layout"
import Hero from "./components/Hero"

function App() {


  return (
    <>
      <Layout>
        <Hero />
        <section className="bg-[#353A40] pt-12 pb-12">
          <div className="grid grid-rows-2 grid-flow-col container p-4 mt-14">
            <div className="row-start-1">
              <h4 className="text-6xl text-white ">
                Managing Your Luxurious Experience
              </h4>
              <p className="text-xl text-white">
                Let us arrange transportation for every part of your journey.
              </p>
            </div>
            <div className="row-start-1 row-end-4">
              <button className="btn">
                <span>
                  +1 (855) 885-5559
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="container h-min-screen relative top-[-150px] pb-12" >
        <div className="  flex justify-center items-center w-full h-full pt-8">
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-7">
              <figure><img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
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
      </Layout>
    </>
  )
}

export default App
