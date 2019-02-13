import 'babel-polyfill' // For IE
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let app = document.createElement('div')
app.id = 'app'
app.className = 'content-wrapper'
document.body.insertBefore(app, null)

ReactDOM.render(<Routes/>, document.getElementById('app'))
