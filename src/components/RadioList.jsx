import '../App.css';

export default function RadioList(props) {

    const { type, orgDetails, setOrgDetails} = props;
    const { key, title, list } = type;

    function onChange(event) {
        const { target } = event;

        setOrgDetails(prev => ({...prev, [key]: target.value}));
    };

    const radioList = list.map(v => {
        return (
            <div className="radio-group" key={v}>
                <label for={v}>{v}</label>
                <input type="radio" name={title} value={v} id={v} onChange={onChange} checked={v === orgDetails[key] ? true : false}/>
            </div>
        )
    }) 

    return (
        <div className="radio-pair">
            {radioList}
        </div>
    );
}