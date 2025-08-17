import MyImage from "@/assets/images/myImage.jpg";
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={MyImage}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Simmi Sinha,a passionate Full Stack developer and
                Problem Solver focused on building responsive, high-performance
                web applications with clean and modern UI.{" "}
                <span className="font-bold text-white">
                  As the creator of multiple full stack projects
                </span>
                , I aim to solve various real-world problems by providing
                complete web solutions.
              </p>
              <p className="text-white">
                My goal is to build seamless user experiences by integrating
                intuitive design with robust and scalable full-stack solutions.
                I’m currently sharpening my skills in machine learning to build
                intelligent systems and deliver data-driven solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a continuous learner who loves turning ideas into
                    working products. I strive to contribute to the dev
                    community by creating projects that inspire and add
                    real-world value.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
