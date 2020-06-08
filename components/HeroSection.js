function SectionOne() {
    return (
        <div className="container-fluid" id="section1">
            <div className="d-flex justify-content-center" id="title">
                <h1 id="jers">JERS</h1>
                <p>CREA TU ESTILO.</p>

                <div className="media">
                    <ul>
                        <li><a href="https://www.facebook.com/Jersmx/" target="blank">Facebook</a></li>
                        <li><a href="https://www.instagram.com/jersmx/" target="blank">Instagram</a></li>
                    </ul>
                </div>
            </div>

    <style jsx>{`
        #section1 {
            height: 90vh;
            background-image: url(../static/bw-bg1.jpeg);
            background-size: cover;
            background-color: lightgray;

            animation: fade 1s cubic-bezier(0.3, 0, 0, 1) 1 ;

            
        }
        h1 {
            color: white;
            font-size: 150px;
            animation: fadeup 2s cubic-bezier(0.3, 0, 0, 1) 1 ;

            }
        #title p{
            color: white;
            animation: fadeup 3s cubic-bezier(0.3, 0, 0, 1) 1 ;
            }

        #title {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100vh;

        }
        
        .media {
            color: rgb(255, 255, 255);
            transform: rotate(90deg);
            position: absolute;
            right: -80px;
            flex-direction: column;
            justify-content: end;
            top: 50%;
            margin-left: 100px;
            margin-top: 280px;

        }
        .media li {
            list-style: none;
            display: inline-block;
            animation-delay: 1s;
            animation: fadeup 2s cubic-bezier(0.3, 0, 0, 1) 1 ;

        }
        .media li {
            margin-right: 40px;
        }
        .media a {
            color: white;
            text-decoration: none; /* no underline */
        }

        #title h1 { 
            animation: glow 2s ease-in-out infinite alternate, fadeup 2s cubic-bezier(0.3, 0, 0, 1) 1;
            text-align: center;

        }
        a {
            font-family: 'Teko', sans-serif;
            color: #4db1bc;
            grid-column: 1;
            grid-row: 1;
            align-self: end;
            justify-self: center;
            padding-bottom: 1rem;
        }
        

        @media only screen and (max-width: 1020px) {
            #section1 {
                background-position: center;
            }
        }
        @media only screen and (max-width: 600px) {
            #section1 {
                background-image: url('../static/bw-bg2.jpeg');
                animation: zoomout 2s cubic-bezier(0.3, 0, 0, 1) 1 ;
                background-size: 100% 100%
                

            }
            .media {
                top: 47vh;
            }
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 20px #2d3131;
                
            }
            to {
                text-shadow: 0 0 30px #828485, 0 0 10px #d1d1d1;
            }
        }
        @keyframes zoomout {
            from {
                background-size: 125% 125%;
            }
            to {
                background-size: 100% 100%;

            }
        }
        @keyframes fadeup {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0px);

            }
        }
        @keyframes fade {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;

            }
        }

    `}</style>
        </div>
    )
}

export default SectionOne