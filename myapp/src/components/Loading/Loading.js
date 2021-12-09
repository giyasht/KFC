import React from 'react'
import LoadingSpin from "react-loading-spin";

const Loading = () => {
    return (
        <div className={"ExampleOfUsage"}>
            <LoadingSpin
                duration="2s"
                width="15px"
                timingFunction="ease-in-out"
                direction="alternate"
                size="200px"
                primaryColor="yellow"
                secondaryColor="#333"
                numberOfRotationsInAnimation={2}
            />
        </div>
    )
}

export default Loading;
