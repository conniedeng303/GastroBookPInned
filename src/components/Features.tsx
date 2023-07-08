import DiscoverLogo from './assets/compass.svg'

function Features() {
    const test = () => {
        console.log("clicked");
    }

    return (
        <>
            <div className ="mt-5 position-absolute top-30 start-30 centered height-100px w-10 p-3 mb-2 bg-warning text-dark rounded-3">
                <h3 className = "text-center">Home<i className="bi-compass"></i></h3>
            </div>
            <div className ="mt-5 position-absolute top-50 start-3000 centered height-100px w-10 p-3 mb-2 bg-warning text-dark rounded-3">
            </div>
            <div onClick={test} style={{cursor:"pointer"}}>
                <img src={DiscoverLogo} />
            </div>

        </>

    )
}

export default Features;