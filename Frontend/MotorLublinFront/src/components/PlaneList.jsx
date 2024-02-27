import { Audio } from 'react-loader-spinner'
import PlaneRow from "./PlaneRow";
import {v4} from 'uuid';
import { Toaster, toast } from 'sonner'
import useFetch from "../hooks/useFetch";

const PlaneList = ({params}) => {
    const {data: planes, isPending, error} = useFetch('http://localhost:8080/user/flights', params, true);

    if(error) toast.error(error)


    return (
        <div className="plane-list">
            {isPending ? 
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /> :
                <div className="plane-list-table">
                    {planes.length ? 
                        
                            planes.map(plane => {
                                return <PlaneRow 
                                    id={plane.id}
                                    arrive={plane.arrive}
                                    dateArrive={plane.arriveTime}
                                    departure={plane.departure}
                                    dateDeparture={plane.departureTime}
                                    key={v4()}
                                />
                            })
                         :
                        <span className="plane-list-not-found">No flights found...</span>
                    }
                </div>
            }
            <Toaster richColors position="top-right"/>
        </div>
    )
}

export default PlaneList;