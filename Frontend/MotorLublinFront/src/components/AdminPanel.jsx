import DefaultForm from "./DefaultForm";
import { Toaster, toast } from 'sonner'
import PlaneForm from "./PlaneForm";
import AirportForm from "./AirportForm";

const AdminPanel = () => {
    const handleAdminForm = async (url, requestBody) => {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestBody)
            });
            if(!response.ok) throw new Error('Could not add this data');
            const data = await response.json();
            toast.success(`Added ${data}`) 
        } catch(error) {
            toast.error(`Failed to fetch: ${error}`)
        }
          
    }

    return (
        <div className="admin-panel-container">
            <h1 className="admin-panel-header">Admin Panel</h1>
            <div className="admin-panel-row">
                <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/flight'} name={'Flights'}/>
                <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/ticket'} name={'Tickets'}/>
                <DefaultForm handler={handleAdminForm} url={'http://localhost:8080/admin/randomUser'} name={'Users'}/>
            </div>
            <div className="admin-panel-row">
                <PlaneForm handler={handleAdminForm} url={'http://localhost:8080/admin/plane'}/>
                <AirportForm handler={handleAdminForm} url={'http://localhost:8080/admin/airport'}/>
            </div>
            <Toaster richColors  position="top-right"/>
        </div>
    )
}

export default AdminPanel;