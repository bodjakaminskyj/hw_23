import React from "react";
import './ButtonsResult.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ reset }) => {
    return (
        <>
            <button className="button" >Save</button>
            <button
                className="button buttonBlack"
                type="button"
                onClick={() => {
                    reset(
                        {
                            name: '',
                            type: '',
                            color: '',
                            wheelSize: '',
                            price: '',
                            id: '',
                            description: ''
                        }
                    );
                }}
            >
                Clear
            </button>

        </>
    );
};
