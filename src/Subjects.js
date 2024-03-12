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
                <div className="subicon"><a href="/AGBT"><img src="https://images.freeimages.com/fic/images/icons/1786/oxygen_refit/128/folder_blue.png?fmt=webp&w=500" alt="SUBJECTS" /><p>AGBT</p></a></div>
                <div className="subicon"><a href="/BE"><img src="https://images.freeimages.com/fic/images/icons/1786/oxygen_refit/128/folder_blue.png?fmt=webp&w=500" alt="SUBJECTS" /><p>Basic Electronics</p></a></div>
                <div className="subicon"><a href="/THERMO"><img src="https://images.freeimages.com/fic/images/icons/1786/oxygen_refit/128/folder_blue.png?fmt=webp&w=500" alt="SUBJECTS" /><p>Thermodynaics</p></a></div>
                <div className="subicon"><a href="/CPT"><img src="https://images.freeimages.com/fic/images/icons/1786/oxygen_refit/128/folder_blue.png?fmt=webp&w=500" alt="SUBJECTS" /><p>CPT</p></a></div>
            </div>
        </div>
    );
}

export default Subject;