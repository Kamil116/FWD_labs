import './Footer.css'

function Footer() {
    return (
        <>
            <div id="ending" >
                <h1 className="heading">How to reach me out:</h1>
                <div style={{paddingLeft: "8em"}} id="footer-links">
                    <div>
                        <a href="https://t.me/mirgasimovk">
                            <img src="/telegram.png" id="tg-link" alt="telegram contact"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Kamil116">
                            <img src="/github-mark.png" id="gh-link" alt="github link"/>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:k.mirgasimov@innopolis.university">
                            <img src="/email-svgrepo-com.svg" id="email" alt="email"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer