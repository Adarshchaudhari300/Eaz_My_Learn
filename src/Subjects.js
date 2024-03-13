import './Subject.css';
const Subject = () => {

    return (
        <div className="subject">
            <div className="subbar">
                <div className="subbar1">IIT Kharagpur</div>
                <div className="subbar2">Agricuiculture And Food Engneering </div>
                <div className="subbar3"> Welcome Adarsh</div>
            </div>
            <div className="subject1">
                <div className="subicon"><a href="/AGBT"><img src="https://www.agbt.org/wp-content/uploads/2020/06/agbt-agri-logo.png" alt="SUBJECTS" /><p>AGBT</p></a></div>
                <div className="subicon"><a href="/BE"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK6WzFIjmEgkSpAuBYeoA0t19m480jY7DmKw-u1Z5STSyhQkBxIeLc4bN875ONkjuswg&usqp=CAU" alt="SUBJECTS" /><p>Basic Electronics</p></a></div>
                <div className="subicon"><a href="/THERMO"><img src="https://i.etsystatic.com/27489309/r/il/18710b/5393203975/il_570xN.5393203975_emzl.jpg" alt="SUBJECTS" /><p>Thermodynaics</p></a></div>
                <div className="subicon"><a href="/CPT"><img src="https://image.shutterstock.com/image-photo/image-260nw-1814258441.jpg" alt="SUBJECTS" /><p>CPT</p></a></div>
            </div>
        </div>
    );
}

export default Subject;