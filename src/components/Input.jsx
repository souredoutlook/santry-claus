import { computeOnDemand, computeGiftValue } from "../helpers/helpers"

export default function Input(props) {

    const { type, giftDetails, setGiftDetails, eventFormatter } = props;
    const { title, key } = type;

    function onChange(event) {
        const { target } = event;

        const value = parseInt(target.value.replace(/,/g, ''));

        setGiftDetails(prev => ({
            ...prev,
            [key]: value || 0,
            onDemand: computeOnDemand({...prev, [key]: value || 0}),
            giftValue: computeGiftValue({...prev, [key]: value || 0}),
        }));
    };

    return (
        <div className="input-group">
            <label for={key}>{title}</label>
            <input
                placeholder={title}
                name={key}
                onChange={onChange}
                value={eventFormatter.format(parseInt(giftDetails[key]) || 0)}
            />
        </div>
    );
}