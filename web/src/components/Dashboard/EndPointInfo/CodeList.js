import React from 'react';
import Code from './Code';

const CodeList = ({ responses, use }) => {
    const codes = Object.keys(responses);

    return (
        <div>
            {codes.map((code, key) =>
                <Code
                    key={ key }
                    code={ code }
                    defaultValue={ JSON.stringify(responses[code].data, null, 4) }
                    onChange={ (event) => console.log(event.target.value) }
                    use={ use }
                />
            )}
        </div>
    );
}

export default CodeList;
