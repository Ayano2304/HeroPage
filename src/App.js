import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
AOS.init();

function App() {
  return (
    <>
      <section id="hero">
        <div class="container-full">
          <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" class="navbar mx-4 items-center flex justify-between">
            <div class="logo">
              <h1 class="text-white text-[24px]">AYANO</h1>
            </div>
            <div class="menu flex gap-4 text-white uppercase">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Find Out</a>
              <a href="#">Join</a>
            </div>
          </div>

          <div data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" class="hero-box flex flex-col items-center mt-[200px] ">
            <h1 class="hero-heading text-[32px] lg:text-[50px]">Good Night Nice Dream</h1>
            <div class="w-[340px] text-center">
              <p class="hero-desc lg:text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, mollitia.</p>
            </div>

            <div class="btn flex flex-col lg:flex-row gap-5 text-white">
              <div class=" bg-pink-700 rounded-xl">
                <button class="w-[150px] py-2 rounded-sm">SIGN UP</button>
              </div>
              <div class=" bg-pink-700 rounded-xl">
                <button class="w-[150px] py-2 ">JOIN US!!!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
