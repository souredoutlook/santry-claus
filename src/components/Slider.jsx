import '../App.css';

export default function Slider(props) {

    const { type, orgDetails, setOrgDetails } = props;
    const { title, list, key } = type;

    function onChange(event) {
        const { target } = event;

        setOrgDetails(prev => ({...prev, [key]: list[target.value]}));
    };

    return (
        <div className="slider-group">
            <label for={title} className="slider-label">{title}</label>
            <input type="range" name={title} min={0} max={list.length - 1} step={1} onChange={onChange} value={list.indexOf(orgDetails[key])}/>
            <label for={title} className="slider-value">{parseInt(orgDetails[key]) * 1000}</label>
            <div className="slider-key"> 
                <span>{list[0]}</span>
                <span>{list[list.length-1]}</span>
            </div>
        </div>
    );
}