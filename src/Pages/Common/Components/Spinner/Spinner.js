import loading from './loading.gif'

const Spinner = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <img src={loading} alt="loading..." />
        </div>
    )
}

export default Spinner