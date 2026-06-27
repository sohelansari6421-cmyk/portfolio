import "../styles/Hero.css"



export function Hero() {

    return (
        <section className="hero">
            <div className="hero-title">
                <h1 className="text-5xl front-bold">
                    Mohd Sohel Ansari
                </h1>
                <p className="hero-subtitle">

                    React Developer |Django Developer
                </p>
                <button className="hero-btn">
                    <a
                        href="/assets/resume.pdf"
                        download="Mohd_Sohel_Ansari_Resume.pdf"
                    >
                        Download Resume
                    </a>

                </button>
            </div>
        </section>

    )
}

export default Hero