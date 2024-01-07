import { computeOnDemand, computeGiftValue } from "../helpers/helpers"

export default function Slider(props) {

    const { type, giftDetails, setGiftDetails, eventFormatter } = props;
    const { title, list, key } = type;

    function onChange(event) {
        const { target } = event;

        setGiftDetails(prev => ({
            ...prev,
            [key]: list[target.value],
            onDemand: computeOnDemand({...prev, [key]: list[target.value]}),
            giftValue: computeGiftValue({...prev, [key]: list[target.value]}),
        }));
    };

    return (
        <div className="slider-group">
            <div className="slider-label">
                <label for={title} className="slider-label">{title}</label>
                {(key === "reservedErrors" || key === "reservedTransactions") && <label for={title} className="slider-value">{eventFormatter.format(parseInt(giftDetails[key]) * 1000)}</label>}
                {(key === "reservedReplays" || key === "reservedAttachments") && <label for={title} className="slider-value">{eventFormatter.format(parseFloat(giftDetails[key]) * 1000)}</label>}
            </div>
            <div className="slider-component">
                <input type="range" name={title} min={0} max={list.length - 1} step={1} onChange={onChange} value={list.indexOf(giftDetails[key])}/>
                {/* TODO: change this behaviour for Replays and Attachments */}
                <div className="slider-key"> 
                    <span>{`${list[0]}K`}</span>
                    <span>{`${list[list.length-1].toString().substring(0,2)}M`}</span>
                </div>
            </div>
        </div>
    );
}