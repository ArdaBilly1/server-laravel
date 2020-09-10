import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class StudentShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          student: {}
        }
      }
 
      componentDidMount () {
 
        const studentId = this.props.match.params.id
 
        axios.get(`/api/student/${studentId}`).then(response => {
          this.setState({
            student: response.data
          })
        })
      }
 
      render () {
        const { student } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama Siswa: {student.nama}</div>
                  <div className='card-body'>
                    <p>NIM: {student.nim}</p>
                    <p>Kelas: {student.kelas}</p>
                    <p>Alamat: {student.alamat}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/student`}
                        >Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default StudentShow