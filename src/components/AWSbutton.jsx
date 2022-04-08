import React from 'react'

export default function AWSbutton(props) {
    const [outputFileData, setOutputFileData] = React.useState(''); // represented as readable data (text string)
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const [buttonText, setButtonText] = React.useState('Predict Matchup');
    const handleSubmit = (event) => {
        event.preventDefault();
        // temporarily disable submit button
        setButtonDisable(true);
        setButtonText('Loading Result');

        //Test with sample matchup

        // make POST request
        console.log('making POST request...');
        fetch('https://ckb9kg7ckd.execute-api.us-east-1.amazonaws.com/prod/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ "matchup": props.input_data })
        }).then(response => response.json())
        .then(data => {
            console.log('getting response...')
            console.log(data);

        // POST request error
        if (data.statusCode === 400) {
            const outputErrorMessage = JSON.parse(data.errorMessage)['outputResultsData'];
            setOutputFileData(outputErrorMessage);
        }
        
        // POST request success
        else {
            const outputBytesData = JSON.parse(data.body)['outputResultsData'];
            setOutputFileData(outputBytesData);
        }

        // re-enable submit button
        setButtonDisable(false);
        setButtonText('Done!');
        })
        .then(() => {
            console.log('POST request success');
        })
    }
    return (
    <div className="Input">
        <form onSubmit={handleSubmit}>
            <button className = "awsButton" type="submit" disabled={buttonDisable}>{buttonText}</button>
        </form>
        <span> {outputFileData} </span>
    </div>
  )
}
