import styles from './TestForm.module.css';

const FileButton=()=>{      
    return(
        <div className={`input-group ${styles.customerFileBtn}`} >
            <label className="input-group-text" htmlFor="inputGroupFile">Browse</label>
            <input type="file" className="form-control" id="inputGroupFile" />
        </div>
    )
}

export default FileButton