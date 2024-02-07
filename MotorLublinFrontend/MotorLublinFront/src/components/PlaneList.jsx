import { useEffect, useState } from "react";
import fetchData from "../logic/FetchData";
import { Audio } from 'react-loader-spinner'
import PlaneRow from "./PlaneRow";
import {v4} from 'uuid';
import { Toaster, toast } from 'sonner'

const PlaneList = ({params}) => {
    const [planes, setPlanes] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        (async function() {
            try{
                const {data, pending} = await fetchData('http://localhost:8080/user/flights', params)
                setPlanes(data)
                setPending(pending)
            }catch(error){
                setPlanes([])
                toast.error(`Failed to fetch: ${error.message}`)
            }
        })()
    }, [params]);

    return (
        <div className="plane-list">
            <h1 className="plane-list-header">Flights Found</h1>
            {pending ? 
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /> :
                <table className="plane-list-table">
                    {planes.length ? 
                        <tbody>
                            {planes.map(plane => {
                                return <PlaneRow 
                                    id={plane.id}
                                    arrive={plane.arrive}
                                    dateArrive={plane.arriveTime}
                                    departure={plane.departure}
                                    dateDeparture={plane.departureTime}
                                    key={v4()}
                                />
                            })}
                        </tbody> :
                        <span>No flights found...</span>
                    }
                </table>
            }
            <Toaster richColors  position="top-right"/>
        </div>
    )
}

export default PlaneList;