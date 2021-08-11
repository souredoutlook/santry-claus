import '../App.css';

export default function Input(props) {

    const { type, orgDetails, setOrgDetails } = props;

    function onChange(event) {
        const { target } = event;

        const changedValue = target.name === "Accepted Errors" ? {acceptedErrors: parseInt(target.value)} : {acceptedTransactions: parseInt(target.value)};

        setOrgDetails(prev => ({...prev, ...changedValue}));
    };

    return (
        <div className="input-group">
            <label for={type}>{type}</label>
            <input
                placeholder={type}
                name={type}
                onChange={onChange}
                value={type === "Accepted Errors" ? parseInt(orgDetails.acceptedErrors) || 0 : parseInt(orgDetails.acceptedTransactions) || 0}
            />
        </div>
    );
}