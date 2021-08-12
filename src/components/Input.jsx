import '../App.css';
import { computeOnDemand, computeGiftValue } from "../helpers/helpers"
export default function Input(props) {

    const { type, giftDetails, setGiftDetails } = props;
    const { title, key } = type;

    function onChange(event) {
        const { target } = event;

        setGiftDetails(prev => ({
            ...prev,
            [key]: parseInt(target.value) || 0,
            onDemand: computeOnDemand({...prev, [key]: parseInt(target.value) || 0}),
            giftValue: computeGiftValue({...prev, [key]: parseInt(target.value) || 0}),
        }));
    };

    return (
        <div className="input-group">
            <label for={key}>{title}</label>
            <input
                placeholder={title}
                name={key}
                onChange={onChange}
                value={parseInt(giftDetails[key]) || 0}
            />
        </div>
    );
}