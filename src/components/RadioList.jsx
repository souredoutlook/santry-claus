import { computeOnDemand, computeGiftValue } from "../helpers/helpers"

export default function RadioList(props) {

    const { type, giftDetails, setGiftDetails} = props;
    const { key, title, list } = type;

    function onChange(event) {
        const { target } = event;

        setGiftDetails(prev => ({
            ...prev,
            [key]: target.value,
            onDemand: computeOnDemand({...prev, [key]: target.value}),
            giftValue: computeGiftValue({...prev, [key]: target.value}),
        }));
    };

    const radioList = list.map(v => {
        return (
            <div className="radio-group" key={v}>
                <label for={v}>{v}</label>
                <input type="radio" name={title} value={v} id={v} onChange={onChange} checked={v === giftDetails[key] ? true : false}/>
            </div>
        )
    }) 

    return (
        <div className="radio-pair">
            {radioList}
        </div>
    );
}