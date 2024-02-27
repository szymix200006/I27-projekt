import { v4 } from "uuid"

const ErrorContainer = ({errors}) => {
    return (
        <p className="form-error-container">
                {errors.map(error => {
                    return <span className="location-form-error" key={v4()}>{error}</span>
                })}
        </p>
    )
}

export default ErrorContainer;