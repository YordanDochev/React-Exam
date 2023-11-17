import styles from './Spinner.module.css'

export default function Spinenr(){
    return (
        <div id="spinner" className={`${styles.show} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}>
            <div className={`${styles.divSpinner} spinner-border text-primary`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}