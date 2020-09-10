import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class StudentCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nama  : '',
            kelas : '',
            nim   : '',
            alamat: '',
            alert : null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewStudent = this.handleCreateNewStudent.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Membuat data Siswa berhasil
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/student');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewStudent (event) {
        event.preventDefault()
        const student = {
          nama: this.state.nama,
          kelas: this.state.kelas,
          nim: this.state.nim,
          alamat: this.state.alamat
        }
        axios.post('/api/student/store', student).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Buat Data Siswa</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewStudent}>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='kelas'>Kelas</label>
                        <input
                          id='kelas'
                          type='text'
                          className={`form-control ${this.hasErrorFor('kelas') ? 'is-invalid' : ''}`}
                          name='kelas'
                          value={this.state.kelas}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kelas')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nim'>NIM</label>
                        <input
                          id='nim'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nim') ? 'is-invalid' : ''}`}
                          name='nim'
                          value={this.state.nim}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nim')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <textarea
                          id='alamat'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          rows='10'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/student`}
                        >Back
                      </Link>
                      &nbsp;
                      &nbsp;
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default StudentCreate