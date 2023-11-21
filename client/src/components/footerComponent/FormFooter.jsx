import styles from './Footer.module.css'


export default function FormFooter() {
    return (
        <div className={styles['footer-right']}>
            <form action="#" method="post">

                <h4>Your opinion matters to us</h4>

                <textarea className={styles.commentTextArea} name="message" placeholder="Comment" defaultValue={""} />
                <button>Comment</button>
            </form>
        </div>
    )
}