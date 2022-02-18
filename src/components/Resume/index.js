import  react from "react";

function Resume() {
    return (
        <main>
            <section>
                <article>
                    <div>
                        <h2>You can download my resume here</h2>
                        <a href= {require("../../assets/Carter's Resume.pdf")} id="pdf" download>Download</a>
                    </div>
                </article>
            </section>
        </main>
    );
    
}
export default Resume;