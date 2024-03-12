import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div className="bio1">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae pariatur magni expedita est, perferendis tenetur? Quibusdam quis modi tempora in reiciendis eos beatae aliquam nesciunt et natus eum, corrupti, recusandae quia, sunt aperiam quidem velit dolore assumenda veniam eligendi dolores.
                </div>

            </div>
            <div className="icons">
                <div className="ic1"><img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" alt="youtube" /></div>
                <div className="ic1"><img src="data:image/png;base64,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" alt="chat gpt" /></div>
                <div className="ic1"><img src="https://thumbs.dreamstime.com/b/google-meet-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-210443207.jpg" alt="note" /></div>
                <div className="ic1"><img src="data:image/png;base64,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" alt="vs" /></div>
                <div className="ic1"><img src="data:image/png;base64,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" alt="doubt" /></div>
            </div>
        </div>
    );
}

export default Home;