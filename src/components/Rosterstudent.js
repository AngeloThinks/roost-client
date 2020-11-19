import React from 'react'
import { Link } from 'react-router-dom'
import { format } from '../../Student/node_modules/date-fns'
import { FontAwesomeIcon } from '../../Student/node_modules/@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import './Rosterstudents.css'
import PropTypes from 'prop-types'
import Config from '../config'

export default class Student extends React.Component {
  static defaultProps ={
    onDeleteStudent: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const rosterId = this.props.id

    
    fetch(`${Config.API_ENDPOINT}/students/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))

      })
      .then(() => {
        this.context.deleteStudent(studentId)
        // allow parent to perform extra behaviour
        // this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Student'>
        <h2 className='Student__title'>
        {/* this link may need to be routed differently */}
          <Link to={`/roster/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Student__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          Remove
        </button>
        <div className='Student__dates'>
          <div className='Student__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
Note.propTypes = {
 name: PropTypes.string , 
 id:PropTypes.number , 
 modified: PropTypes.string ,
 onDeleteStudent: PropTypes.func , 
}
