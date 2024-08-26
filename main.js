
function App() {
   
    const st1 = { color: 'red', backgroundColor: 'lime' }
    const st2 = { color: 'red', backgroundColor: 'blue', fontSize : '60px' } 
    const name = ['Wanapong']
    const lname = ['Nopparat']

    const CalculateAge = (birthYear) => {

        const currentime = new Date().getTime()
        const birthtime = new Date(birthYear).getTime()
        const calculateYear = currentime - birthtime
        const totalday =  calculateYear/1000/60/60/24/365.25
        const year = Math.floor(totalday)
        const month = (totalday-year )*12
        const month2 = Math.floor(month)
        const day = (calculateYear/1000/60/60/24)-(year*365)-(month2*30)
        return `ปี​ :${year} เดือน: ${month2} วัน : ${day.toFixed(0)}`
        
    }

    return (
        <div style={{ }}>
            <h1 style={st1}>{name} {lname}</h1>
            <p style={st2}> Age : {CalculateAge('1996-11-20')} </p>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)