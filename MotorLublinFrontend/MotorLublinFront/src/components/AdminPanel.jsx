import fetchData from "../logic/FetchData";
import DefaultForm from "./DefaultForm";
import { Toaster, toast } from 'sonner'
import PlaneForm from "./PlaneForm";
import AirportForm from "./AirportForm";

const AdminPanel = () => {
    const handleAdminForm = async (url, requestBody) => {
        try{
            const {data} = await fetchData(url, requestBody);
            toast.success(`Added ${data}`)
        } catch(error) {
            toast.error(`Failed to fetch: ${error.message}`)
        }
    }

    return (
        <div className="admin-panel-container">
            <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/flight'} name={'Flights'}/>
            <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/ticket'} name={'Tickets'}/>
            <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/randomUser'} name={'Users'}/>
            <h1>Add custom plane</h1>
            <PlaneForm handler={handleAdminForm} url={'http://localhost:8080/admin/plane'}/>
            <h1>Add custom airport</h1>
            <AirportForm handler={handleAdminForm} url={'http://localhost:8080/admin/airport'}/>
            <Toaster richColors  position="top-right"/>
        </div>
    )
}

export default AdminPanel;