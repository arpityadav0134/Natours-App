import loading from './loading.gif'

const Spinner = () => {
    return (
        <div style={{
            textAlign: 'center',
            margin: 'auto',
            paddingTop: '10px',
            backgroundColor: '#f7f7f7'
        }}>
            <img src={loading} alt="loading..." />
        </div>
    )
}

export default Spinner